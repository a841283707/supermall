import {request} from './request'

export function getDetail(id) {
    return request({
        url: 'detail',
        params: {
            iid: id
        }
    })
}
//利用构造器构造商品信息对象利于
// 在页面直接
// export function Goods() {
//     constructor(){
//         this.detailInfo=res.result.detailInfo.desc;
//     }

// }