import Alpine from "alpinejs";

Alpine.directive("navindicator", (el, { value, expression }) => {
	if (!value) {
		el.classList.add("W_HasIndicator");
		const indicatorParentNode = document.createElement(expression ? expression : "div");
		const indicatorNode = document.createElement("mark");
		indicatorParentNode.classList.add("W_HasIndicator__marker");
		indicatorParentNode.appendChild(indicatorNode);
		el.appendChild(indicatorParentNode);
	} else {
		let DOMIndicatorParent = el
			.closest("[x-navindicator]")
			.querySelector(":scope > .W_HasIndicator__marker");
		let DOMIndicatorMarker = DOMIndicatorParent.querySelector("mark");
		let currentTag = expression ? el.querySelector(expression) : el;

		if (Array.prototype.slice.call(el.parentNode.children).indexOf(el) === 0) {
			DOMIndicatorParent.style.transform = `translate(${el.offsetLeft}px, ${el.offsetTop}px)`;
			DOMIndicatorMarker.style.width = `${currentTag.offsetWidth}px`;
			DOMIndicatorMarker.style.height = `${currentTag.offsetHeight}px`;
		}

		el.addEventListener("mouseenter", (event) => {
			// event.stopPropagation();

			DOMIndicatorParent.style.transform = `translate(${el.offsetLeft}px, ${el.offsetTop}px)`;
			DOMIndicatorParent.style.visibility = "visible";
			DOMIndicatorParent.style.opacity = "1.0";
			DOMIndicatorMarker.style.width = `${currentTag.offsetWidth}px`;
			DOMIndicatorMarker.style.height = `${currentTag.offsetHeight}px`;
		});
		el.addEventListener("mouseleave", (event) => {
			// event.stopPropagation();

			DOMIndicatorParent.style.visibility = "";
			DOMIndicatorParent.style.opacity = "";
		});
	}
});

Alpine.store("modals", {
	items: {
		["C_NavigationDrawer"]: false,
		["W_Modal-ltr"]: false,
		["W_Modal-rtl"]: false,
		["W_Modal-ttb"]: false,
		["W_Modal-btt"]: false,
		["W_Modal-1"]: false,
	},
	activate(id) {
		this.items[id] = true;
	},
	deactivate(id) {
		this.items[id] = false;
	},
});

console.log("Created by: myB<myasarbardaklar47@gmail.com>");
