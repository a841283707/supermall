<template>
    <!--ref和class获取元素对象的区别时class很有可能出现重名
    ref用于绑定组件对象或者普通元素对象使用 this.refs.(ref)-->
    <div class="wrap" ref="wrapper">
        <div class="content">
                <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        data(){
            return{
                bscroll: null,
            }
        },
        props: {
          pullUpLoad: {
              type: Boolean,
              default(){
                  return false
              }
          }
        },
        mounted() {
            this.bscroll=new BScroll(this.$refs.wrapper,{
                //监听scroll配置的属性
                probeType: 3,
                //监听pullUpLoad的属性
                pullUpLoad: this.pullUpLoad,
                //监听原生的点击事件
                click: true
            });
            this.bscroll.on('scroll',(position)=>{
                this.$emit('scroll',position)
            })
            this.bscroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
            })
        },
        methods: {
            finishPullingUp(){
                this.bscroll.finishPullUp();
            },
            refresh(){
              this.bscroll.refresh();
            },
            scrollToXY(x,y,time){
                this.bscroll.scrollTo(x,y,time)
            },
            getScrolly(){
                return this.bscroll.y
            }
        }

    }
</script>
<!--scoped的作用是使style只作用于当前组件范围-->

<style scoped>

</style>