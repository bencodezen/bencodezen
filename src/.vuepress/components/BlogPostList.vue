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
	<ul>
        <li v-for="item in filteredList">
            <BlogPostPreview 
                :excerpt="item.excerpt" 
                :publishDate="item.frontmatter.date"
                :title="item.frontmatter.title"
            />
        </li>
    </ul>
</template>

<style>
</style>
