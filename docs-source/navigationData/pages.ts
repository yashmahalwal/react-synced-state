export type NavigationEntry = {
  path: string;
  label: string;
  nativeNavigation?: boolean;
};

export const Pages = {
  Home: { path: "/", label: "Home" },
  Problem: { path: "/problem", label: "Problem" },
  QuickStart: { path: "/quick-start", label: "Quick Start" },
  MainConcepts: {
    Index: { path: "/main-concepts", label: "Main Concepts" },
    Queueing: { path: "/main-concepts/queueing", label: "Queueing" },
    Priority: { path: "/main-concepts/priority", label: "Priority" },
    Layers: { path: "/main-concepts/layers", label: "Layers" },
  },
  Examples: {
    Index: { path: "/examples", label: "Examples" },
    NotificationManagement: { path: "/examples/notification-management", label: "Notification Management" },
  },
  ApiReference: { path: "/react-synced-state/api-reference/", label: "API Reference", nativeNavigation: true },
} as const;
