import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const workInformationType = defineType({
  name: "workInformation",
  title: "Work Information",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title of Work",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "workDetails",
      title: "Work Details",
      type: "object",
      fields: [
        defineField({
          name: "role",
          title: "Role",
          description: "Role in the project",
          type: "string",
        }),
        defineField({
          name: "location",
          title: "Location",
          description: "Location of the project",
          type: "string",
        }),
        defineField({
          name: "year",
          title: "Year Created",
          type: "string",
        }),
      ],
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title,
        subtitle: "Work Information",
        media: media ?? BlockContentIcon,
      };
    },
  },
});
