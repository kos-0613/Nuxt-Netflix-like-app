import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/node_modules/.pnpm/nuxt@3.1.1_eslint@8.33.0_sass@1.57.1_typescript@4.9.5/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}