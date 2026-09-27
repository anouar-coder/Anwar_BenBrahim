import { useMemo, type ReactNode } from "react";

import { DICTIONARIES } from "./dictionary";
import { DEFAULT_LOCALE, type Locale } from "./locale";
import { LocaleContext, setLocale, type LocaleContextValue } from "./useLocale";

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      copy: DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE],
      setLocale,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
