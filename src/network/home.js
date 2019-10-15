import {request} from "./request"

//getHomeMultidata获取首页多个数据
export function getHomeMultidata(){

  return request({
    url:"api/v1/home/multidata"
  })
}