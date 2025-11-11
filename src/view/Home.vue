<template>
    <div>
        <Cabecera></Cabecera>
        <NavBar></NavBar>
        <Carousel></Carousel>
        <Articulo></Articulo>
        <Footer></Footer>
    </div>
</template>
<script>
import Cabecera from '@/components/Cabecera.vue';
import NavBar from '@/components/NavBar.vue';
import Carousel from '@/components/Carousel.vue';  
import Footer from '@/components/Footer.vue';
import Articulo from '@/components/Articulo.vue';
    export default {
        name:'AppHome',
        components: {
            Cabecera,
            NavBar,
            Carousel,
            Footer,
            Articulo,
        }
    }
</script>