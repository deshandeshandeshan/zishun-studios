import { defineField, defineType } from "sanity";

export const pressBlockType = defineType({
  name: "pressBlock",
  type: "object",
  fields: [
    defineField({
      name: "typeOfPress",
      title: "Type of Press",
      type: "string",
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
});
