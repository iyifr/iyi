<script setup lang="ts">
import { getCollection } from 'astro:content'
const projects = await getCollection('projects')
const getURL = (string: string) => `/projects/${string}`
</script>

<template>
	<section class="lg:mt-[144px] mb-[80px]" id = "projects">
		<h2 class="font-bold text-2xl">Projects</h2>
		<ul class="mb-12 flex flex-col gap-4">
			<li
				v-for="project in projects"
				class="bg-[#222222] border-2 border-[#3A3A3A] p-4 mt-4 rounded-xl"
			>
				<a
					class="text-inherit hover:no-underline cursor-pointer hover:opacity-85 hover:text-white/90"
					:href="getURL(project.slug)"
				>
					<p class="font-semibold text-xl mb-1">{{ project.data.title }}</p>
					<p class="mb-2 text-base">{{ project.data.description }}</p>

					<div class="flex flex-row gap-4 flex-wrap mt-4">
						<span
							v-for="item in project.data.stack"
							class="bg-[#173735] rounded-[12px] border border-[#1c5559] p-2 lg:text-sm text-xs h-fit w-fit"
						>
							{{ item }}
						</span>
					</div>
				</a>
			</li>
		</ul>
	</section>
</template>
