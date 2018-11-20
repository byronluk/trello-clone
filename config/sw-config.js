module.exports = {
  cache: {
    cacheId: "Brello",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "Brello",
    short_name: "PWA",
    theme_color: "#FFFFFF",
  }
};
