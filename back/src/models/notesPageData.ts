// Libraries
import { DataTypes, Model } from "sequelize";

// Models
import connection from "../services/database/connection";

// Database
import PageDataModel from "./pageData";

class NotesPageDataModel extends Model {
    public id!: number;
    public content!: string;
}

NotesPageDataModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: PageDataModel,
                key: "id",
            },
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        tableName: "notes_page_data",
        timestamps: false,
    }
);

export default NotesPageDataModel;
