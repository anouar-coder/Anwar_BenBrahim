import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";
import { getRequest, getResponseHeaders } from "@tanstack/react-start/server";

import { renderErrorPage } from "./lib/error-page";
import {
  DEFAULT_LOCALE,
  parseLocaleCookie,
  preferredLocaleFromAcceptLanguage,
  serializeLocaleCookie,
} from "./lib/i18n/locale";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Resolves the visitor's language before the page renders, so the HTML comes
// back in the right language instead of flashing English and swapping after
// hydration. First-time visitors are matched from Accept-Language and the
// result is persisted as a cookie, which keeps the client reading exactly the
// same value the server used.
const localeMiddleware = createMiddleware().server(async ({ next }) => {
  const request = getRequest();
  const cookieLocale = parseLocaleCookie(request.headers.get("cookie"));

  const locale =
    cookieLocale ??
    preferredLocaleFromAcceptLanguage(request.headers.get("accept-language")) ??
    DEFAULT_LOCALE;

  const result = await next({ context: { locale } });

  if (!cookieLocale) {
    getResponseHeaders().append("set-cookie", serializeLocaleCookie(locale));
  }

  return result;
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, localeMiddleware, csrfMiddleware],
}));
