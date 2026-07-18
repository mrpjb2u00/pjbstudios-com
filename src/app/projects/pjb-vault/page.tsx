import type { Metadata } from "next";

import ProjectComingSoon from "../project-coming-soon";

const description =
  "A secure cloud storage platform for organizing, protecting, and sharing your photos, videos, and files across all your devices.";

export const metadata: Metadata = {
  title: "PJB Vault | PJBStudios",
  description,
};

export default function PjbVaultProjectPage() {
  return (
    <ProjectComingSoon
      name="PJB Vault"
      category="Productivity & Cloud Storage"
      description={description}
      status="In Planning"
      variant="productivity"
    />
  );
}
