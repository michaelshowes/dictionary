/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		prependData: `
			@use "./src/styles/mixins" as *;
			@use "./src/styles/global/colors.scss" as *;
			@use "./src/styles/global/settings.scss" as *;
		`
	}
};

module.exports = nextConfig;
