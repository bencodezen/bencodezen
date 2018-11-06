<script>
export default {
    name: 'BlogPostList',
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    computed: {
        filteredList() {
            if (this.$options.propsData) {
                return this.$options.propsData.list.filter(item => item.path.indexOf("/blog/") > -1)
            }
        }
    }
}
</script>

<template>
	<ul class="blog-list">
        <li v-for="item in filteredList"
            class="blog-list__item">
            <BlogPostPreview 
                :excerpt="item.excerpt" 
                :publishDate="item.frontmatter.date"
                :title="item.frontmatter.title"
            />
        </li>
    </ul>
</template>

<style scoped>
.blog-list {
	padding: 0;
	margin: 0;
}

.blog-list__item {
	list-style-type: none;
}
</style>
