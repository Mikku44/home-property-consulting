import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home property cousulting company limited" },
    { name: "description", content: "Home property cousulting company limited" },
  ];
}

export default function Home() {
  return <main className="min-h-screen">
    <div className="">
      <img src="/hero2.png" alt="" />
    </div>
  </main>;
}
