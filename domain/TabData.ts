import { Tab } from '@/types';

class TabData {
  constructor(public id: number, public title: string, public description: string) {}

  static make(attributes: Tab) {
    return new TabData(attributes.id, attributes.title, attributes.description);
  }
}

export default TabData;
