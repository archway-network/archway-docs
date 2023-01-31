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
