export interface ProjectType {
    id: number;
    title: string;
    description: string;
}

export interface SharedUserType {
    project_id: number;
    user_id: number;
    user_name: string;
    user_nickname: string;
    user_mail: string;
    user_photo: string;
    permission_level_id: number;
    permission_level_name: string;
    permission_level_description: string;
}
