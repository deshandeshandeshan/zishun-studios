import { defineField, defineType } from "sanity";

export const pressBlockType = defineType({
  name: "pressBlock",
  type: "object",
  fields: [
    defineField({
      name: "pressSections",
      title: "Press Sections",
      type: "array",
      of: [
        defineField({
          name: "pressSection",
          type: "object",
          title: "Press Section",
          fields: [
            defineField({
              name: "typeOfPress",
              title: "Type of Press",
              type: "string",
            }),
            defineField({
              name: "pressImage",
              type: "image",
              options: {
                hotspot: true,
              },
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
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Press Description",
              type: "text",
            }),
            defineField({
              name: "linkToPress",
              title: "Link To Press",
              type: "url",
            }),
          ],
        }),
      ],
    }),
  ],
});
