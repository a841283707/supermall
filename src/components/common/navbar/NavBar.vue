<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="centre">
            <slot name="centre"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    /*采用flex布局*/
    .nav-bar{
        display: flex;
        line-height: 44px;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
    }

    .left,.right{
        width: 60px;
    }
    .centre{
        flex: 1;
        text-align: center;
    }
</style>