// app/+types/root.ts
export type Route = {
    LinksFunction: () => { rel: string; href: string }[];
    MetaFunction: () => { title: string }[];
    ErrorBoundaryProps: { error: unknown };
    LoaderFunction: () => Promise<any>;
    ComponentProps: { loaderData: any };
    LoaderArgs: { context: any };
    MetaArgs: any;
    // Add additional properties as needed
  };