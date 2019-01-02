<script>
export default {
    name: 'GuideItem',
    props: {
        description: {
            type: String,
            required: true
        },
        href: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        },
        imgAlt: {
            type: String
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
	<div class="guide-item">
        <img 
            class="guide-item__logo"
            :src="imgSrc" 
            :alt="imgAlt"
        />
        <div>
            <a class="guide-item__title" :href="href">{{ title }}</a>
            <p class="guide-item__description">{{ description }}</p>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.guide-item {
    display: flex;
    padding: 10px;
    align-items: center;
    border: 1px solid #ddd;    
    border-radius: 4px;
}

.guide-item__description {
    margin-top: 0;
}

.guide-item__logo {
    max-width: 150px;
    max-height: 150px;
    margin-right: 10px;
}

.guide-item__title {
    display: block;
    font-family: 'Poppins';
    font-size: 1.4rem;
    margin-bottom: 0.5rem;    
}
</style>
