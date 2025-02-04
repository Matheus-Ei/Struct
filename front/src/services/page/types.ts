export interface PageType {
  id: number;
  title: string;
  description: string;
  emoji: string | undefined;
  project_id: string;
  parent_page_id: string;
  child_pages: Array<PageType> | null;
  module_title: string | null;
  module_information: Object | null;
}
