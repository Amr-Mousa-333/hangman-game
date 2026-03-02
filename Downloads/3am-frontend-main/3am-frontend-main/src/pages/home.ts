import { View } from "@lib/view";
import { HomeHeroSection } from "@sections/home/hero";

export class HomePage extends View<"section"> {
  constructor() {
    super("section", { className: "home-page" }); // يفضل إضافة كلاس للاستايل
  }

  render(): DocumentFragment {
    return this.tpl`
      ${new HomeHeroSection()}
    `;
  }
}