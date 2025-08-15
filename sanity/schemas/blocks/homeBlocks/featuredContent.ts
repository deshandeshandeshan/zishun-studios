import { defineField, defineType } from "sanity";

export const featuredContentType = defineType({
  name: "featuredContent",
  title: "Featured Content",
  type: "object",
  fields: [
    defineField({
      name: "selectedWorks",
      type: "array",
      title: "Selected Works",
      validation: (rule) =>
        rule
          .min(1)
          .max(3)
          .error("You must add at least 1 selected work and no more than 3."),
      of: [
        {
          type: "object",
          name: "selectedWork",
          title: "Selected Work",
          fields: [
            defineField({
              name: "workTitle",
              type: "string",
              title: "Work Title",
            }),
            defineField({
              name: "workRoute",
              type: "string",
              title: "Work Route (Internal Link `/selected-work/work-title`)",
            }),
            defineField({
              name: "selectedWorkImage",
              type: "image",
              title: "Selected Work Image",
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
          ],
        },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      title: "Categories",
      validation: (rule) =>
        rule
          .min(1)
          .max(3)
          .error("You must add at least 1 selected work and no more than 3."),
      of: [
        {
          type: "object",
          name: "category",
          title: "Category",
          fields: [
            defineField({
              name: "categoryName",
              type: "string",
              title: "Category Name",
            }),
            defineField({
              name: "workRoute",
              type: "string",
              title: "Category Route (Internal Link eg. `/selected-works`)",
            }),
            defineField({
              name: "categoryImage",
              type: "image",
              title: "Category Image",
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
          ],
        },
      ],
    }),
  ],
});
