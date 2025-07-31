import { defineField, defineType } from "sanity";

export const aboutBlockType = defineType({
  name: "aboutBlock",
  title: "About Block",
  type: "object",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "aboutBlockImage",
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
  ],
});
