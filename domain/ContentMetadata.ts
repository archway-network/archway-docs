export default class ContentMetadata {
  constructor(
    public objectID: string,
    public title: string,
    public description: string,
    public parentSection: string,
    public modified: number,
    public group: string
  ) {}

  static make(content: any): ContentMetadata {
    return new ContentMetadata(
      content.objectID,
      content.title,
      content.description,
      content.parentSection,
      content.modified,
      content.group
    );
  }
}
