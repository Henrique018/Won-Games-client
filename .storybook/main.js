module.exports = {
	"addons": ["@storybook/addon-essentials"],
  "stories": ["../src/components/**/stories.tsx"],
	webpackFinal: (config) => {
		config.resolve.modules.push(`${process.cwd()}/src`)
		return config
	}
}