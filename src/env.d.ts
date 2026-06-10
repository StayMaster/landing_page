interface PostHog {
  capture: (event: string, properties?: Record<string, unknown>) => void;
  init: (key: string, options?: Record<string, unknown>) => void;
}

declare global {
  interface Window {
    posthog?: PostHog;
  }
}

export {};
