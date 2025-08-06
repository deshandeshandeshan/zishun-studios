import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
    *[_type == "home" && slug.current == "home"][0]{
        title,
        slug,
        content {
            _key,
            _type,
            ...,
        }
    }
`);
