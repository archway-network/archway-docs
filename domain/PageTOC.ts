class PageTOC {
  constructor(public id: string, public title: string) {}

  static make(attributes: any) {
    return new PageTOC(attributes?._id || '', attributes?.title || '');
  }
}

export default PageTOC;
