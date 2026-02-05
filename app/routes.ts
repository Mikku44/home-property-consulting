import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [

    layout("components/layout.tsx", [

        index("routes/home.tsx"),
        route("/services","routes/services.tsx"),
        route("/blog","routes/blog.tsx"),
        route("/blog/:id","routes/blog-detail.tsx"),
        route("/about","routes/about.tsx"),
        route("/contact","routes/contact.tsx"),
    ])

] satisfies RouteConfig;
