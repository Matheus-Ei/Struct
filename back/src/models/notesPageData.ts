// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection";

// Models
import PageModel from "./page";

class NotesPageDataModel extends Model {
    public id!: number;

    public content!: string;

    public page_id!: number;
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

        page_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: PageModel,
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
