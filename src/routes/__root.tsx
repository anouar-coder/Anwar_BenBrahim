import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { DICTIONARIES } from "../lib/i18n/dictionary";
import { LocaleProvider } from "../lib/i18n/LocaleProvider";
import { useRootLocale } from "../lib/i18n/useLocale";
import { DEFAULT_LOCALE, isLocale, readDocumentLocale, type Locale } from "../lib/i18n/locale";

type ServerContext = { locale?: Locale };

function resolveLocale(routerContext: unknown): Locale {
  const serverContext = (routerContext as { serverContext?: ServerContext } | undefined)
    ?.serverContext;

  if (isLocale(serverContext?.locale)) return serverContext.locale;

  return readDocumentLocale() ?? DEFAULT_LOCALE;
}

function NotFoundComponent() {
  const copy = DICTIONARIES[useRootLocale()].errors;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{copy.notFoundTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{copy.notFoundBody}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {copy.goHome}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const copy = DICTIONARIES[useRootLocale()].errors;
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">{copy.errorTitle}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{copy.errorBody}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {copy.tryAgain}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {copy.goHome}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  beforeLoad: async (): Promise<{ locale: Locale }> => {
    const router = await getRouterInstance();

    return { locale: resolveLocale(router.options.additionalContext) };
  },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0b0f14" },
      { name: "color-scheme", content: "dark" },
      // Kept here rather than on the index route so the 404 and error pages
      // share the same preview. Swap the path for an absolute URL if a scraper
      // ever needs one.
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Anwar Ben Brahim — computer engineering @ ENIT" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      // Explicit favicons: the ICO fixes the implicit /favicon.ico request that
      // 404s when no icon is declared, the PNG gives a crisp 32px tab icon and
      // the apple-touch-icon covers iOS, which ignores ICO entirely.
      { rel: "icon", href: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const locale = useRootLocale();

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { locale } = Route.useRouteContext();

  return (
    <LocaleProvider locale={locale}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </LocaleProvider>
  );
}
