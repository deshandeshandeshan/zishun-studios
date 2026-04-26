import { defineField, defineType } from "sanity";

export const vimeoBlockType = defineType({
  name: "vimeoBlock",
  title: "Vimeo Block",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "Vimeo URL",
      type: "url",
      validation: (rule) =>
        rule.required().uri({ scheme: ["https"] }),
    }),
  ],
  preview: {
    select: { url: "url" },
    prepare({ url }) {
      return { title: "Vimeo Block", subtitle: url };
    },
  },
});
