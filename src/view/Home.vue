<template>
    <div>
        
        <Carousel></Carousel>
        <Articulo></Articulo>
    
    </div>
</template>
<script>

import Carousel from '@/components/Carousel.vue';  

import Articulo from '@/components/Articulo.vue';
    export default {
        name:'AppHome',
        components: {
            Carousel,
            Articulo,
        }
    }
</script>