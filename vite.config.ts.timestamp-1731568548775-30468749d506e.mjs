// vite.config.ts
import { vitePlugin as remix } from "file:///data/data/com.termux/files/home/repository/symposium.com/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///data/data/com.termux/files/home/repository/symposium.com/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///data/data/com.termux/files/home/repository/symposium.com/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true
      },
      ignoredRouteFiles: ["./app/api/**/*", "*/api/**/*"]
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9yZXBvc2l0b3J5L3N5bXBvc2l1bS5jb21cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL3JlcG9zaXRvcnkvc3ltcG9zaXVtLmNvbS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9yZXBvc2l0b3J5L3N5bXBvc2l1bS5jb20vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJAcmVtaXgtcnVuL25vZGVcIiB7XG5cdGludGVyZmFjZSBGdXR1cmUge1xuXHRcdHYzX3NpbmdsZUZldGNoOiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRyZW1peCh7XG5cdFx0XHRmdXR1cmU6IHtcblx0XHRcdFx0djNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXG5cdFx0XHRcdHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxuXHRcdFx0XHR2M190aHJvd0Fib3J0UmVhc29uOiB0cnVlLFxuXHRcdFx0XHR2M19zaW5nbGVGZXRjaDogdHJ1ZSxcblx0XHRcdFx0djNfbGF6eVJvdXRlRGlzY292ZXJ5OiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdGlnbm9yZWRSb3V0ZUZpbGVzOiBbXCIuL2FwcC9hcGkvKiovKlwiLCBcIiovYXBpLyoqLypcIl0sXG5cdFx0fSksXG5cdFx0dHNjb25maWdQYXRocygpLFxuXHRdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZWLFNBQVMsY0FBYyxhQUFhO0FBQ2pZLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBUTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLFFBQ25CLHNCQUFzQjtBQUFBLFFBQ3RCLHFCQUFxQjtBQUFBLFFBQ3JCLGdCQUFnQjtBQUFBLFFBQ2hCLHVCQUF1QjtBQUFBLE1BQ3hCO0FBQUEsTUFDQSxtQkFBbUIsQ0FBQyxrQkFBa0IsWUFBWTtBQUFBLElBQ25ELENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNmO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
