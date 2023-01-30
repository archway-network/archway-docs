import { Tab } from '@/types';

class TabData {
  constructor(public tabInfo: Tab[]) {}

  static make(attributes: { tabInfo: Tab[] }) {
    return new TabData(attributes?.tabInfo || [{}]);
  }
}

export default TabData;
