import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [

  layout("components/layout.tsx", [
    index("routes/home.tsx"),

    route("/services", "routes/services.tsx"),
    route("/services/buy-condo", "routes/services/buy-condo.tsx"),
    route("/services/sell-rent", "routes/services/sell-rent.tsx"),
    route("/services/condo-mortgage", "routes/services/condo-mortgage.tsx"),
    route("/services/money-making-course", "routes/services/money-making-course.tsx"),

    route("/blog", "routes/blog.tsx"),
    route("/blog/:slug", "routes/blog-detail.tsx"),
    route("/about", "routes/about.tsx"),
    route("/accomplishment", "routes/accomplishment.tsx"),
    route("/contact", "routes/contact.tsx"),
  ])


] satisfies RouteConfig;
