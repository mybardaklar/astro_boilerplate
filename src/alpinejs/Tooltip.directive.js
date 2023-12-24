export default function (el, { value, modifiers, expression }, { evaluate }) {
	const triggerNode = el.parentNode;

	if (expression) {
		const props = evaluate(expression);

		triggerNode.addEventListener("mouseenter", (event) => {
			const randomID = Date.now();
			const innerHTML = el.innerHTML;
			const tooltipNode = document.createElement("div");
			tooltipNode.classList.add("W_Tooltip");
			tooltipNode.setAttribute("data-tooltip-id", `W_Tooltip-${randomID}`);
			tooltipNode.innerHTML = innerHTML;
			triggerNode.setAttribute("data-tooltip-id", `W_Tooltip-${randomID}`);
			triggerNode.closest(".U_HasTooltips").appendChild(tooltipNode);

			const triggerProperties = {
				width: triggerNode.getBoundingClientRect().width,
				height: triggerNode.getBoundingClientRect().height,
				top: triggerNode.getBoundingClientRect().top,
				left: triggerNode.getBoundingClientRect().left,
			};

			const tooltipProperties = {
				width: tooltipNode.getBoundingClientRect().width,
				height: tooltipNode.getBoundingClientRect().height,
				top: 0,
				left: 0,
			};

			if (props.arrow) {
				tooltipNode.classList.add("W_Tooltip--arrow");
			}

			if (props.position === "top") {
				tooltipProperties.top = triggerProperties.top - tooltipProperties.height;
				tooltipProperties.left = triggerProperties.left;
				tooltipNode.classList.add("W_Tooltip--top");

				if (props.axis === "center") {
					tooltipProperties.left =
						tooltipProperties.left +
						triggerProperties.width / 2 -
						tooltipProperties.width / 2;
					tooltipNode.classList.add("W_Tooltip--center");
				} else if (props.axis === "end") {
					tooltipProperties.left =
						tooltipProperties.left + triggerProperties.width - tooltipProperties.width;
					tooltipNode.classList.add("W_Tooltip--end");
				} else {
					tooltipNode.classList.add("W_Tooltip--start");
				}
			} else if (props.position === "right") {
				tooltipProperties.top = triggerProperties.top;
				tooltipProperties.left = triggerProperties.left + triggerProperties.width;
				tooltipNode.classList.add("W_Tooltip--right");

				if (props.axis === "center") {
					tooltipProperties.top =
						tooltipProperties.top +
						triggerProperties.height / 2 -
						tooltipProperties.height / 2;
					tooltipNode.classList.add("W_Tooltip--center");
				} else if (props.axis === "end") {
					tooltipProperties.top =
						tooltipProperties.top + triggerProperties.height - tooltipProperties.height;
					tooltipNode.classList.add("W_Tooltip--end");
				} else {
					tooltipNode.classList.add("W_Tooltip--start");
				}
			} else if (props.position === "bottom") {
				tooltipProperties.top = triggerProperties.top + triggerProperties.height;
				tooltipProperties.left = triggerProperties.left;
				tooltipNode.classList.add("W_Tooltip--bottom");

				if (props.axis === "center") {
					tooltipProperties.left =
						tooltipProperties.left +
						triggerProperties.width / 2 -
						tooltipProperties.width / 2;
					tooltipNode.classList.add("W_Tooltip--center");
				} else if (props.axis === "end") {
					tooltipProperties.left =
						tooltipProperties.left + triggerProperties.width - tooltipProperties.width;
					tooltipNode.classList.add("W_Tooltip--end");
				} else {
					tooltipNode.classList.add("W_Tooltip--start");
				}
			} else if (props.position === "left") {
				tooltipProperties.top = triggerProperties.top;
				tooltipProperties.left = triggerProperties.left - tooltipProperties.width;
				tooltipNode.classList.add("W_Tooltip--left");

				if (props.axis === "center") {
					tooltipProperties.top =
						tooltipProperties.top +
						triggerProperties.height / 2 -
						tooltipProperties.height / 2;
					tooltipNode.classList.add("W_Tooltip--center");
				} else if (props.axis === "end") {
					tooltipProperties.top =
						tooltipProperties.top + triggerProperties.height - tooltipProperties.height;
					tooltipNode.classList.add("W_Tooltip--end");
				} else {
					tooltipNode.classList.add("W_Tooltip--start");
				}
			} else {
				tooltipProperties.top = triggerProperties.top - tooltipProperties.height;
				tooltipProperties.left = triggerProperties.left;
				tooltipNode.classList.add("W_Tooltip--top");

				if (props.axis === "center") {
					tooltipProperties.left =
						tooltipProperties.left +
						triggerProperties.width / 2 -
						tooltipProperties.width / 2;
					tooltipNode.classList.add("W_Tooltip--center");
				} else if (props.axis === "end") {
					tooltipProperties.left =
						tooltipProperties.left + triggerProperties.width - tooltipProperties.width;
					tooltipNode.classList.add("W_Tooltip--end");
				} else {
					tooltipNode.classList.add("W_Tooltip--start");
				}
			}

			tooltipNode.style.top = `${tooltipProperties.top}px`;
			tooltipNode.style.left = `${tooltipProperties.left}px`;
			tooltipNode.classList.add("W_Tooltip--visible");
		});

		triggerNode.addEventListener("mouseleave", (event) => {
			const tooltipNode = document.querySelector(
				`.W_Tooltip[data-tooltip-id="${triggerNode.getAttribute("data-tooltip-id")}"]`,
			);

			triggerNode.removeAttribute("data-tooltip-id");
			tooltipNode.classList.remove("W_Tooltip--visible");

			tooltipNode.addEventListener(
				"transitionend",
				() => {
					triggerNode.closest(".U_HasTooltips").removeChild(tooltipNode);
				},
				{ once: true },
			);
		});
	}
}
