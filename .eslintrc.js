module.exports = {
	"root": true,
	"env": {
		"node": true
	},
	"rules": {
		"no-console": ["warn", { "allow": ["warn", "error", "info"] }],
		"no-debugger": 1,
		"semi": [2, "always"],
		"vue/no-use-v-if-with-v-for": [2, { "allowUsingIterationVar": false }],
		"comma-dangle": "off",
		"one-var": [
			"warn",
			{
				"var": "always",
				"let": "always",
				"const": "never"
			}
		],
		"no-throw-literal": 0,
		"no-new-wrappers": 2,
		"no-useless-escape": 0,
		"no-redeclare": 2,
		"no-tabs": 0,
		"no-mixed-spaces-and-tabs": 1,
		"space-before-function-paren": [0, "always"],
		"no-unused-vars": 1,
		"vue-scoped-css/require-scoped": 2,
		"no-dupe-keys": 2,
		"no-func-assign": 2,
		"valid-typeof": 2,
		"no-shadow": 0,
		"no-prototype-builtins": 0,
		"no-undef": 0,
		"no-irregular-whitespace": 1,
		"vue/custom-event-name-casing": 1
	},
	"overrides": [
		{
			"files": ["*.vue"],
			"rules": {
				"indent": "off"
			}
		}
	],
	"parserOptions": {
		"parser": "babel-eslint"
	},
	"extends": ["plugin:vue/essential", "plugin:vue-scoped-css/base", "eslint:recommended", "plugin:jsdoc/recommended"]
};
