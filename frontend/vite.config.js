import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

const getPlugins = (mode) => {
  if (mode === "development") {
    return [
      react(),
      copy({
        targets: [
          {
            src: "src/assets",
            dest: "../static/react/",
          },
        ],
      }),
    ];
  } else {
    return [react()];
  }
};
// https://vitejs.dev/config/

// export default defineConfig({
//   build: { manifest: true },
//   base: process.env.mode === "production" ? "/static/" : "/",
//   root: "./src",
//   plugins: [reactRefresh()],
// });

const hmrConfig = {
  protocol: "wss",
  host: "localhost",
  port: 5173,
  clientPort: 443,
};

export default defineConfig(({mode})=>{
  const config ={
    plugins: getPlugins(mode),
    root: "./src",
    base:"/static/react/",
    build: {
      outDir: resolve(__dirname, "../static/react"),
      emptyOutDir: true,
      assetsDir: ".",
      manifest: true,
      cssMinify: "lightningcss",
      sourcemap: "inline",
      rollupOptions: {
        // input:resolve(__dirname,"src/main.jsx"),
        output: { entryFileNames: "[name].js", assetFileNames: "[name].[ext]" },
      },
      // server:{
      //   host:"localhost",
      //   port:5173,
      //   hmr:hmrConfig,
      // origin: 'http://127.0.0.1:5173'
      // }
    },
  }
  return config 
});
