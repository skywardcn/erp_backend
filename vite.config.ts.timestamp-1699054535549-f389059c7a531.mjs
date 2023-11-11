// vite.config.ts
import { defineConfig } from "file:///E:/code/react/tampermonkey-demo/node_modules/.pnpm/registry.npmmirror.com+vite@4.5.0_@types+node@20.8.10/node_modules/vite/dist/node/index.js";
import react from "file:///E:/code/react/tampermonkey-demo/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-react@4.1.0_vite@4.5.0/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import inspect from "file:///E:/code/react/tampermonkey-demo/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-inspect@0.7.41_vite@4.5.0/node_modules/vite-plugin-inspect/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\code\\react\\tampermonkey-demo";
var vite_config_default = defineConfig({
  mode: "production",
  plugins: [
    react(),
    inspect()
  ],
  resolve: {
    alias: [{
      find: "@",
      replacement: resolve(__vite_injected_original_dirname, "src")
    }]
  },
  build: {
    target: "es2015",
    emptyOutDir: true,
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: "index.js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXHJlYWN0XFxcXHRhbXBlcm1vbmtleS1kZW1vXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjb2RlXFxcXHJlYWN0XFxcXHRhbXBlcm1vbmtleS1kZW1vXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9jb2RlL3JlYWN0L3RhbXBlcm1vbmtleS1kZW1vL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBpbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIG1vZGU6IFwicHJvZHVjdGlvblwiLFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBpbnNwZWN0KClcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbe1xuICAgICAgZmluZDogJ0AnLCByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpXG4gICAgfV1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlczIwMTUnLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIG1pbmlmeTogdHJ1ZSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJpbmRleC5qc1wiXG4gICAgICB9XG4gICAgfVxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVIsU0FBUyxvQkFBb0I7QUFDcFQsT0FBTyxXQUFXO0FBRWxCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGFBQWE7QUFKcEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU8sQ0FBQztBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQUssYUFBYSxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNsRCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
