// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
	pinia: {
		autoImports: [
			"defineStore" // import { defineStore } from 'pinia'
		]
	},
	piniaPersistedstate: {
		storage: "sessionStorage"
	}
})
