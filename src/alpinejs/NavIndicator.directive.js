export default function (el, { value, expression }) {
	if (!value) {
		el.classList.add("W_HasIndicator");
		const indicatorParentNode = document.createElement(expression ? expression : "div");
		const indicatorNode = document.createElement("mark");
		indicatorParentNode.classList.add("W_HasIndicator__marker");
		indicatorParentNode.appendChild(indicatorNode);
		el.appendChild(indicatorParentNode);
	} else {
		let DOMIndicatorParent = el
			.closest("[x-indicator]")
			.querySelector(":scope > .W_HasIndicator__marker");
		let DOMIndicatorMarker = DOMIndicatorParent.querySelector("mark");
		let currentTag = expression ? el.querySelector(expression) : el;

		if (Array.prototype.slice.call(el.parentNode.children).indexOf(el) === 0) {
			DOMIndicatorParent.style.transform = `translate(${el.offsetLeft}px, ${el.offsetTop}px)`;
			DOMIndicatorMarker.style.width = `${currentTag.offsetWidth}px`;
			DOMIndicatorMarker.style.height = `${currentTag.offsetHeight}px`;
		}

		currentTag.addEventListener("mouseenter", (event) => {
			DOMIndicatorParent.style.transform = `translate(${el.offsetLeft}px, ${el.offsetTop}px)`;
			DOMIndicatorParent.style.visibility = "visible";
			DOMIndicatorParent.style.opacity = "1.0";
			DOMIndicatorMarker.style.width = `${currentTag.offsetWidth}px`;
			DOMIndicatorMarker.style.height = `${currentTag.offsetHeight}px`;
		});
		currentTag.addEventListener("mouseleave", (event) => {
			DOMIndicatorParent.style.visibility = "";
			DOMIndicatorParent.style.opacity = "";
		});
	}
}
