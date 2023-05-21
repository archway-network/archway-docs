import { AutocompleteComponents, HTMLTemplate } from '@algolia/autocomplete-js';
import { BaseItem } from '@algolia/autocomplete-core';

export type AppConfigFeatures = {
  ARCHWAY_ECOSYSTEM: boolean;
  ARCHWAY_CONNECT: boolean;
};

export type AppConfigExternalLinks = {
  ARCHWAY_TECHNICAL_OVERVIEW: string;
  ARCHWAY_TECHNICAL_PAPERS: string;
  ARCHWAY_ECOSYSTEM: string;
  ARCHWAY_COMMUNITY_HUB: string;
  ARCHWAY_NEWSLETTER: string;
  ARCHWAY_BRAND: string;
  ARCHWAY_PRIVACY: string;
  ARCHWAY_TERMS: string;
  ARCHWAY_GRANTS: string;
  ARCHWAY_REWARDS: string;
  ARCHWAY_DOCS: string;
  ARCHWAY_CONNECT: string;
  ARCHWAY_STATUS: string;
  ARCHWAY_BLOG: string;
  ARCHWAY_GOT_DAPP_IDEA_FORM: string;
  ARCHWAY_PARTNERSHIPS_FORM: string;
  ARCHWAY_GOVERNANCE_FORUM: string;
  ARCH3JS_REPO: string;
  ARCHWAY_CLI_REPO: string;
  AREA_52: string;
  DISCORD: string;
  TELEGRAM: string;
  TWITTER: string;
  YOUTUBE: string;
  GITHUB: string;
  REDDIT: string;
};

export type AppConfig = {
  features: AppConfigFeatures;
  externalLinks: AppConfigExternalLinks;
};

export type MenuItem = {
  label: string;
  description?: string;
  url: string;
  icon?: DefineComponent;
};

export type Article = {
  id: string;
  parentSection?: string;
  parentSectionPath?: string;
  title?: string;
  description: any;
  path?: string;
};

export type ArticleInput = {
  objectID?: string;
  _id: string;
  title: string;
  description: string;
  _path: string;
};

export type AlgoliaArticleIndex = {
  objectID: string;
  title: string;
  description: string;
  parentSection: string;
  content: string;
  modified: number; // Unix seconds
  group: string; // should be set to root parent folder. e.g. community
  viewed?: number; // this field is here only to document complete indexing object
};

export type AlgoliaAutocompleteTemplateItem = { item: BaseItem; components: AutocompleteComponents; html: HTMLTemplate };

export type Tab = {
  id: number;
  title: string;
  description?: string;
};

export type HeaderItem = {
  id: number;
  title?: string;
};

export type TableRow = {
  title?: any;
};
