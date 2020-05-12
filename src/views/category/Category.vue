<template>
    <!--ref和class获取元素对象的区别时class很有可能出现重名
    ref用于绑定组件对象或者普通元素对象使用 this.refs.(ref)-->
    <div class="wrap" ref="wrapper ">
        <div class="content">
            <ul>
                <li>{1}</li>
                <li>{2}</li>
                <li>{3}</li>
                <li>{4}</li>
                <li>{5}</li>
                <li>{6}</li>
                <li>{7}</li>
                <li>{8}</li>
                <li>{9}</li>
                <li>{10}</li>
                <li>{11}</li>
                <li>{12}</li>
                <li>{13}</li>
                <li>{14}</li>
                <li>{15}</li>
                <li>{16}</li>
                <li>{17}</li>
                <li>{18}</li>
                <li>{19}</li>
                <li>{20}</li>
                <li>{21}</li>
                <li>{22}</li>
                <li>{23}</li>
                <li>{24}</li>
                <li>{25}</li>
                <li>{26}</li>
                <li>{27}</li>
                <li>{28}</li>
                <li>{29}</li>
                <li>{30}</li>
                <li>{20}</li>
                <li>{21}</li>
                <li>{22}</li>
                <li>{23}</li>
                <li>{24}</li>
                <li>{25}</li>
                <li>{26}</li>
                <li>{27}</li>
                <li>{28}</li>
                <li>{29}</li>
                <li>{30}</li>
                <li>{20}</li>
                <li>{21}</li>
                <li>{22}</li>
                <li>{23}</li>
                <li>{24}</li>
                <li>{25}</li>
                <li>{26}</li>
                <li>{27}</li>
                <li>{28}</li>
                <li>{29}</li>
                <li>{30}</li><li>{20}</li>
                <li>{21}</li>
                <li>{22}</li>
                <li>{23}</li>
                <li>{24}</li>
                <li>{25}</li>
                <li>{26}</li>
                <li>{27}</li>
                <li>{28}</li>
                <li>{29}</li>
                <li>{30}</li>

            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Category",
        data(){
            return{
                bscroll: null,
            }
        },
        mounted() {
            this.bscroll=new BScroll(document.querySelector('.wrap'),{
                    probeType: 3,
                    pullUpLoad: true
            });
            this.bscroll.on('scroll',(position)=>{
                // console.log(position);
            })
            this.bscroll.on('pullingUp',()=>{
                console.log('上拉加载更多');
            })
            this.bscroll.finishPullUp();
        }
    }
</script>
<!--scoped的作用是使style只作用于当前组件范围-->
<style scoped>
.wrap{
    background-color: #ff5777;
    height: 400px;
}
</style>