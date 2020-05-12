<template>
    <div>
        <nav-bar>
            <div class="back" slot="left">
                <img  src="../../assets/img/common/back.svg" alt="">
            </div>
            <span class="centre" :class="{active: currentIndex===index}"
                  slot="centre" v-for="(item,index) in titles" v-on:click="active(index)">
                {{item}}
            </span>
            <div slot="right">
            </div>
        </nav-bar>
        <Swiper class="topImages">
            <SwiperItem v-for="item in topImages">
                <a href="">
                    <img  :src="item" alt="">
                </a>
            </SwiperItem>
        </Swiper>
        <p>{{title}}</p>
        <div>
            <span class="price">{{price}}</span>
            <span class="oldprice">{{oldPrice}}</span>
            <span class="discount">{{discountDesc}}</span>
        </div>



    </div>

</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import Swiper from "../../components/common/swiper/Swiper";
    import SwiperItem from "../../components/common/swiper/SwiperItem";
    import {getDetail} from '../../network/detail'
    export default {
        name: "Detail",
        components: {Swiper, NavBar,SwiperItem},
        props:{
            // titles: [],
        },
        data(){
            return {
                titles: ['商品','参数','评论','推荐'],
                currentIndex: 0,
                topImages:[],
                title:null,
                discountDesc:null,
                price:null,
                oldPrice:0,
                services:[],
                columns:[]


            }
        },
        methods: {
            //利用函数里面带参数的办法将组件里特有的参数传入data
            active(index){
                this.currentIndex=index
            },
            getDetailM(){
                getDetail(this.$route.query.id).then(res=>{
                    this.topImages=res.result.itemInfo.topImages;
                    this.title=res.result.itemInfo.title;
                    this.discountDesc=res.result.itemInfo.discountDesc;
                    this.price=res.result.itemInfo.price;
                    this.oldPrice=res.result.itemInfo.oldPrice;
                    this.services=res.result.shopInfo.services;
                    this.columns=res.result.columns
                    // this.

                    console.log(res);
                })
            },

        },
        created() {
            this.getDetailM();
        },
    }
</script>

<style scoped>
    .price{
        color: #ff5777;
        font-size:23px;
        margin-left: 12px;
    }
    .back img {
        margin-top: 12px;
    }
    .centre{
        /*//设置元素span间距的一种方法*/
        padding-left: 20px;
        font-size: 13px;
    }
    /*.centre span {*/
    /*    flex: 1;*/
    /*}*/
    .active{
        color: red;
    }
    .topImages{
        height: 300px;
        overflow: hidden;
    }
    p{
        padding: 12px 10px;
    }

</style>