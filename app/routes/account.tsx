import type { Route } from "~/types/root.types";

export default function Account({ loaderData }: Route["ComponentProps"]) {
    return <div className="p-4">Account Page</div>;
}

export function loader({ context }: Route["LoaderArgs"]) {
    return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
  }

export const meta: Route["MetaFunction"] = () => {
  return [{ title: "Account" }];
}; 