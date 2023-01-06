class NavigationItem {
  constructor(public id: string, public title: string, public path: string, public children: NavigationItem[]) {}

  static make(attributes: any) {
    return new NavigationItem(
      attributes?._id || '',
      attributes?.title || '',
      attributes?._path || '',
      (attributes?.children || []).map((attrs: any) => NavigationItem.make(attrs))
    );
  }
}

export default NavigationItem;
