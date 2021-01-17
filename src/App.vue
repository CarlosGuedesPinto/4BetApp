<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    // import TopNav from './components/nav/top/topNav'
    // import SideNav from './components/nav/side/sideNav'

    // export default {
    //     name: 'App',
    //     components: {
    //         SideNav,
    //         TopNav
    //     }
    // }
</script>>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .page-container {
        width: calc(100% - 250px);
        float: right;
        height: auto;
        background-color: #FAFAFA;
        overflow-x: hidden;
        min-height: 100vh;
    }
</style>
