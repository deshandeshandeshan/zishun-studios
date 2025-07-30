import { defineField, defineType } from "sanity";

export const imageCarouselType = defineType({
  name: "imageCarousel",
  title: "Image Carousel",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "text",
    }),
    defineField({
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [
        defineField({
          name: "carouselImage",
          title: "Carousel Image",
          type: "object",
          fields: [
            defineField({
              name: "Image",
              type: "image",
              title: "Image",
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
        }),
      ],
    }),
  ],
});
