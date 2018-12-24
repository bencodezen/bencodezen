<script>
export default {
    name: 'BlogPostList',
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            displayRange: {
                start: 0,
                end: 4
            }
        }
    },
    computed: {
        filteredList() {
            const props = this.$options.propsData

            if (props) {
                return props.list.filter(item => item.path.indexOf("/blog/") > -1)
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
            }
        }
    },
    methods: {
        nextPage() {
            this.displayRange.start += 5
            this.displayRange.end += 5
        },
        previousPage() {
            this.displayRange.start -= 5
            this.displayRange.end -= 5   
        }
    }
}
</script>

<template>
	<div>
        <ul class="blog-list">
            <li v-for="(item, index) in filteredList"
                class="blog-list__item">
                <BlogPostPreview 
                    v-show="index >= displayRange.start && index <= displayRange.end"
                    :excerpt="item.frontmatter.excerpt" 
                    :path="item.path"
                    :publishDate="item.frontmatter.date"
                    :title="item.frontmatter.title"
                />
            </li>
        </ul>

        <button v-show="displayRange.start !== 0" 
            @click="previousPage"
            type="button" 
        >
            Previous
        </button>
        <button v-show="displayRange.end < filteredList.length"
            @click="nextPage"
            type="button"
        >
            Next
        </button>
    </div>
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
