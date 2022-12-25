export interface IPost {
  data: {
    id: string;
    thumbnail?: string;
    title: string;
    author: string;
    ups: number;
    num_comments: number;
    created: number;
  };
}
