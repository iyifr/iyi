<script setup lang="ts">
import { getCollection } from 'astro:content'

const featuredBlogEntries = await getCollection('blog', ({ data }) => {
	return data.featured === true
})

const getURL = (string: string) => `/blog/${string}`
</script>

<template>
	<section>
		<ul class="flex lg:flex-row flex-col gap-4">
			<li
				v-for="post in featuredBlogEntries"
				:key="post.data.title"
				class="bg-[#222222] border-2 border-[#3A3A3A] p-4 mt-4 rounded-xl"
			>
				<a
					:href="getURL(post.slug)"
					class="hover:no-underline hover:opacity-70"
				>
					<span class="text-white/80">
						<h2 class="text-2xl font-bold mt-2">{{ post.data.title }}</h2>
						<p class="text-sm">Published - {{ post.data.pubDate.toLocaleDateString('en-NG') }}</p>
						<p class="text-sm">{{ post.data.description }}</p>
					</span>
				</a>
			</li>
		</ul>
	</section>
</template>
