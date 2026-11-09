import type { Metadata } from "next";
import Projects from "@/components/Projects";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by Ibsa Abera: full-stack, backend and frontend work built with Next.js, React, Node.js, Express, PostgreSQL and MongoDB.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <Projects mode="all" />
    </SiteShell>
  );
}
