import type { Metadata } from "next";

import ProjectComingSoon from "../project-coming-soon";

const description =
  "Build your own professional sports franchise and guide it from expansion team to dynasty through strategic management, fictional athletes, and long-term organizational growth.";

export const metadata: Metadata = {
  title: "AllSports GM | PJBStudios",
  description,
};

export default function AllSportsGmProjectPage() {
  return (
    <ProjectComingSoon
      name="AllSports GM"
      category="Sports Management Simulation"
      description={description}
      status="Currently in Development"
      variant="sports"
    />
  );
}
