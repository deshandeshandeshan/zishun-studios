import { SchemaTypeDefinition } from "sanity";
import { pageType } from "./page";
import { pageBuilderType } from "./pageBuilder";
import { footerSettingsType } from "./footerSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, pageBuilderType, footerSettingsType],
};
