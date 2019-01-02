<script>
export default {
    name: 'BlogPostPreview',
    props: {
        publishDate: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        excerpt: {
            type: String,
            required: false
        }
    },
    computed: {
        formatPublishDate() {
            const dateFormat = new Date(this._props.publishDate)
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            } 
            
            return dateFormat.toLocaleDateString('en-US', options)
        }
    }
}
</script>

<template>
	<section>
        <time>{{ formatPublishDate }}</time>
        <h3 class="blog-post__title">{{ title }}</h3>
        <p v-if="excerpt" class="blog-post__excerpt">{{ excerpt }}</p>
        <a class="button blog-post__button " :href="path">Read More ></a>
    </section>
</template>

<style lang="stylus" scoped>
primary-color = #22AAFF

.blog-post__button {
	margin-bottom: 1.5rem;
	display: inline-block;
}

.blog-post__excerpt {
    margin-top: 0;
}

.blog-post__title {
	margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.button {
	border: 1px solid primary-color;
	border-radius: 4px;
	color: primary-color;
	font-size: 0.9rem;
	padding: 0.3rem 0.6rem;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0 0;
	transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button:hover {
    background-color: primary-color;
    color: #fff;
    text-decoration: none;
}

.tag-list {
    list-style: none;
    padding-left: 0;
    display: flex;
    margin-bottom: 25px;
}

.tag-list__item {
    margin-left: 10px;
}

.tag-list__item:first-child {
    margin-left: 0;
}

.tag-list__btn {
    padding: 5px;
    font-size: 0.9rem;
    background-color: #fff;
}
</style>
