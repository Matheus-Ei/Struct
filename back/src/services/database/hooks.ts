// Models
import PageModel from "../../models/page";

class Hooks {
    private static page() {
        PageModel.addHook("beforeCreate", (page: PageModel) => {
            if (!page.emoji) {
                page.emoji = "📄";
            }
        });
    }
    public static init() {
        this.page();
    }
}

export default Hooks;
