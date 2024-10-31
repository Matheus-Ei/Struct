import { DataTypes, Model } from "sequelize";
import connection from "../services/database/connection";
import ModuleModel from "./module";
import ProjectModel from "./project";
import PageDataModel from "./pageData";

class PageModel extends Model {
    public id!: number;

    public project_id!: number;
    public module_id!: number;
    public page_data_id!: number;

    public parent_page_id?: number;
}

PageModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProjectModel,
                key: "id",
            },
        },

        parent_page_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: PageModel,
                key: "id",
            },
        },

        page_data_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: PageDataModel,
                key: "id",
            },
        },

        module_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ModuleModel,
                key: "id",
            },
        },
    },
    {
        sequelize: connection,
        tableName: "page",
        timestamps: false,
    }
);

export default PageModel;
