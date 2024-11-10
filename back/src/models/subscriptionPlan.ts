import { DataTypes, Model } from "sequelize";
import connection from "../services/database/connection.js";

class SubscriptionPlanModel extends Model {
    public id!: number;

    public name!: string;
    public price!: number;
}

SubscriptionPlanModel.init(
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

        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        sequelize: connection,
        tableName: "subscription_plan",
        timestamps: false,
    }
);

export default SubscriptionPlanModel;
