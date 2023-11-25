<template>
    <footer class="footer">
        Vue.js + SpringBoot + MySQL
        <a href="" target="_blank" rel="noopener" class="footer__link"></a>
    </footer>
    <button v-if="this.isLogIn" @click="logOut">
        <span>로그아웃</span>
    </button>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';
    export default {
        computed: {
            ...mapGetters(["isLogIn"])
        },
        methods: {
            ...mapMutations({
                logOut: "logOut"
            })
        }
        
    }
</script>

<style>

</style>