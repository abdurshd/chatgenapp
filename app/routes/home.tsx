import type { Route } from "~/types/root.types";

export function meta({}: Route["MetaArgs"]) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route["LoaderArgs"]) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route["ComponentProps"]) {
  return <div className="purple">Hello</div>;
}
