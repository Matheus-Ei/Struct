// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection.js";

class FeedbackModel extends Model {
    public id!: number;
    public mail?: string;
    public commentary!: string;
    public rating!: number;
}

FeedbackModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        mail: {
            type: DataTypes.STRING(200),
        },
        commentary: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
    },
    {
        sequelize: connection,
        tableName: "feedback",
        timestamps: false,
    }
);

export default FeedbackModel;
