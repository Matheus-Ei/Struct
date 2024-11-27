// Models
import UserModel from "../../models/user.js";
import SubscriptionModel from "../../models/subscription.js";
import SettingsModel from "../../models/settings.js";
import ProjectModel from "../../models/project.js";
import PageModel from "../../models/page.js";
import ModuleModel from "../../models/module.js";
import RelationshipSharedProject from "../../models/relationshipSharedProject.js";
import PermissionLevelModel from "../../models/permissionLevel.js";

class Associations {
    private static user() {
        UserModel.hasOne(SubscriptionModel, {
            foreignKey: "user_id",
            as: "subscription",
        });

        UserModel.hasOne(SettingsModel, {
            foreignKey: "user_id",
            as: "settings",
        });

        UserModel.hasMany(ProjectModel, {
            foreignKey: "owner_user_id",
            as: "projects",
        });
    }

    private static project() {
        ProjectModel.belongsTo(UserModel, {
            foreignKey: "owner_user_id",
            as: "owner",
        });

        ProjectModel.hasMany(PageModel, {
            foreignKey: "project_id",
            as: "pages",
        });

        ProjectModel.belongsToMany(UserModel, {
            through: RelationshipSharedProject,
            foreignKey: "project_id",
            otherKey: "user_shared_id",
            as: "shared_users",
        });

        RelationshipSharedProject.belongsTo(PermissionLevelModel, {
            foreignKey: "permission_level_id",
            as: "permission_level",
        });
    }

    private static page() {
        PageModel.belongsTo(ProjectModel, {
            foreignKey: "project_id",
            as: "project",
        });

        PageModel.belongsTo(PageModel, {
            foreignKey: "parent_page_id",
            as: "parent",
        });

        PageModel.belongsTo(ModuleModel, {
            foreignKey: "module_id",
            as: "module",
        });
    }

    private static module() {
        ModuleModel.hasMany(PageModel, {
            foreignKey: "module_id",
            as: "pages",
        });
    }

    public static init() {
        this.user();
        this.project();
        this.page();
        this.module();
    }
}

export default Associations;
