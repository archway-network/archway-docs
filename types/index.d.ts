import {
  AutocompleteComponents,
  HTMLTemplate,
} from '@algolia/autocomplete-js';
import { BaseItem } from '@algolia/autocomplete-core';

export type MenuItem = {
  label: string;
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
  objectID?: string,
  _id: string,
  title: string,
  description: string,
  _path: string,
};

export type AlgoliaArticleIndex = {
  objectID: string,
  title: string,
  description: string,
  parentSection: string,
  content: string,
  modified: number, // Unix seconds
  viewed?: number // this field is here only to document complete indexing object
};

export type AlgoliaAutocompleteTemplateItem = { item: BaseItem, components: AutocompleteComponents, html: HTMLTemplate };

export type Tab = {
  id: number;
  title: string;
  description: string;
};

export type HeaderItem = {
  id: number;
  title?: string;
};

export type TableRow = {
  title?: any;
};
