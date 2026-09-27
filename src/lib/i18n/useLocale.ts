import { createContext, useContext } from "react";
import { useRouterState } from "@tanstack/react-router";

import type { Dictionary } from "./dictionary";
import { DEFAULT_LOCALE, writeLocaleCookie, type Locale } from "./locale";

export type LocaleContextValue = {
  locale: Locale;
  copy: Dictionary;
  setLocale: (next: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);

export function setLocale(next: Locale): void {
  if (typeof window === "undefined") return;

  writeLocaleCookie(next);

  // The locale is resolved on the server, so a reload is what makes the new
  // language the one that gets server-rendered. Avoids a flash of stale copy
  // and any hydration mismatch.
  window.location.reload();
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }

  return context;
}

/**
 * Reads the locale straight off the root match instead of React context, so it
 * also works in the app shell and the error/404 boundaries — those render
 * outside <LocaleProvider>.
 */
export function useRootLocale(): Locale {
  return useRouterState({
    select: (state) => {
      const match = state.matches[0];
      const context = match?.context as { locale?: Locale } | undefined;

      return context?.locale ?? DEFAULT_LOCALE;
    },
  });
}
