<script setup lang="ts">
const pStore = useUser()
</script>

<template>
	<div style="font-size: 40px; line-height: 60px">
		<div>Hi! I'm nuxt project!</div>
		<div>
			Here plugin state: {{ pStore.count }}
			<button @click="pStore.add">setPState</button>
		</div>
	</div>
</template>
