import { SchemaTypeDefinition } from "sanity";
import { pageType } from "./page";
import { pageBuilderType } from "./pageBuilder";
import { footerSettingsType } from "./footerSettings";
import { eventBlockType } from "./blocks/eventBlocks/eventBlock";
import { aboutBlockType } from "./blocks/homeBlocks/aboutBlock";
import { featuredContentType } from "./blocks/homeBlocks/featuredContent";
import { headerMediaType } from "./blocks/homeBlocks/headerMedia";
import { doubleLandscapeType } from "./blocks/photographyBlocks/doubleLandscape";
import { doublePortraitType } from "./blocks/photographyBlocks/doublePortrait";
import { largeImageLeftType } from "./blocks/photographyBlocks/largeImageLeft";
import { largeImageRightType } from "./blocks/photographyBlocks/largeImageRight";
import { longImageRightType } from "./blocks/photographyBlocks/longImageRight";
import { singleLandscapeType } from "./blocks/photographyBlocks/singleLandscape";
import { singlePortraitType } from "./blocks/photographyBlocks/singlePortrait";
import { pressBlockType } from "./blocks/pressBlocks/pressBlock";
import { creditsAndAwardsType } from "./blocks/workBlocks/creditsAndAwards";
import { imageCarouselType } from "./blocks/workBlocks/imageCarousel";
import { workHeaderMediaType } from "./blocks/workBlocks/workHeaderMedia";
import { workInformationType } from "./blocks/workBlocks/workInformation";
import { workLandscapeMediaType } from "./blocks/workBlocks/workLandscapeMedia";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    pageBuilderType,
    footerSettingsType,

    eventBlockType,
    aboutBlockType,
    featuredContentType,
    headerMediaType,
    doubleLandscapeType,
    doublePortraitType,
    largeImageLeftType,
    largeImageRightType,
    longImageRightType,
    singleLandscapeType,
    singlePortraitType,
    pressBlockType,
    creditsAndAwardsType,
    imageCarouselType,
    workHeaderMediaType,
    workInformationType,
    workLandscapeMediaType,
  ],
};
