class Article {
  constructor(
    public id: string,
    public title: string,
    public path: string,
    public description?: string,
    public parentSection?: string,
    public parentSectionPath?: string
  ) {}

  static make(attributes: any) {
    return new Article(
      attributes?._id || '',
      attributes?.title || '',
      attributes?._path || '',
      attributes?.description || undefined,
      attributes?.parentSection || undefined,
      attributes?.parentSectionPath || undefined
    );
  }
}

export default Article;
