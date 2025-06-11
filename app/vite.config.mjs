import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/layouts"),
      context: {
        title: "はんなんKawaiiプロジェクト",
        description: "大阪府阪南市からサブカルチャーを発信！",
        keywords: "大阪府,阪南市,イラストレーター,ご当地,VTuber,サブカルチャー",
        ogImage: "https://hk-project.com/hannan-kawaii/images/og_img.png",
        ogUrl: "https://hk-project.com/hannan-kawaii/",
        cssPath: "assets/main.css",
        version: "1_0_1",
        tweets: [
          "https://twitter.com/h_kawaiiproject/status/1932392297980944832?ref_src=twsrc%5Etfw",
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
