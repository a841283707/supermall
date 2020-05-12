<template>
    <div class="goodItem" @click="toDetail">
        <div class="picture">
            <img :src="item.show.img" alt="" @load="onload">
        </div>
        <div class="goods-info">
            <p class="picName">
            {{item.title}}
            </p>
            <span class="price">
                {{item.price}}
            </span>
            <span class="collect">
                {{item.cfav}}
            </span>
        </div>


    </div>
</template>

<script>
    export default {
        name: "goodItem",
        props: {
            item: {

            }
        },
        methods: {
            onload(){
                this.$emit('onload')
            },
            toDetail(){
                //注入的router对象会存在于每个组件
                //不同的路由视图里从传递参数的两个方法是
                //1、由动态路由实现
/*
                this.$router.push('/detail/'+111)
*/
                //2、有query传递参数
                this.$router.push({
                    path: '/detail',
                    query:{
                        id: this.item.iid
                    }
                })
            }
        },

    }
</script>

<style scoped>
    .goodItem{
        position: relative;
        padding-bottom: 40px;
        width: 48%;
    }
    .goods-info{
        font-size: 12px;
        /*相对于父元素定位用的absolute*/
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .picName{
        /*内容溢出框会发生什么，*/
        overflow: hidden;
        /*文本内容内容溢出框会使用。。代替，*/
        text-overflow: ellipsis;
        /*文本内容不换行*/
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .goodItem img{
        width: 100%;
        border-radius: 5px
    }
    .price{
        color: var(--color-high-text);
        margin-right: 20px;
    }
        /*::before 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 content 属性来
        为一个元素添加修饰性的内容。::after用来创建一个伪元素，作为已选中元素的最后一个子元素。通
        常会配合content属性来为该元素添加装饰内容。默认地，这两个个伪元素是行内元素，不过可以使用
        属性 display 改变这一点。其实这个前后也只是个概念而已，灵活运用这两个“帮手”，可以简化很
        多实现，以及很多有趣的实现。
        特性
        不占用DOM节点，简化DOM节点数，自然js也无法操作。
        用在块级元素以及大部分的行级元素。但是比如img等替换元素元素，就得看怎么用了，比如图片资源
        加载失败也是能使用的。
        伪元素被点击的时候触发的是主元素的 click 事件。
        不利于调试，也不利于SEO。
        清除浮动

        <div class="clear-fix">
           <div> </div>
        </div>
        <style>
    clear-fix::after {
        clear: both;
        content: "";
        display: block;
        height: 0;
        overflow: hidden
    }*/
    .goodItem .collect::before{
        content: "";
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    }

</style>