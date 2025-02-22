import { redirect } from "react-router";
import type { Route } from "~/types/root.types";

export function loader({ context }: Route["LoaderArgs"]) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Logout({ loaderData }: Route["ComponentProps"]) {
  return <div className="purple">Logout page</div>;
}

export const meta: Route["MetaFunction"] = () => {
  return [{ title: "Logging out..." }];
}; 