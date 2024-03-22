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
).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

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
	<section>
		<input
			placeholder="Search for article"
			:value="searchValue"
			@input="(event: any) => (searchValue = event.target.value)"
		/>
		<span v-if="loading"> Loading..... </span>
		<ul>
			<li
				v-for="post in filteredPosts"
				:key="post.data.title"
			>
				<a :href="getURL(post.slug)">
					<h2 class="title">{{ post.data.title }}</h2>
					<p class="description">{{ post.data.pubDate.toLocaleDateString('en-NG', options) }}</p>
					<p class="description">{{ post.data.description }}</p>
				</a>
			</li>
		</ul>
	</section>
</template>

<style scoped>
h2 {
	font-size: 1.4rem;
}
section {
	margin-block: 18px;
}
ul {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 4rem;
	list-style-type: none;
	margin: 0;
	padding: 0;
	margin-top: 24px;
}
ul li {
	width: calc(50% - 1rem);
}
ul li * {
	text-decoration: none;
	transition: 0.2s ease;
}

ul li:first-child img {
	width: 100%;
}

ul li img {
	margin-bottom: 0.5rem;
	border-radius: 12px;
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
	color: rgb(var(--gray));
	font-size: 14px;
}

ul li a:hover h4,
ul li a:hover .date {
	color: #4c49f0;
}
ul a:hover img {
	box-shadow: var(--box-shadow);
}

.description {
	font-size: 15px;
	color: #ffffff;
	opacity: 50;
}
@media (max-width: 720px) {
	ul {
		gap: 4em;
	}
	ul li {
		width: 100%;
		margin-top: 12px;
	}
	ul li:first-child {
		margin-bottom: 0;
	}
}

input {
	margin-bottom: 24px;
	padding-block: 4px;
	padding-inline: 8px;
	border-radius: 4px;
}
</style>
