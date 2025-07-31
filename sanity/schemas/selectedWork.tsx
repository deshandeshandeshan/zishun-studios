import { defineField, defineType } from "sanity";

export const selectedWorkType = defineType({
  name: "selectedWork",
  title: "Selected Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role in Project",
    }),
    defineField({
      name: "selectedWorkImage",
      type: "image",
      title: "About Image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "caption",
          type: "string",
        }),
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        }),
      ],
    }),
    defineField({
      name: "content",
      type: "pageBuilder",
      options: {
        insertMenu: {
          filter: true,
          groups: [
            {
              name: "home",
              title: "Home",
              of: ["aboutBlock", "featuredContent", "headerMedia"],
            },
            {
              name: "photography",
              title: "Photography",
              of: [
                "doubleLandscape",
                "doublePortrait",
                "largeImageLeft",
                "largeImageRight",
                "singleLandscape",
                "singlePortrait",
                "longImageRight",
              ],
            },
            {
              name: "work",
              title: "Selected Work",
              of: [
                "creditsAndAwards",
                "imageCarousel",
                "workInformation",
                "workHeaderMedia",
                "workLandscapeMedia",
              ],
            },
            {
              name: "event",
              title: "Event",
              of: ["eventBlock"],
            },
            {
              name: "press",
              title: "Press",
              of: ["pressBlock"],
            },
          ],
        },
      },
    }),
  ],
});
