<script>
import LogoNotist from './LogoNotist'

export default {
    name: 'LogoGeneric',
    components: { LogoNotist },
    props: {
        href: {
            type: String,
            required: true
        },
        icon: {
            type: String
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
	<a 
        v-if="name !== 'Notist'" 
        class="logo-generic" 
        :href="href"
    >
        <i 
            v-if="icon" 
            :class="`fab fa-${icon} logo-generic__icon`"
        ></i>
        <p class="logo-generic__name">{{ name }}</p>
    </a>
    <a
        v-else
        class="logo-generic"
        :href="href"
    >
        <LogoNotist />
    </a>
</template>

<style lang="stylus" scoped>
@import '../theme/styles/config.styl';

.logo-generic {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ddd;
    width: 150px;
    height: 150px;
    color: #222;
    transition: color 0.2s ease-in;
}

.logo-generic:hover {
    color: $accentColor;
}

.logo-generic__icon {
    font-size: 4rem;
    margin-bottom: 5px;
}

.logo-generic__name {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1;
}

</style>
