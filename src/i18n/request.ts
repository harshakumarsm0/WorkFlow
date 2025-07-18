import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

interface Messages {
  HomePage: {
    title: string;
    about: string;
  };
  Header: {
    home: string;
    about: string;
    contact: string;
    login: string;
    signup: string;
  };
  [key: string]: Record<string, string>; // For any additional namespaces that might be added later
}

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
