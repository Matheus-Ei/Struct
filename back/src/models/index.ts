// Models
import ModuleModel from "./module.js";
import NotesPageDataModel from "./notesPageData.js";
import PageModel from "./page.js";
import PermissionLevelModel from "./permissionLevel.js";
import ProjectModel from "./project.js";
import RelationshipSharedProject from "./relationshipSharedProject.js";
import SettingsModel from "./settings";
import SubscriptionModel from "./subscription";
import SubscriptionPlanModel from "./subscriptionPlan";
import UserModel from "./user.js";

// Make all associations
PageModel.associate();
ProjectModel.associate();
RelationshipSharedProject.associate();
SubscriptionModel.associate();
SettingsModel.associate();

export {
    ModuleModel,
    NotesPageDataModel,
    PageModel,
    PermissionLevelModel,
    ProjectModel,
    RelationshipSharedProject,
    SettingsModel,
    SubscriptionModel,
    SubscriptionPlanModel,
    UserModel,
};
