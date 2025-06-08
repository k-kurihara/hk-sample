import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/layouts"),
      context: {
        heading: "共通見出し",
        cssPath: "assets/main.css",
        tweets: [
          
          "https://twitter.com/akazukin870421/status/1858831692234191163?ref_src=twsrc%5Etfw",
          "https://twitter.com/akazukin870421/status/1796952690905534908?ref_src=twsrc%5Etfw",
          "https://twitter.com/akazukin870421/status/1796952690905534908?ref_src=twsrc%5Etfw",
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {},
    },
    postcss: "./postcss.config.js",
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/pages/about.html"),
      },
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "main.css") {
            return "assets/main.css";
          }
          return "assets/[name].[hash].[ext]";
        },
        // entryFileNames: "assets/main.js",
      },
    },
    minify: "terser",
  },
});
