import Alpine from "alpinejs";
import DirectiveNavIndicator from "@alpinejs/NavIndicator.directive.js";
import DirectiveTooltip from "@alpinejs/Tooltip.directive.js";
import DataFormValidation from "@alpinejs/FormValidation.data.js";

Alpine.directive("indicator", DirectiveNavIndicator);
Alpine.directive("tooltip", DirectiveTooltip);

Alpine.data("W_Form", DataFormValidation);

Alpine.store("modals", {
	items: {
		["C_NavigationDrawer"]: {
			active: false,
			posX: "start",
			posY: "start",
		},
		["W_Modal-1"]: {
			active: true,
			posX: "end",
			posY: "center",
			transition: "W_Modal--transition:translate",
		},
		["W_Modal-2"]: {
			active: false,
			posX: "start",
			posY: "start",
			transition: "W_Modal--transition:scale",
		},
		["W_Modal-3"]: {
			active: false,
			posX: "start",
			posY: "start",
		},
		["W_Modal-4"]: {
			active: false,
			posX: "start",
			posY: "start",
		},
		["W_Modal-5"]: {
			active: false,
			posX: "start",
			posY: "start",
		},
	},
	activate(id) {
		this.items[id].active = true;
	},
	deactivate(id) {
		this.items[id].active = false;
	},
});

console.log("Created by: myB<myasarbardaklar47@gmail.com>");
