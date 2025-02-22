import type { Route } from "~/types/root.types";

export default function Settings({ loaderData }: Route["ComponentProps"]) {
  return <div className="p-4">Settings Page</div>;
}

export function loader({ context }: Route["LoaderArgs"]) {
    return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
  }

export const meta: Route["MetaFunction"] = () => {
  return [{ title: "Settings" }];
}; 