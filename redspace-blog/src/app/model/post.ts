export class PostModel {

  public id: number;
  public name: string;
  public slug: string;
  public content: string;
  public thumbImage: string;
  public excerpt: string;
  public date: Date;


  constructor() {
    this.name = '';
    this.id = 0;
    this.slug = '';
    this.content = '';
    this.thumbImage = '';
    this.excerpt = '';
    this.date = new Date();
  }

}