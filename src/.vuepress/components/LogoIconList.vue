<script>
import LogoIconItem from './LogoIconItem'

export default {
    name: 'LogoIconList',
    components: { 
        LogoIconItem
    }
}
</script>

<template>
	<div class="logo-icon__container">
        <LogoIconItem 
            v-for="logo in this.$themeConfig.user.socialMedia" 
            :name="logo.name"
            :icon="logo.icon"
            :href="logo.href"
            :key="`logo-${logo.name}`"
        />
    </div>
</template>

<style lang="stylus" scoped>
@import '../theme/styles/config.styl';

.logo-icon__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 25px;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

@media (min-width: $MQMobile) {
    .logo-icon__container {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (min-width: $MQNarrow) {
    .logo-icon__container {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
</style>
