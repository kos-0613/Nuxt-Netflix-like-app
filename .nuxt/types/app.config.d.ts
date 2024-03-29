
import type { Defu } from 'defu'
import cfg0 from "/Users/kobayashinanari/Desktop/Nuxt-Netflix-like-app/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>

declare module '@nuxt/schema' {
  interface AppConfig extends ResolvedAppConfig { }
}
