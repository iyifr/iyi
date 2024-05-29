<script setup lang="ts">
import type { MarkdownHeading } from 'astro';

const props = defineProps<{ headers: MarkdownHeading[]; url: string }>()

function formatStr(string) {
	const cleanedString = string.replace(/[^\w\s-]/g, '')

	// Replace spaces with hyphens
	const formattedString = cleanedString.replace(/\s+/g, '-')

	return formattedString.toLowerCase()
}
</script>

<template>
	<span>
		<div v-for="item in props.headers">
			<a :href="url + '#' + formatStr(item.text)">
				<li>
					{{ item.text }}
				</li>
			</a>
		</div>
	</span>
</template>
