import Alpine from "alpinejs";

Alpine.bind("W_Modal", (id) => ({
	["x-show"]() {
		return this.$store.modals.items[this.$el.id];
	},
	["x-bind:class"]() {
		return {
			U_Blurred__child: this.$store.modals.items[id],
		};
	},
	["x-transition:enter"]: "transition-all duration-500",
	["x-transition:enter-start"]: "W_Modal--invisible",
	["x-transition:enter-end"]: "W_Modal--visible",
	["x-transition:leave"]: "transition-all duration-500 delay-500",
	["x-transition:leave-start"]: "W_Modal--visible",
	["x-transition:leave-end"]: "W_Modal--invisible",
	["x-on:transitionrun"]() {
		if (id) {
			if (!this.$store.modals.items[this.$el.id]) {
				this.$el.classList.remove("W_Modal--blurrable");
			}
		}
	},
	["x-on:transitionend"]() {
		if (id) {
			if (this.$store.modals.items[this.$el.id]) {
				this.$el.classList.add("W_Modal--blurrable");
			}
		}
	},
	["x-init"]() {
		if (id) {
			if (this.$store.modals.items[this.$el.id]) {
				this.$el.classList.add("W_Modal--blurrable");
			}
		}
	},
}));
