<!--
&lt;!&ndash;

<template>
  <scroll-pullup :probe-type="probeType">
&lt;!&ndash;
          li{分类列表$}*100
      &ndash;&gt;
    <ul class="scroll">

      <li>分类列表1</li>
      <li>分类列表2</li>
      <li>分类列表3</li>
      <li>分类列表4</li>
      <li>分类列表5</li>
      <li>分类列表6</li>
      <li>分类列表7</li>
      <li>分类列表8</li>
      <li>分类列表9</li>
      <li>分类列表10</li>
      <li>分类列表11</li>
      <li>分类列表12</li>
      <li>分类列表13</li>
      <li>分类列表14</li>
      <li>分类列表15</li>
      <li>分类列表16</li>
      <li>分类列表17</li>
      <li>分类列表18</li>
      <li>分类列表19</li>
      <li>分类列表20</li>
      <li>分类列表21</li>
      <li>分类列表22</li>
      <li>分类列表23</li>
      <li>分类列表24</li>
      <li>分类列表25</li>
      <li>分类列表26</li>
      <li>分类列表27</li>
      <li>分类列表28</li>
      <li>分类列表29</li>
      <li>分类列表30</li>
      <li>分类列表31</li>
      <li>分类列表32</li>
      <li>分类列表33</li>
      <li>分类列表34</li>
      <li>分类列表35</li>
      <li>分类列表36</li>
      <li>分类列表37</li>
      <li>分类列表38</li>
      <li>分类列表39</li>
      <li>分类列表40</li>
      <li>分类列表41</li>
      <li>分类列表42</li>
      <li>分类列表43</li>
      <li>分类列表44</li>
      <li>分类列表45</li>
      <li>分类列表46</li>
      <li>分类列表47</li>
      <li>分类列表48</li>
      <li>分类列表49</li>
      <li>分类列表50</li>
      <li>分类列表51</li>
      <li>分类列表52</li>
      <li>分类列表53</li>
      <li>分类列表54</li>
      <li>分类列表55</li>
      <li>分类列表56</li>
      <li>分类列表57</li>
      <li>分类列表58</li>
      <li>分类列表59</li>
      <li>分类列表60</li>
      <li>分类列表61</li>
      <li>分类列表62</li>
      <li>分类列表63</li>
      <li>分类列表64</li>
      <li>分类列表65</li>
      <li>分类列表66</li>
      <li>分类列表67</li>
      <li>分类列表68</li>
      <li>分类列表69</li>
      <li>分类列表70</li>
      <li>分类列表71</li>
      <li>分类列表72</li>
      <li>分类列表73</li>
      <li>分类列表74</li>
      <li>分类列表75</li>
      <li>分类列表76</li>
      <li>分类列表77</li>
      <li>分类列表78</li>
      <li>分类列表79</li>
      <li>分类列表80</li>
      <li>分类列表81</li>
      <li>分类列表82</li>
      <li>分类列表83</li>
      <li>分类列表84</li>
      <li>分类列表85</li>
      <li>分类列表86</li>
      <li>分类列表87</li>
      <li>分类列表88</li>
      <li>分类列表89</li>
      <li>分类列表90</li>
      <li>分类列表91</li>
      <li>分类列表92</li>
      <li>分类列表93</li>
      <li>分类列表94</li>
      <li>分类列表95</li>
      <li>分类列表96</li>
      <li>分类列表97</li>
      <li>分类列表98</li>
      <li>分类列表99</li>
      <li>分类列表100</li>
    </ul>

  </scroll-pullup>

</template>

<script>
  // import BScroll from 'better-scroll'
  import weekFasion from '../home/childcomp/weekFash'
  import Goods from '../../components/content/goods/goods'
  import {getHomeGoods} from "../../network/home";


  import scrollPullup from '../home/childcomp/scrollPullup'
  export default {
    name: "Category",
    data(){
      return {
        scroll: null,
        probeType: 3,
      }
    },
    components: {
      scrollPullup,
      weekFasion,
      Goods
    },

    // created还没有挂载el根实例到组件的el上因此无法选择到dom元素节点，
    // mounted挂载完el之后实现的函数此时可以利用选择器选择到dom节点元素
    // mounted() {
    //   console.log(document.querySelector('.content'));
    //   /*
    //   probeType:
    //   类型：Number
    //   默认值：0
    //   可选值：1、2、3
    //   作用：有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，
    //   会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType
    //   为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType
    //   为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实
    //   时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
    //   */
    //   this.scroll=new BScroll(document.querySelector('.content'),{
    //     probeType: 3
    //   })
    //   this.scroll.on('scroll',(position)=>{
    //
    //   })
    // },

  }
