import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "5wl8so4j",
  dataset: "production",
  apiVersion: "23-07-2025",
  useCdn: true,
});
