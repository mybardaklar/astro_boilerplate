import Validator from "validatorjs";
import en from "validatorjs/src/lang/en";

Validator.setMessages("en", en);

export default (fields) => ({
	fields: {},
	rules: {},
	errors: {},
	validity: false,

	init() {
		Object.keys(fields).forEach((key) => {
			const value = fields[key];
			const rules = this.$el.querySelector(`input[name="${key}"]`).getAttribute("x-validity");

			this.fields[key] = value;
			this.rules[key] = rules;

			this.$watch(`fields.${key}`, () => {
				this.validate(key);
				console.log(this.errors);
			});
		});
	},

	validate(name) {
		const checkValidity = new Validator(this.fields, this.rules, {
			required: "required",
			min: {
				string: "Min length: :min",
			},
			max: {
				string: "Max length: :max",
			},
		});
		this.validity = checkValidity.passes();

		if (name === "*") {
			this.errors = checkValidity.errors.all();
		} else {
			this.errors[name] = checkValidity.errors.get(name);
		}
	},

	checkValidity(name) {
		if (this.errors[name]) {
			return this.errors[name].length > 0 ? true : false;
		}

		return false;
	},

	submit(event) {
		this.validate("*");

		if (!this.validity) {
			console.log(this.errors);
			return event.preventDefault();
		}

		return true;
	},
});
