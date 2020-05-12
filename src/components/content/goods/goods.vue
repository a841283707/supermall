<template>
    <div class="goods">
        <!--v-for不能用作根元素必须在外面嵌套一个div-->
        <GoodItem class="itemPop" v-for="item in list" v-bind:item="item" @onload="refresh"></GoodItem>
    </div>
</template>

<script>
    import GoodItem from './goodItem'
    export default {
        name: "goods",
        props: {
            list: {
                type: Array,
                default(){
                    return[]
                }
            }
        },
        components: {
            GoodItem
        },
        methods: {
            refresh(){
                this.$emit('refresh')
            }
        }
    }
</script>

<style scoped>

    .goods{
        /*流式布局*/
        display: flex;
        /*自动换行*/
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;

    }
</style>