// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/vite@5.1.4/node_modules/vite/dist/node/index.js";
import Vue from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.4_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import generateSitemap from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/vite-ssg-sitemap@0.6.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.1.4_vue-router@4.3.0_vue@3.4.21/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.12.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0_rollup@4.12.0/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/unplugin-vue-markdown@0.26.0_rollup@4.12.0_vite@5.1.4/node_modules/unplugin-vue-markdown/dist/vite.js";
import VueMacros from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/unplugin-vue-macros@2.7.10_@vueuse+core@10.9.0_rollup@4.12.0_typescript@5.3.3_vite@5.1.4_vue@3.4.21/node_modules/unplugin-vue-macros/dist/vite.mjs";
import VueDevTools from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/vite-plugin-vue-devtools@7.0.15_rollup@4.12.0_vite@5.1.4_vue@3.4.21/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import LinkAttributes from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import Unocss from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/unocss@0.58.5_postcss@8.4.35_rollup@4.12.0_vite@5.1.4/node_modules/unocss/dist/vite.mjs";
import Shiki from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/@shikijs+markdown-it@1.1.7/node_modules/@shikijs/markdown-it/dist/index.mjs";
import WebfontDownload from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/vite-plugin-webfont-dl@3.9.1_vite@5.1.4/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/unplugin-vue-router@0.8.4_rollup@4.12.0_vue-router@4.3.0_vue@3.4.21/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///C:/Users/HP/code/webstudio/node_modules/.pnpm/unplugin-vue-router@0.8.4_rollup@4.12.0_vue-router@4.3.0_vue@3.4.21/node_modules/unplugin-vue-router/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\HP\\code\\webstudio";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/]
        })
      }
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: [".vue", ".md"],
      dts: "src/typed-router.d.ts"
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "@vueuse/head",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        }
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
    // https://github.com/unplugin/unplugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      async markdownItSetup(md) {
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(await Shiki({
          defaultColor: false,
          themes: {
            light: "vitesse-light",
            dark: "vitesse-dark"
          }
        }));
      }
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools()
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom"
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false
    },
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ["workbox-window"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxjb2RlXFxcXHdlYnN0dWRpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcY29kZVxcXFx3ZWJzdHVkaW9cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hQL2NvZGUvd2Vic3R1ZGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IGdlbmVyYXRlU2l0ZW1hcCBmcm9tICd2aXRlLXNzZy1zaXRlbWFwJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBNYXJrZG93biBmcm9tICd1bnBsdWdpbi12dWUtbWFya2Rvd24vdml0ZSdcbmltcG9ydCBWdWVNYWNyb3MgZnJvbSAndW5wbHVnaW4tdnVlLW1hY3Jvcy92aXRlJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBMaW5rQXR0cmlidXRlcyBmcm9tICdtYXJrZG93bi1pdC1saW5rLWF0dHJpYnV0ZXMnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IFNoaWtpIGZyb20gJ0BzaGlraWpzL21hcmtkb3duLWl0J1xuaW1wb3J0IFdlYmZvbnREb3dubG9hZCBmcm9tICd2aXRlLXBsdWdpbi13ZWJmb250LWRsJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIFZ1ZU1hY3Jvcyh7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogVnVlKHtcbiAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N2YS91bnBsdWdpbi12dWUtcm91dGVyXG4gICAgVnVlUm91dGVyKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsnLnZ1ZScsICcubWQnXSxcbiAgICAgIGR0czogJ3NyYy90eXBlZC1yb3V0ZXIuZC50cycsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuICAgIExheW91dHMoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ0B2dWV1c2UvaGVhZCcsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcbiAgICAgICAge1xuICAgICAgICAgIC8vIGFkZCBhbnkgb3RoZXIgaW1wb3J0cyB5b3Ugd2VyZSByZWx5aW5nIG9uXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXIvYXV0byc6IFsndXNlTGluayddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICBkaXJzOiBbXG4gICAgICAgICdzcmMvY29tcG9zYWJsZXMnLFxuICAgICAgICAnc3JjL3N0b3JlcycsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXG4gICAgLy8gc2VlIHVuby5jb25maWcudHMgZm9yIGNvbmZpZ1xuICAgIFVub2NzcygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3VucGx1Z2luL3VucGx1Z2luLXZ1ZS1tYXJrZG93blxuICAgIC8vIERvbid0IG5lZWQgdGhpcz8gVHJ5IHZpdGVzc2UtbGl0ZTogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGVzc2UtbGl0ZVxuICAgIE1hcmtkb3duKHtcbiAgICAgIHdyYXBwZXJDbGFzc2VzOiAncHJvc2UgcHJvc2Utc20gbS1hdXRvIHRleHQtbGVmdCcsXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIGFzeW5jIG1hcmtkb3duSXRTZXR1cChtZCkge1xuICAgICAgICBtZC51c2UoTGlua0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgICBtYXRjaGVyOiAobGluazogc3RyaW5nKSA9PiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QobGluayksXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgICByZWw6ICdub29wZW5lcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgbWQudXNlKGF3YWl0IFNoaWtpKHtcbiAgICAgICAgICBkZWZhdWx0Q29sb3I6IGZhbHNlLFxuICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgbGlnaHQ6ICd2aXRlc3NlLWxpZ2h0JyxcbiAgICAgICAgICAgIGRhcms6ICd2aXRlc3NlLWRhcmsnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKVxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0LWFnZW5jeS92aXRlLXBsdWdpbi13ZWJmb250LWRsXG4gICAgV2ViZm9udERvd25sb2FkKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2ViZmFuc3Bsei92aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcbiAgICBWdWVEZXZUb29scygpLFxuICBdLFxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlc3QtZGV2L3ZpdGVzdFxuICB0ZXN0OiB7XG4gICAgaW5jbHVkZTogWyd0ZXN0LyoqLyoudGVzdC50cyddLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICB9LFxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXNzZ1xuICBzc2dPcHRpb25zOiB7XG4gICAgc2NyaXB0OiAnYXN5bmMnLFxuICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxuICAgIGNyaXR0ZXJzT3B0aW9uczoge1xuICAgICAgcmVkdWNlSW5saW5lU3R5bGVzOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uRmluaXNoZWQoKSB7XG4gICAgICBnZW5lcmF0ZVNpdGVtYXAoKVxuICAgIH0sXG4gIH0sXG5cbiAgc3NyOiB7XG4gICAgLy8gVE9ETzogd29ya2Fyb3VuZCB1bnRpbCB0aGV5IHN1cHBvcnQgbmF0aXZlIEVTTVxuICAgIG5vRXh0ZXJuYWw6IFsnd29ya2JveC13aW5kb3cnXSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBRLE9BQU8sVUFBVTtBQUMzUixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sY0FBYztBQUNyQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGVBQWU7QUFDdEIsU0FBUyw0QkFBNEI7QUFmckMsSUFBTSxtQ0FBbUM7QUFpQnpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxLQUFLLFFBQVEsa0NBQVcsS0FBSyxDQUFDO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDUCxLQUFLLElBQUk7QUFBQSxVQUNQLFNBQVMsQ0FBQyxVQUFVLE9BQU87QUFBQSxRQUM3QixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsSUFHRCxVQUFVO0FBQUEsTUFDUixZQUFZLENBQUMsUUFBUSxLQUFLO0FBQUEsTUFDMUIsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBO0FBQUEsSUFHRCxRQUFRO0FBQUE7QUFBQSxJQUdSLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsVUFFRSxtQkFBbUIsQ0FBQyxTQUFTO0FBQUEsUUFDL0I7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsUUFDSjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUE7QUFBQSxJQUdELFdBQVc7QUFBQTtBQUFBLE1BRVQsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBO0FBQUEsTUFFeEIsU0FBUyxDQUFDLFVBQVUsY0FBYyxPQUFPO0FBQUEsTUFDekMsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBO0FBQUE7QUFBQSxJQUlELE9BQU87QUFBQTtBQUFBO0FBQUEsSUFJUCxTQUFTO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixhQUFhO0FBQUEsTUFDYixNQUFNLGdCQUFnQixJQUFJO0FBQ3hCLFdBQUcsSUFBSSxnQkFBZ0I7QUFBQSxVQUNyQixTQUFTLENBQUMsU0FBaUIsZUFBZSxLQUFLLElBQUk7QUFBQSxVQUNuRCxPQUFPO0FBQUEsWUFDTCxRQUFRO0FBQUEsWUFDUixLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0YsQ0FBQztBQUNELFdBQUcsSUFBSSxNQUFNLE1BQU07QUFBQSxVQUNqQixjQUFjO0FBQUEsVUFDZCxRQUFRO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0YsQ0FBQyxDQUFDO0FBQUEsTUFDSjtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsSUFHRCxnQkFBZ0I7QUFBQTtBQUFBLElBR2hCLFlBQVk7QUFBQSxFQUNkO0FBQUE7QUFBQSxFQUdBLE1BQU07QUFBQSxJQUNKLFNBQVMsQ0FBQyxtQkFBbUI7QUFBQSxJQUM3QixhQUFhO0FBQUEsRUFDZjtBQUFBO0FBQUEsRUFHQSxZQUFZO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixpQkFBaUI7QUFBQSxNQUNmLG9CQUFvQjtBQUFBLElBQ3RCO0FBQUEsSUFDQSxhQUFhO0FBQ1gsc0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUEsRUFFQSxLQUFLO0FBQUE7QUFBQSxJQUVILFlBQVksQ0FBQyxnQkFBZ0I7QUFBQSxFQUMvQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
