// Models
import SubscriptionModel from "../../models/subscription.js";
import SettingsModel from "../../models/settings.js";
import ProjectModel from "../../models/project.js";
import PageModel from "../../models/page.js";
import RelationshipSharedProject from "../../models/relationshipSharedProject.js";
import PermissionLevelModel from "../../models/permissionLevel.js";
import ModuleModel from "../../models/module.js";
import UserModel from "../../models/user.js";

// Page
PageModel.belongsTo(PageModel, {
    foreignKey: "parent_page_id",
    as: "parent",
});
PageModel.belongsTo(ModuleModel, {
    foreignKey: "module_id",
    as: "module",
});

ModuleModel.hasMany(PageModel, {
    foreignKey: "module_id",
    as: "pages",
});

// Project
ProjectModel.hasMany(PageModel, {
    foreignKey: "project_id",
    as: "pages",
});
PageModel.belongsTo(ProjectModel, {
    foreignKey: "project_id",
    as: "project",
});

ProjectModel.belongsToMany(UserModel, {
    through: RelationshipSharedProject,
    foreignKey: "project_id",
    otherKey: "user_shared_id",
    as: "shared_users",
});
UserModel.belongsToMany(ProjectModel, {
    through: RelationshipSharedProject,
    foreignKey: "user_shared_id",
    otherKey: "project_id",
    as: "shared_projects",
});

RelationshipSharedProject.belongsTo(PermissionLevelModel, {
    foreignKey: "permission_level_id",
    as: "permission_level",
});
PermissionLevelModel.hasMany(RelationshipSharedProject, {
    foreignKey: "permission_level_id",
    as: "relationship_shared_projects",
});

// User
UserModel.hasMany(ProjectModel, {
    foreignKey: "owner_user_id",
    as: "projects",
});
ProjectModel.belongsTo(UserModel, {
    foreignKey: "owner_user_id",
    as: "owner",
});

SettingsModel.belongsTo(UserModel, {
    foreignKey: "user_id",
    as: "settings",
});
UserModel.hasOne(SettingsModel, {
    foreignKey: "user_id",
    as: "settings",
});

SubscriptionModel.belongsTo(UserModel, {
    foreignKey: "user_id",
    as: "subscription",
});
UserModel.hasOne(SubscriptionModel, {
    foreignKey: "user_id",
    as: "subscription",
});
