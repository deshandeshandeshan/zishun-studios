import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Zishun Studios")
    .items([
      S.listItem()
        .title("Pages")
        .child(S.documentTypeList("page").title("Pages")),
      S.documentTypeListItem("selectedWork").title("Selected Work"),
      S.documentTypeListItem("painting").title("Painting"),
      S.listItem()
        .title("About Page")
        .id("about")
        .schemaType("about")
        .child(
          S.editor()
            .title("About Page")
            .id("about")
            .schemaType("about")
            .documentId("about")
        ),
      S.listItem()
        .id("footerSettings")
        .schemaType("footerSettings")
        .title("Footer Settings")
        .child(
          S.editor()
            .id("footerSettings")
            .schemaType("footerSettings")
            .documentId("footerSettings")
        ),
    ]);
