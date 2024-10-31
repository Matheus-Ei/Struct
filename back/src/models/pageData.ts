import { DataTypes, Model } from "sequelize";
import connection from "../services/database/connection";

class PageDataModel extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public emoji?: string;
}

PageDataModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        emoji: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize: connection,
        tableName: "page_data",
        timestamps: false,
    }
);

export default PageDataModel;
