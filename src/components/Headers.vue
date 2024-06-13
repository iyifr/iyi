<script setup lang="ts">
import type { MarkdownHeading } from 'astro'

const props = defineProps<{ headers: MarkdownHeading[]; url: string }>()

function formatStr(string) {
	const cleanedString = string.replace(/[^\w\s-]/g, '')

	// Replace spaces with hyphens
	const formattedString = cleanedString.replace(/\s+/g, '-')

	return formattedString.toLowerCase()
}
</script>

<template>
	<pre
		class="m-0 p-0"
		v-if="props.headers.length > 0"
	>
Sections</pre
	>
	<span>
		<div
			v-for="item in props.headers"
			v-if="props.headers.length > 0"
		>
			<a :href="url + '#' + formatStr(item.text)">
				<li>
					{{ item.text }}
				</li>
			</a>
		</div>
		<div v-else></div>
	</span>
</template>
