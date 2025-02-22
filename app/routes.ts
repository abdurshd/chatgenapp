import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"),
  route("/chat", "routes/chat.tsx"),
  route("/settings", "routes/settings.tsx"),
  route("/account", "routes/account.tsx"),
  route("/logout", "routes/logout.tsx")
] satisfies RouteConfig;
