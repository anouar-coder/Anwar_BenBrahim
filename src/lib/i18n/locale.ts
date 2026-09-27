export const LOCALES = ["en", "fr"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_COOKIE = "folio_lang";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Reads the locale out of a raw `Cookie:` request header. Server-side only. */
export function parseLocaleCookie(cookieHeader: string | null): Locale | undefined {
  if (!cookieHeader) return undefined;

  for (const part of cookieHeader.split(";")) {
    const separator = part.indexOf("=");
    if (separator === -1) continue;

    const name = part.slice(0, separator).trim();
    if (name !== LOCALE_COOKIE) continue;

    // A client can send anything, and decodeURIComponent throws a URIError on a
    // stray "%" — which used to turn a malformed cookie into a 500 for the whole
    // page. A bad cookie just means "no preference", so ignore it.
    let value: string;
    try {
      value = decodeURIComponent(part.slice(separator + 1).trim());
    } catch {
      continue;
    }

    if (isLocale(value)) return value;
  }

  return undefined;
}

/** Reads the locale from `document.cookie`. */
export function readDocumentLocale(): Locale | undefined {
  if (typeof document === "undefined") return undefined;

  return parseLocaleCookie(document.cookie);
}

/**
 * First-visit fallback, resolved on the server from `Accept-Language` and then
 * persisted as a cookie so the client never has to guess for itself.
 */
export function preferredLocaleFromAcceptLanguage(header: string | null): Locale | undefined {
  if (!header) return undefined;

  for (const tag of header.split(",")) {
    const primary = tag.split(";")[0]?.trim().split("-")[0]?.toLowerCase();
    if (isLocale(primary)) return primary;
  }

  return undefined;
}

export function serializeLocaleCookie(locale: Locale): string {
  return `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function writeLocaleCookie(locale: Locale): void {
  if (typeof document === "undefined") return;

  document.cookie = serializeLocaleCookie(locale);
}
