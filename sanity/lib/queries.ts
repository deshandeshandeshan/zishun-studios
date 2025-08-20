import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
  *[_type == "home"][0] {
    _id,
    _createdAt,
    content[] {
      _key,
      _type,
      ...,

      // ABOUT BLOCK
      _type == "aboutBlock" => {
        description,
        aboutBlockImage {
          caption,
          alt,
          asset->{ _id, url }
        }
      },

      // EVENT BLOCK
      _type == "eventBlock" => {
        title,
        locationTitle,
        eventImage {
          caption,
          alt,
          asset->{ _id, url }
        },
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
        selectedProjects[] {
          projectTitle,
          projectRoute,
          selectedProjectImage {
            caption,
            alt,
            asset->{ _id, url }
          }
        },
        categories[] {
          categoryName,
          workRoute,
          categoryImage {
            caption,
            alt,
            asset->{ _id, url }
          }
        }
      },

      // HEADER MEDIA BLOCK
      _type == "headerMedia" => {
        title,
        video {
          asset-> {
            playbackId,
            assetId,
            filename
          }
        },
        image {
          caption,
          alt,
          asset->{ _id, url }
        }
      },

      // PRESS BLOCK
      _type == "pressBlock" => {
        pressSections[] {
          typeOfPress,
          pressImage {
            caption,
            alt,
            asset->{ _id, url }
          },
          title,
          description,
          linkToPress
        }
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
        image {
          caption,
          alt,
          asset->{ _id, url }
          }
      },

      // IMAGE CAROUSEL BLOCK
      _type == "imageCarousel" => {
        title,
        carouselImages[]{
          "url": image.asset->url,
          "alt": image.alt,
          "caption": image.caption
        }
      },

      // WORK HEADER MEDIA BLOCK
      _type == "workHeaderMedia" => {
        video {
          asset-> {
            playbackId,
            assetId,
            filename
          }
        },
        image {
          caption,
          alt,
          asset->{ _id, url }
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
        video {
          asset-> {
            playbackId,
            assetId,
            filename
          }
        },
        image {
          caption,
          alt,
          asset->{ _id, url }
        }
      },

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
      }
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
      ...,

      // ABOUT BLOCK
      _type == "aboutBlock" => {
        description,
        aboutBlockImage {
          caption,
          alt,
          asset->{ _id, url }
        }
      },

      // EVENT BLOCK
      _type == "eventBlock" => {
        title,
        locationTitle,
        eventImage {
          caption,
          alt,
          asset->{ _id, url }
        },
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
        selectedProjects[] {
          projectTitle,
          projectRoute,
          selectedProjectImage {
            caption,
            alt,
            asset->{ _id, url }
          }
        },
        categories[] {
          categoryName,
          workRoute,
          categoryImage {
            caption,
            alt,
            asset->{ _id, url }
          }
        }
      },

      // HEADER MEDIA BLOCK
      _type == "headerMedia" => {
        title,
        video {
          asset-> {
            playbackId,
            assetId,
            filename
          }
        },
        image {
          caption,
          alt,
          asset->{ _id, url }
        }
      },

      // PRESS BLOCK
      _type == "pressBlock" => {
        pressSections[] {
          typeOfPress,
          pressImage {
            caption,
            alt,
            asset->{ _id, url }
          },
          title,
          description,
          linkToPress
        }
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
        image {
          caption,
          alt,
          asset->{ _id, url }
          }
      },

      // IMAGE CAROUSEL BLOCK
      _type == "imageCarousel" => {
        title,
        carouselImages[]{
          "url": image.asset->url,
          "alt": image.alt,
          "caption": image.caption
        }
      },

      // WORK HEADER MEDIA BLOCK
      _type == "workHeaderMedia" => {
        video {
          asset-> {
            playbackId,
            assetId,
            filename
          }
        },
        image {
          caption,
          alt,
          asset->{ _id, url }
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
        video {
          asset-> {
            playbackId,
            assetId,
            filename
          }
        },
        image {
          caption,
          alt,
          asset->{ _id, url }
        }
      },

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
    galleryImages[]{
    "url": image.asset->url,
    "alt": image.alt,
    "caption": image.caption
  }
  }
`);

export const ABOUT_QUERY = defineQuery(`
  *[_type == "about"] {
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

export const FOOTER_SETTINGS = defineQuery(`
  *[_type == "footerSettings"] {
    _id,
    _createdAt,
    description,
    aboutImage {
      alt,
      asset->{
        _id,
        url
      }
    },
    email,
    aboutSocialLinks[] {
      platform,
      url
    }
  }
`);
