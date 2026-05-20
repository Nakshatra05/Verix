import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import AlgorandProvider from "../components/AlgorandProvider";
import ErrorBoundary from "../components/algos/ErrorBoundary";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-holo">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the metaverse</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This passport route doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="chip glow-neon">← back to verix</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Signal lost</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went sideways.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 chip glow-lime"
        >
          retry connection
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Verix — Your Identity. Your Control." },
      { name: "description", content: "Verix is the decentralized Data Passport. Own, manage, and selectively share your identity across Web2 and Web3." },
      { name: "author", content: "Verix" },
      { property: "og:title", content: "Verix — Your Identity. Your Control." },
      { property: "og:description", content: "The decentralized Data Passport for the open internet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <ErrorBoundary>
      <AlgorandProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </AlgorandProvider>
    </ErrorBoundary>
  );
}
