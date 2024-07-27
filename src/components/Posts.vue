<script setup lang="ts">
import { getCollection } from 'astro:content'
import { computed, reactive, ref } from 'vue'

const searchValue = ref('')
let loading = ref(true)

const posts = (
	await getCollection('blog').then((res) => {
		loading.value = false
		return res
	})
)
	.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
	.filter((data) => !data.data.draft)

const reactivePosts = ref(posts)

const filteredPosts = computed(() =>
	reactivePosts.value.filter(
		(post) =>
			post.data.title.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase()) ||
			post.data.description.includes(searchValue.value.toLocaleLowerCase())
	)
)

const getURL = (string: string) => `/blog/${string}`
const options: any = {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
}
</script>

<template>
	<section class="mb-5">
		<input
			placeholder="Find a blog post"
			:value="searchValue"
			@input="(event: any) => (searchValue = event.target.value)"
			class="text-black mt-8 px-3 h-10 rounded-lg"
		/>
		<span v-if="loading"> Loading..... </span>
		<ul class="mt-16 flex flex-col gap-y-20">
			<li
				v-for="post in filteredPosts"
				:key="post.data.title"
				class="h-auto hover:scale-105 duration-150 max-w-md lg:max-w-3xl"
			>
				<a :href="getURL(post.slug)">
					<h2 class="mb-1 text-3xl">{{ post.data.title }}</h2>
					<p class="date text-xs text-white/90 opacity-80">
						Published: {{ post.data.pubDate.toLocaleDateString('en-NG', options) }}
					</p>
					<p class="mt-4 text-base text-white/80">{{ post.data.description }}</p>
				</a>
			</li>
		</ul>
	</section>
</template>
