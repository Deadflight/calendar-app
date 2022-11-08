// vite.config.ts
import { defineConfig, splitVendorChunkPlugin } from "file:///C:/Users/corre/OneDrive/Escritorio/work/courses-projects/udemy/fernando-herrera/react/calendar-app/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/corre/OneDrive/Escritorio/work/courses-projects/udemy/fernando-herrera/react/calendar-app/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/corre/OneDrive/Escritorio/work/courses-projects/udemy/fernando-herrera/react/calendar-app/node_modules/vite-plugin-pwa/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\corre\\OneDrive\\Escritorio\\work\\courses-projects\\udemy\\fernando-herrera\\react\\calendar-app";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    VitePWA({
      includeAssets: ["vite.svg"],
      srcDir: "src",
      filename: "sw.ts",
      strategies: "injectManifest",
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  server: {
    port: 3e3,
    host: true
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__vite_injected_original_dirname, "node_modules/bootstrap")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjb3JyZVxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXHdvcmtcXFxcY291cnNlcy1wcm9qZWN0c1xcXFx1ZGVteVxcXFxmZXJuYW5kby1oZXJyZXJhXFxcXHJlYWN0XFxcXGNhbGVuZGFyLWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcY29ycmVcXFxcT25lRHJpdmVcXFxcRXNjcml0b3Jpb1xcXFx3b3JrXFxcXGNvdXJzZXMtcHJvamVjdHNcXFxcdWRlbXlcXFxcZmVybmFuZG8taGVycmVyYVxcXFxyZWFjdFxcXFxjYWxlbmRhci1hcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2NvcnJlL09uZURyaXZlL0VzY3JpdG9yaW8vd29yay9jb3Vyc2VzLXByb2plY3RzL3VkZW15L2Zlcm5hbmRvLWhlcnJlcmEvcmVhY3QvY2FsZW5kYXItYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBzcGxpdFZlbmRvckNodW5rUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdHJlYWN0KCksXG5cdFx0c3BsaXRWZW5kb3JDaHVua1BsdWdpbigpLFxuXHRcdFZpdGVQV0Eoe1xuXHRcdFx0aW5jbHVkZUFzc2V0czogW1widml0ZS5zdmdcIl0sXG5cdFx0XHRzcmNEaXI6IFwic3JjXCIsXG5cdFx0XHRmaWxlbmFtZTogXCJzdy50c1wiLFxuXHRcdFx0c3RyYXRlZ2llczogXCJpbmplY3RNYW5pZmVzdFwiLFxuXHRcdFx0aW5qZWN0UmVnaXN0ZXI6IFwiYXV0b1wiLFxuXHRcdFx0cmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcblx0XHRcdHdvcmtib3g6IHtcblx0XHRcdFx0Z2xvYlBhdHRlcm5zOiBbXCIqKi8qLntqcyxjc3MsaHRtbCxpY28scG5nLHN2Z31cIl0sXG5cdFx0XHR9LFxuXHRcdFx0ZGV2T3B0aW9uczoge1xuXHRcdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblx0c2VydmVyOiB7XG5cdFx0cG9ydDogMzAwMCxcblx0XHRob3N0OiB0cnVlLFxuXHR9LFxuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdFwifmJvb3RzdHJhcFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXBcIiksXG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4ZSxTQUFTLGNBQWMsOEJBQThCO0FBQ25pQixPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTix1QkFBdUI7QUFBQSxJQUN2QixRQUFRO0FBQUEsTUFDUCxlQUFlLENBQUMsVUFBVTtBQUFBLE1BQzFCLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLE1BQ2hCLGNBQWM7QUFBQSxNQUNkLFNBQVM7QUFBQSxRQUNSLGNBQWMsQ0FBQyxnQ0FBZ0M7QUFBQSxNQUNoRDtBQUFBLE1BQ0EsWUFBWTtBQUFBLFFBQ1gsU0FBUztBQUFBLE1BQ1Y7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sY0FBYyxLQUFLLFFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsSUFDL0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
