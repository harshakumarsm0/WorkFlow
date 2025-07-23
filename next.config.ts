import lingoCompiler from "lingo.dev/compiler";

const nextConfig = {
  /* config options here */
};

export default lingoCompiler.next({
  sourceLocale: "en",
  targetLocales: ["hi", "uz", "fr", "es", "de", "zh", "ar"],
  models: 
  {
    "*:*": "google:gemini-2.0-flash"
  },
})(nextConfig);
