import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

type Messages = Record<string, any>;
type RequestContext = {
  locale: string;
};

export default getRequestConfig(async ({ locale }: RequestContext) => {
  // Validate the locale
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  let messages: Messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to default locale if the requested locale's messages fail to load
    messages = (await import(`../../messages/${routing.defaultLocale}.json`)).default;
  }

  return {
    locale,
    messages
  };
});
