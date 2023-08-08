/// <reference types="vite/client" />
declare module 'nuxt/schema' {
  interface AppConfig {}

  // 让配置 defineAppConfig 时有类型提示
  interface AppConfigInput {}
}

declare module 'vue-router' {
  interface RouteMeta {
    fromOtherPath: {
      hash: string;
    };
  }
}

declare module 'vue' {
  interface CSSProperties {
    [key: `--${string}`]: string;
  }
}

export {};
