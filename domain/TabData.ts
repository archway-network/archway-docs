import { Tab } from '@/types';

class TabData {
  constructor(public tabInfo: Tab[]) {}

  static make(attributes: any) {
    return new TabData(attributes?.tabInfo || [{}]);
  }
}

export default TabData;
