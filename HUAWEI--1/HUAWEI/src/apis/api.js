import Api from "../commons/Api"

const baseUrl = "http://10.35.167.190:8000"
const baseUrl1 = "http://localhost:3000"

//获取cartinfo的接口地址
const CARTURL = `${baseUrl}/api/carts/cart/?token=${sessionStorage.getItem("data")}`
const indentAllUrl = `${baseUrl}/api/indentAll`
const indentUrl = `${baseUrl}/api/indent`
const newGiftUrl = `${baseUrl}/api/newGift`
const categoryUrl = `${baseUrl1}/api/category`
const categoryUrl1 = `${baseUrl1}/api/category1`
const categoryUrl2 = `${baseUrl1}/api/category2`
const RECOMMEND = `${baseUrl1}/api/recommend`

//分类 线上接口
const indexUrl = "http://10.35.167.190:8000"

//获取服务器的接口地址
const newindexUrl = `${indexUrl}/api/goods/home`

const basicUrl="http://10.35.167.190:8000"
const CATEGORYNEW= `${basicUrl}/api/goods/type/?typeid=1`
const  CATEGORYURLGOODS=`${basicUrl}/api/goods/type/?typeid=241`
const  CATEGORYURLGOODS3=`${basicUrl}/api/goods/type/?typeid=3`






export default {

   /**
   * 根据用户获取购物车信息
   * @param cb
   */
	getIndentAllUrl(cb){
		Api.get(indentAllUrl,cb)
	},
	getIndentUrl(cb){
		Api.get(indentUrl,cb)
	},
	getNewGiftUrl(cb){
		Api.get(newGiftUrl,cb)
	},
	getCategoryUrl(cb){
		Api.get(categoryUrl,cb)
	},
	getCategoryUrl1(cb){
	  Api.get(categoryUrl1,cb)
	},
	getCategoryUrl2(cb){
	  Api.get(categoryUrl2,cb)
	},
	getIndexUrl(cb){
		Api.get(newindexUrl,cb)
	},
	//2019823分类
	getCategoryByCate(cb){
	  Api.get(CATEGORYURLGOODS,cb)
	},
	getCategoryByCates(cb){
	  Api.get(CATEGORYURLGOODS3,cb)
	},
	getCategoryNew(cb){
	 Api.get(CATEGORYNEW,cb)
	},
	getRecommend(cb){
	  Api.get(RECOMMEND,cb)
	},
	getCartInfo(cb){
		Api.get(CARTURL,cb)
	}
}
