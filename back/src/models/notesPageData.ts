import { DataTypes, Model } from "sequelize";
import connection from "../services/database/connection";
import PageDataModel from "./pageData";

class NotesPageDataModel extends Model {
    public id!: number;

    public content!: string;

    public page_data_id!: number;
}

NotesPageDataModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        page_data_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: PageDataModel,
                key: "id",
            },
        },
    },
    {
        sequelize: connection,
        tableName: "notes_page_data",
        timestamps: false,
    }
);

export default NotesPageDataModel;
