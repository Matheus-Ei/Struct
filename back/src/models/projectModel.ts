import { DataTypes, Model } from "sequelize";
import sequelize from "../system/database";
import User from "./userModel"; // Importa o model User para fazer a associação

class Project extends Model {
    public id!: number;
    public product!: string;
    public userId!: number;
}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
    },
    {
        sequelize,
        tableName: "project",
    }
);

User.hasMany(Project, { foreignKey: "userId" });
Project.belongsTo(User, { foreignKey: "userId" });

export default Project;
