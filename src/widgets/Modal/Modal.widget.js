import Alpine from "alpinejs";

Alpine.bind("U_Blur", (parents) => ({
	["x-bind:style"]() {
		console.log(parents);
		return {};
	},
}));

Alpine.bind("W_Modal", (parentId) => ({
	["x-show"]() {
		return this.$store.modals.items[this.$el.id].active;
	},
	["x-bind:class"]() {
		return {
			"W_Modal--posX:start": this.$store.modals.items[this.$el.id].posX === "start",
			"W_Modal--posX:center": this.$store.modals.items[this.$el.id].posX === "center",
			"W_Modal--posX:end": this.$store.modals.items[this.$el.id].posX === "end",
			"W_Modal--posY:start": this.$store.modals.items[this.$el.id].posY === "start",
			"W_Modal--posY:center": this.$store.modals.items[this.$el.id].posY === "center",
			"W_Modal--posY:end": this.$store.modals.items[this.$el.id].posY === "end",
			[`W_Modal--transition ${this.$store.modals.items[this.$el.id].transition}`]:
				this.$store.modals.items[this.$el.id].transition,
			"W_Modal--transition U_Blur--on": this.$store.modals.items[parentId].active,
		};
	},

	["x-transition:enter"]() {
		return this.$store.modals.items[this.$el.id].transition
			? "W_Modal--transition-enter"
			: false;
	},
	["x-transition:enter-start"]() {
		return this.$store.modals.items[this.$el.id].transition ? "W_Modal--invisible" : false;
	},
	["x-transition:enter-end"]() {
		return this.$store.modals.items[this.$el.id].transition ? "W_Modal--visible" : false;
	},
	["x-transition:leave"]() {
		return this.$store.modals.items[this.$el.id].transition
			? "W_Modal--transition-leave"
			: false;
	},
	["x-transition:leave-start"]() {
		return this.$store.modals.items[this.$el.id].transition ? "W_Modal--visible" : false;
	},
	["x-transition:leave-end"]() {
		return this.$store.modals.items[this.$el.id].transition ? "W_Modal--invisible" : false;
	},

	["x-on:transitionrun"]() {
		if (parentId) {
			if (!this.$store.modals.items[this.$el.id].active) {
				this.$el.classList.remove("U_Blur");
			}
		}
	},

	["x-on:transitionend"]() {
		if (parentId) {
			if (this.$store.modals.items[this.$el.id].active) {
				this.$el.classList.add("U_Blur");
			}
		}
	},

	["x-init"]() {
		if (parentId) {
			if (this.$store.modals.items[this.$el.id].active) {
				this.$el.classList.add("U_Blur");
			}
		}
	},

	["x-effect"]() {},
}));
