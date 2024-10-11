// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import sequelize from "../system/database";

class PageDataModel extends Model {
    public id!: number;
    public name!: string;
    public emoji!: string;
    public description!: string;
}

PageDataModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        emoji: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: "page_data",
        timestamps: false,
    }
);

export default PageDataModel;
