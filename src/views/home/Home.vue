<template>
  <div id="Home">
      <NavBar class="HomeColor">
          <div slot="centre">
              购物街
          </div>
      </NavBar>
      <TabControll class="posi2" :titles="titiles" @tabIndex="tabIndex" />
      <scroll class="content" ref="content" @scroll="scroll" @pullingUp="pullingUp" v-bind:pull-up-load="true">
          <HomeSwiper v-bind:banner="banner" class="podding"/>
          <recommend v-bind:recommend="recomment"/>
          <week-fasion/>
          <TabControll class="posi" :titles="titiles" @tabIndex="tabIndex" />
          <Goods v-bind:list="showGoods" @refresh="onLoadRefresh" :key=""/>
      </scroll>
<!--      vue @click.native 原生点击事件：

      1，给vue组件绑定事件时候，必须加上native ，不然不会生效（监听根元素的原生事件，使用 .native 修饰符）

      2，等同于在自组件中：

      子组件内部处理click事件然后向外发送click事件：$emit("click".fn)-->
      <backUp class="backUp" ref="backUp" @click.native="scrollTop"></backUp>



  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar"
  import HomeSwiper from './childcomp/HomeSwiper'
  import Recommend from './childcomp/reCommend'
  import weekFasion from './childcomp/weekFash'
  import TabControll from '../../components/content/tab-controll/tabControl'
  import Goods from '../../components/content/goods/goods'
  import scrollPullup from './childcomp/scrollPullup'
  import Scroll from './childcomp/scroll'
  import {getMultiData} from '../../network/home';
  import {getHomeGoods} from "../../network/home";
  import backUp from '../../components/common/BackUp/backUp'
  import {request} from "../../network/request";

  export default {
    name: "Home",
    data(){
      return{
          result: [],
          banner: [],
          recomment: [],
          titiles: ['流行','新款','精选'],
          //下方显示商品列表的数据结构
          goods:{
              'pop': {page:1,list: []},
              'new': {page:1,list: []},
              'sell': {page:1,list: []}
          },
          //建立一个当前类型变量使得index和currentType相对应
          currentType: 'pop',
          probeType: 3,
          yDist: 0
      }
    },
    computed: {
      showGoods(){
          return this.goods[this.currentType].list;
      }
    },

    components: {
        Scroll,
        NavBar,
        HomeSwiper,
        Recommend,
        weekFasion,
        TabControll,
        Goods,
        scrollPullup,
        backUp

    },
    created() {
      this.getMultiData();
      this.getHomePopType();
      this.getHomeNewType();
      this.getHomeSellType();
    },
      mounted(){

      },
      /*actived()
      在动态组件初始化渲染的过程中调用
      deactived()
      在动态组件移除的过程中调用*/
      deactivated(){
          this.yDist=this.$refs.content.getScrolly();
      },
      activated(){
        this.$refs.content.scrollToXY(0,this.yDist,0)
      },
    methods: {
        getHomePopType(){
            getHomeGoods('pop',1).then((res)=>{
                this.goods.pop.list.push(...res.data.list);
                console.log(res);
            }).catch(()=>{
                console.log('error');
            })

        },
        getHomeNewType(){
          getHomeGoods('new',1).then(res=>{
              //把数组解构push进
              this.goods.new.list.push(...res.data.list);
              console.log(res);
          }).catch(()=>{
              console.log('error');
          })
        },
        getHomeSellType(){
            getHomeGoods('sell',1).then(res=>{
                this.goods.sell.list.push(...res.data.list);
            }).catch(()=>{
                console.log('error');
            })
        },
      getMultiData() {
              getMultiData().then((res)=>{
                  this.result=res;
                  this.banner=res.data.banner.list;
                  this.recomment=res.data.recommend.list;
              })
       },
       tabIndex(index){
           switch (index) {
               case 0:
                   this.currentType='pop'
                   break;
               case 1:
                   this.currentType='new'
                   break;
               case 2:
                   this.currentType='sell'
                   break;
               default:
                   this.currentType='pop'
           }
       },
       pullingUp(){
           this.goods[this.currentType].page=this.goods[this.currentType].page+1;
            getHomeGoods(this.currentType,this.goods[this.currentType].page).then(res=>{
                this.goods[this.currentType].list.push(...res.data.list);
            });
           console.log('上拉加载更多');
           this.$refs.content.finishPullingUp();
       },
        scroll(position){
            if (position.y<-560){
                document.querySelector('.posi2').style.cssText='position: fixed;\n' +
                    '        top: 40px;\n' +
                    '        left: 0px;\n' +
                    '        right: 0px;\n' +
                    '        z-index: 10;'

            }
            if (position.y<-4000){
                document.querySelector('.backUp').style.display='inline'
            }else {
                document.querySelector('.backUp').style.display='none'
            }
            // this.$refs.content.scroll
        },
        scrollTop(){
            // 调用子组件的方法，需要在子组件里定义好
            this.$refs.content.scrollToXY(0,-554,1000)
        },
        debounce(fuc,delay){
                /*每次执行都会得到下面这个函数并且判断
                timer存在否，如果存在就清楚，等全部加载完成以后
                就不会清除该函数于是最后得到了一个函数*/
                let timer=null
                return function (...args) {
                    if (timer) {
                        clearTimeout();
                    }
                    setTimeout(()=>{
                            fuc.apply(this,args)
                        },delay
                    )
                }
            },
        onLoadRefresh(){
            //1、为了使scrollheight发生改变而引起的不能拖拉bug
            // （由于图片加载完成scrollheight并没有立刻发生变化因此会出现不能拖拉）
            //要在图片加载完成之后立刻刷新scroll对象使得scrollheight发生改变
            //为此在gooditems里面对img监听load方法，并且将这个事件利用emit一直传给home
            //在home里就可以直接使用子组件的函数
            //2、利用vuex
            //3、利用事件总线
            //利用this.$bus.emit在一个组件发送某事件
            //利用this.$bus.on监听该事件，需要在main.js定义原型
            //this.protoType.$bus=new Vue().
            //解决refresh执行次数过多的问题
            /*debounce(fuc,delay){
                每次执行都会得到下面这个函数并且判断
                timer存在否，如果存在就清楚，等全部加载完成以后
                就不会清除该函数于是最后得到了一个函数
                let timer=null
                return function (args) {
                    if (timer) {
                        clearTimeout();
                    }
                    setTimeout(()=>{
                            func.apply(this,args)
                        },delay
                    )
                }
            }*/
            this.debounce(
                this.$refs.content.refresh()
            ,1000)
        }
    }
  }

</script>

<style scoped>
    #Home{
        height: 100vh;

        position: relative;
    }
  .HomeColor{
    background-color: var(--color-tint);
    color: white;
/*      //absolute,fixed,and float脱离标准流*/
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
  }
    .posi{

    }
    .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0px;
        right: 0px;
        overflow: hidden;
    }
    .backUp{
        position: fixed;
        display: none;
        bottom: 50px;
        right: 3px;
    }
</style>
