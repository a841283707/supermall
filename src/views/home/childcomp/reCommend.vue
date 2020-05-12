<template>
    <div class="reCommend">
        <div v-for="item in recommend" class="item">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reCommend",
        props:{
            recommend:{
                type: Array,
                default(){
                    return[]
                }
            }

        }
    }
</script>

<style scoped>
.reCommend{
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 5px 0px 35px;
    border-bottom: 6px solid silver ;
}
    .item{
        flex: 1;
    }
    .item img{
        width: 70px;
        height: 70px;
        margin-bottom: 1px;

    }
</style>