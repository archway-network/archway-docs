class PageTOC {
  constructor(public id: string, public title: string, public text: string, public children: PageTOC[]) {}

  static make(attributes: any) {
    return new PageTOC(
      attributes?._id || '',
      attributes?.title || '',
      attributes?.text,
      (attributes?.children || []).map((attrs: any) => PageTOC.make(attrs))
    );
  }
}

export default PageTOC;
