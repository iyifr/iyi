<script setup lang="ts">
import { getCollection } from 'astro:content'

const featuredBlogEntries = await getCollection('blog', ({ data }) => {
	return data.featured === true
})

const getURL = (string: string) => `/blog/${string}`
</script>

<template>
	<section class="h-auto my-[80px]">
		<h2 class="text-2xl font-bold mt-12 mb-0">Previous Yaps / Essays.</h2>
		<ul class="flex lg:flex-row flex-col gap-4 lg:h-56">
			<li
				v-for="post in featuredBlogEntries"
				:key="post.data.title"
				class="bg-[#222222] border-2 border-[#3A3A3A] p-4 mt-4 rounded-xl lg:w-1/2 w-full h-fit"
			>
				<a
					:href="getURL(post.slug)"
					class="hover:no-underline hover:opacity-70"
				>
					<span class="text-white/80">
						<h2 class="text-2xl font-bold mt-1">{{ post.data.title }}</h2>
						<p class="text-sm mt-2.5">
							Published - {{ post.data.pubDate.toLocaleDateString('en-NG') }}
						</p>
						<p class="text-xs font-thin mt-4">{{ post.data.description }}</p>
					</span>
				</a>
			</li>
		</ul>
	</section>
</template>
