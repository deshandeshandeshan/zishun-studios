import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
  *[_type == "home" && slug.current == "home"][0] {
    title,
    slug,

    content[] {
      _key,
      _type,
      ...,

      // ABOUT BLOCK
      _type == "aboutBlock" => {
        description,
        "imageUrl": aboutBlockImage.asset->url,
        aboutBlockImage {
          caption,
          alt
        }
      },

      // EVENT BLOCK
      _type == "eventBlock" => {
        title,
        locationTitle,
        description,
        timeAndDate {
          date,
          time
        },
        location,
        details,
        infoAndTickets
      },

      // FEATURED CONTENT
      _type == "featuredContent" => {
        selectedWorks[] {
          workTitle,
          workRoute,
          "imageUrl": selectedWorkImage.asset->url,
          selectedWorkImage {
            caption,
            alt
          }
        },
        categories[] {
          categoryName,
          workRoute,
          "imageUrl": categoryImage.asset->url,
          categoryImage {
            caption,
            alt
          }
        }
      },

      // HEADER MEDIA BLOCK
      _type == "headerMedia" => {
        title,
        video,
        "imageUrl": image.asset->url,
        image {
          caption,
          alt
        }
      },

      // PRESS BLOCK
      _type == "pressBlock" => {
        typeOfPress,
        title,
        description,
        linkToPress
      },

      // CREDITS AND AWARDS BLOCK
      _type == "creditsAndAwards" => {
        credits[] {
          roleInWork,
          name
        },
        awards[] {
          awardName,
          awardedFrom
        },
        "imageUrl": image.asset->url,
        image {
          caption,
          alt
        }
      },

      // IMAGE CAROUSEL BLOCK
      _type == "imageCarousel" => {
        title,
        carouselImages[] {
          carouselImage {
            "imageUrl": Image.asset->url,
            Image {
              caption,
              alt
            }
          }
        }
      },

      // WORK HEADER MEDIA BLOCK
      _type == "workHeaderMedia" => {
        video,
        "imageUrl": image.asset->url,
        image {
          caption,
          alt
        }
      },

      // WORK INFORMATION BLOCK
      _type == "workInformation" => {
        title,
        description,
        workDetails {
          role,
          location,
          year
        }
      },

      // WORK LANDSCAPE MEDIA BLOCK
      _type == "workLandscapeMedia" => {
        title,
        description,
        video,
        "imageUrl": image.asset->url,
        image {
          caption,
          alt
        }
      }

      // Add additional block projections here as needed
    }
  }
`);

export const SELECTED_WORKS_QUERY = defineQuery(`
  *[_type == "selectedWork"] {
    _id,
    _createdAt,
    title,
    role,
    "slug": slug.current,
    selectedWorkImage {
      alt,
      asset->{
        _id,
        url
      }
    }
  }
`);

export const SINGLE_SELECTED_WORK_QUERY = defineQuery(`
  *[_type == "selectedWork" && slug.current == $slug][0] {
    _id,
    _createdAt,
    content[] {
      _key,
      _type,

      _type == "doubleLandscape" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } }
      },

      _type == "doublePortrait" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } }
      },

      _type == "largeImageLeft" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } }
      },

      _type == "largeImageRight" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } }
      },

      _type == "longImageRight" => {
        title,
        leftImage { alt, caption, asset->{ _id, url } },
        rightImage { alt, caption, asset->{ _id, url } }
      },

      _type == "singleLandscape" => {
        title,
        image { alt, caption, asset->{ _id, url } }
      },

      _type == "singlePortrait" => {
        title,
        image { alt, caption, asset->{ _id, url } }
      },

      _type == "workInformation" => {
        title,
        description,
        workDetails {
            role,
            location,
            year
        }
      }

      _type == "creditsAndAwards" => {
        credits[] {
          roleInWork,
          name
        },
        awards[] {
          awardName,
          awardedFrom
        },
        "imageUrl": image.asset->url,
        image {
          caption,
          alt
        }
      }
      _type == "imageCarousel" => {
        title,
        carouselImages[] {
          carouselImage {
            "imageUrl": Image.asset->url,
            Image {
              caption,
              alt
            }
          }
        }
      }
      _type == "workHeaderMedia" => {
        "imageUrl": Image.asset->url,
            image {
              caption,
              alt
            }
        video
      }
      _type == "workLandscapeMedia" => {
        title,
        description,
        video,
        "imageUrl": Image.asset->url,
            image {
              caption,
              alt
            }
      }
    }
  }
`);

export const PAINTINGS_QUERY = defineQuery(`
  *[_type == "painting"] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    paintingImage {
      alt,
      asset->{
        _id,
        url
      }
    }
  }
`);

export const SINGLE_PAINTING_QUERY = defineQuery(`
  *[_type == "painting" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    yearCreated,
    description,
    galleryImages[] {
        image {
            alt,
            caption,
            asset->{
            _id,
            url
            }
        }
    }
  }
`);

export const ABOUT_QUERY = defineQuery(`
  *[_type == "about"][0] {
    _id,
    _createdAt,
    description,
    aboutImage {
      alt,
      caption,
      asset->{
        _id,
        url
      }
    },
    aboutSocialLinks[] {
        aboutSocialLink {
            platform,
            url
        }
    }
  }
`);

export const FOOTER_SETTINGS = defineQuery(`
  *[_type == "footerSettings"][0]{
    email,
    socialLinks[] {
        platform,
        url
    }
    siteDesignAndDevelopment
  }
`);
