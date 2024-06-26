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
			placeholder="Search for article"
			:value="searchValue"
			@input="(event: any) => (searchValue = event.target.value)"
			class="text-black mt-8"
		/>
		<span v-if="loading"> Loading..... </span>
		<ul class="mt-4 flex flex-col sm:flex-row gap-x-8 gap-y-12 flex-wrap items-center">
			<li
				v-for="post in filteredPosts"
				:key="post.data.title"
				class="bg-[#222222] py-6 px-5 rounded-lg h-auto"
			>
				<a :href="getURL(post.slug)">
					<h2 class="mb-2">{{ post.data.title }}</h2>
					<p class="date">{{ post.data.pubDate.toLocaleDateString('en-NG', options) }}</p>
					<p class="mt-1 text-base text-white/80">{{ post.data.description }}</p>
				</a>
			</li>
		</ul>
	</section>
</template>

<style scoped>
h2 {
	font-size: 1.6rem;
}

ul li {
	width: calc(50% - 1rem);
}
ul li * {
	text-decoration: none;
	transition: 0.2s ease;
}

ul li a {
	display: block;
}
.title {
	margin: 0;
	line-height: 1;
}
.date {
	margin: 0;
	color: rgb(204, 199, 199);
	font-size: 14px;
	opacity: 40;
}

.description {
	font-size: 12px;
	color: #ffffff;
	opacity: 50;
}
@media (max-width: 720px) {
	ul {
		gap: 1em;
		margin-bottom: 12px;
	}
	ul li {
		width: 100%;
		margin-top: 2px;
	}
	ul li:first-child {
		margin-bottom: 0;
	}

	.description {
		font-size: 14px;
	}
}

input {
	margin-bottom: 24px;
	padding-block: 4px;
	padding-inline: 12px;
	border-radius: 4px;
}
</style>