</script>

<style scoped>
.content{
  height: 100px;
  background-color: blue;
  overflow: hidden;
/*
  !*超出高度部分自动隐藏并且实现y向滚动*!
*/
  /*overflow-y: scroll;*!*/
}
</style>
&ndash;&gt;
<template>
  <div class="pullup">
    <div class="pullup-bswrapper">
      <div class="pullup-scroller">
        <div>
          <ul>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>{li4}</li>
          <li>{li5}</li>
          <li>{li6}</li>
          <li>{li7}</li>
          <li>{li8}</li>
          <li>{li9}</li>
          <li>{li10}</li>
          <li>{li11}</li>
          <li>{li12}</li>
          <li>{li13}</li>
          <li>{li14}</li>
          <li>{li15}</li>
          <li>{li16}</li>
          <li>{li17}</li>
          <li>{li18}</li>
          <li>{li19}</li>
          <li>{li20}</li>
          <li>{li21}</li>
          <li>{li22}</li>
          <li>{li23}</li>
          <li>{li24}</li>
          <li>{li25}</li>
          <li>{li26}</li>
          <li>{li27}</li>
          <li>{li28}</li>
          <li>{li29}</li>
          <li>{li30}</li>
          <li>{li31}</li>
          <li>{li32}</li>
          <li>{li33}</li>
          <li>{li34}</li>
          <li>{li35}</li>
          <li>{li36}</li>
          <li>{li37}</li>
          <li>{li38}</li>
          <li>{li39}</li>
          <li>{li40}</li>
          <li>{li41}</li>
          <li>{li42}</li>
          <li>{li43}</li>
          <li>{li44}</li>
          <li>{li45}</li>
          <li>{li46}</li>
          <li>{li47}</li>
          <li>{li48}</li>
          <li>{li49}</li>
          <li>{li50}</li>
          <li>{li51}</li>
          <li>{li52}</li>
          <li>{li53}</li>
          <li>{li54}</li>
          <li>{li55}</li>
          <li>{li56}</li>
          <li>{li57}</li>
          <li>{li58}</li>
          <li>{li59}</li>
          <li>{li60}</li>
          <li>{li61}</li>
          <li>{li62}</li>
          <li>{li63}</li>
          <li>{li64}</li>
          <li>{li65}</li>
          <li>{li66}</li>
          <li>{li67}</li>
          <li>{li68}</li>
          <li>{li69}</li>
          <li>{li70}</li>
          <li>{li71}</li>
          <li>{li72}</li>
          <li>{li73}</li>
          <li>{li74}</li>
          <li>{li75}</li>
          <li>{li76}</li>
          <li>{li77}</li>
          <li>{li78}</li>
          <li>{li79}</li>
          <li>{li80}</li>
          <li>{li81}</li>
          <li>{li82}</li>
          <li>{li83}</li>
          <li>{li84}</li>
          <li>{li85}</li>
          <li>{li86}</li>
          <li>{li87}</li>
          <li>{li88}</li>
          <li>{li89}</li>
          <li>{li90}</li>
          <li>{li91}</li>
          <li>{li92}</li>
          <li>{li93}</li>
          <li>{li94}</li>
          <li>{li95}</li>
          <li>{li96}</li>
          <li>{li97}</li>
          <li>{li98}</li>
          <li>{li99}</li>
          <li>{li100}</li>
        </ul>
        </div>
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
        // bascroll: null
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
      this.bScroll=null
    },
    mounted() {
      this.initBscroll()
    },
    methods: {
      initBscroll() {
        this.bScroll = new BScroll(document.querySelector('.pullup-bswrapper'), {
          scrollY: true,
          pullUpLoad: true,
        })
        this.bScroll.on('pullingUp',this.pullingUpHandler())
      },
      async pullingUpHandler(){
        console.log("向上滚动");
        console.log("向上滚动");
        console.log("向上滚动");
        console.log("向上滚动");
        // await this.requestData()
        this.bScroll.finishPullUp();
        this.bScroll.refresh();
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
    /*height: 455px;*/
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
    height: 250px;
    padding: 0 10px;
    border: 1px solid #ccc;
    /*overflow: hidden*/
  }




</style>
-->
