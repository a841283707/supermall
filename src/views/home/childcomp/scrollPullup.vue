<!--
<template>
    <div class="pullup">
        <div class="pullup-bswrapper">
            <div class="pullup-scroller">
                 <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import Pullup from '@better-scroll/pull-up'

    BScroll.use(Pullup)

    export default {
        name: "scrollPullup",
        data() {
            return {
                isPullUpLoad: false,
                data: 30,
                scroll: null
            }
        },
        props: {
            probeType: {
                type: Number,
                default(){
                    return 3
                }
            }

        },
        created() {

        },
        mounted() {
            this.initBscroll()
        },
        methods: {
            initBscroll() {
                this.scroll = new BScroll(document.querySelector('.pullup-bswrapper'), {
                    scrollY: true,
                    pullUpLoad: true,
                })
                this.scroll.on('pullingUp',this.pullingUpHandler())
            },
            async pullingUpHandler(){
                console.log("向上滚动");
                // await this.requestData()
                this.scroll.finishPullUp();
                this.scroll.refresh();
                this.isPullUpLoad = false
            },
            // async requestData() {
            //     try {
            //         const newData = await this.ajaxGet(/* url */)
            //         this.data += newData
            //     } catch (err) {
            //         // handle err
            //         console.log(err)
            //     }
            // },
            // ajaxGet(/* url */) {
            //     return new Promise(resolve => {
            //         setTimeout(() => {
            //             resolve(20)
            //         }, 1000)
            //     })
            // }
        },

    }
</script>

<style scoped>
    .scrollPull{
        height: 455px;
        background-color: blue;
        overflow: hidden;
        /*
          !*超出高度部分自动隐藏并且实现y向滚动*!
        */
        /*overflow-y: scroll;*/
    }
    .pullup{
        height: 100%
    }
    .pullup-bswrapper{
        height: 100%;
        padding: 0 10px;
        border: 1px solid #ccc;
        overflow: hidden
    }




</style>-->
