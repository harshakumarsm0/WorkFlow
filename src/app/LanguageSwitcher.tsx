import { LocaleSwitcher } from "lingo.dev/react/client";

export default function LanguageSwitcher() {
  return (
    <header style={{ padding: "1rem", textAlign: "right" }}>
      <LocaleSwitcher locales={["en", "hi", "uz", "fr", "es", "de", "zh", "ar"]} />
    </header>
  );
}
