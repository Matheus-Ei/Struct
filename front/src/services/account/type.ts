export interface AccountType {
  id: number;
  full_name: string;
  nickname: string;
  bio: string;
  email: string;
  password: string;
  picture: string | null;
  pictureData?: Buffer | null;
  is_verified: boolean;
}
