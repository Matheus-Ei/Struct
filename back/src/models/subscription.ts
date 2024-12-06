// Libraries
import { DataTypes, Model } from "sequelize";

// Local
import connection from "../services/database/connection";

// Models
import SubscriptionPlanModel from "./subscriptionPlan";
import UserModel from "./user.js";

class SubscriptionModel extends Model {
    public id!: number;

    public last_paid!: Date;
    public status?: string;

    public subscription_plan_id!: number;
    public user_id!: number;
}

SubscriptionModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        last_paid: {
            type: DataTypes.DATE,
        },

        status: {
            type: DataTypes.ENUM("Active", "Inactive", "Suspended", "Canceled"),
            defaultValue: "Active",
        },

        subscription_plan_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: SubscriptionPlanModel,
                key: "id",
            },
            onDelete: "CASCADE",
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: UserModel,
                key: "id",
            },
            onDelete: "CASCADE",
        },
    },
    {
        sequelize: connection,
        tableName: "subscription",
        timestamps: false,
    }
);

export default SubscriptionModel;
