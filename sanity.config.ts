import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "5wl8so4j",
  dataset: "production",
  title: "Zishun Studios",
  apiVersion: "23-07-2025",
  basePath: "/admin",

  plugins: [structureTool()],

  //   schema: {
  //     types: schemaTypes,
  //   },
});

export default config;
