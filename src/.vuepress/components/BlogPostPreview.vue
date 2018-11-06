<script>
export default {
    name: 'BlogPostPreview',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
	<section>
        <time>{{ post.date }}</time>
        <h3>{{ post.title }}</h3>
        <a class="button" href="#">Read More ></a>
    </section>
</template>

<style scoped>
.button {
	border: 1px solid #32c8cf;
	border-radius: 4px;
	color: #32c8cf;
	font-size: 0.8rem;
	padding: 0.5rem 0.75rem;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0 0;
	transition: background-color 0.2s ease-in, color 0.2s ease-in;
}
</style>
