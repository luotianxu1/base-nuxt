export const useUser = defineStore(
	"user",
	() => {
		const count = ref(1)

		const add = () => {
			count.value += 1
		}

		const multiplyCount = computed(() => count.value * 2)

		return {
			count,
			add,
			multiplyCount
		}
	},
	{
		persist: true
	}
)
