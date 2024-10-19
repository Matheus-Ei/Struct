// Libraries
import { DataTypes, Model } from "sequelize";

// Database
import connection from "../services/database/connection";

// Models
import PageDataModel from "./pageData";
import ProjectModel from "./project";
import ModuleModel from "./module";

class PageModel extends Model {
    public id!: number;
    public page_data!: number;
    public parent_page_id!: number | null;
    public project_id!: number;
    public module_id!: number;
}

PageModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        page_data: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: PageDataModel,
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
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProjectModel,
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
