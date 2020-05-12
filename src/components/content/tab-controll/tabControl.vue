<template>
    <div class="tab">
        <div class="tabC" v-for="(item,index) in titles"
             @click="deliverIndex(index)" :class="{active: currentIndex===index}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabControl",
        props: {
            titles: {
                type: Array,
                default(){
                    return[]
                }
            }
        },
        data(){
            return{
                currentIndex: 0,
            }
        },
        methods: {
            deliverIndex(index){
                this.currentIndex=index,
                this.$emit('tabIndex',index)
            }
        }
    }
</script>

<style scoped>
    .tab{
        display: flex;
        width: 100%;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .tabC{
        flex: 1;
        text-align: center;
    }
    .active span{
        color: var(--color-high-text);
        border-bottom: 3px solid var(--color-tint);
    }
</style>