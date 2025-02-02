export interface PageType {
  id: number;
  title: string;
  description: string;
  emoji: string | undefined;
  module: string | null;
  child_pages: Array<PageType> | null;
}
