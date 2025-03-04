export interface ProjectType {
  id: number;
  title: string;
  description: string;
  number_shared: number;
  number_pages: number;
}

export interface SharedAccountType {
  project_id: number;
  account_id: number;
  account_full_name: string;
  account_nickname: string;
  account_email: string;
  account_picture: string;
  role_id: number;
  role_name: string;
  role_description: string;
}
