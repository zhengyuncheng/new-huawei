import Vue from 'vue'
import Router from 'vue-router'
//主页
import index from '../views/index'
import findoutmore from '../views/findoutmore'
import vipchannel from '../views/vipchannel'
import InteFurniture from '@/components/inteFurniture/InteFurniture'



//分类 智能家居 个人设置
import HwCategory from '@/views/HwCategory'
import Setting from '@/components/personal/Setting'
import Paydesk from '@/components/personal/Paydesk'
import SetPersonalMessage from '@/components/personal/SetPersonalMessage'
//分类点击左边列表，右边显示
import HwCategoryNewPage from '@/components/category/HwCategoryNewPage'
import HwCategorySpage from '@/components/category/HwCategorySpage'
import HwCategoryTpage from '@/components/category/HwCategoryTpage'


// 引入页面级组件
import Shopcart from "../views/Shopcart"
import digitalBenefit from "../views/digitalBenefit"
import addShopCar from "../views/addShopCar"
import OrderCenter from "../views/OrderCenter"
import recoverList from "../views/recoverList"
import Refund from "../views/Refund"
// 退款组件引入
import RefundRequest from "../components/Refund/RefundRequest.vue"
import RefundReturnSchedule from "../components/Refund/RefundReturnSchedule.vue"
import RefundDrawb from "../components/Refund/RefundDrawb.vue"
// 订单组件引入
import OrderCenterContent from "../components/emptyOrderCenter/OrderCenterContent.vue"

// zhengyuncheng
import newGift from '@/views/newGift'
import indent from '@/views/indent'
import shopDetails from '@/views/shopDetails'
import indentAll from '@/views/indentAll'

//我的页面
import myPage from '@/views/myPage'
 import changeOld from '@/views/changeOld'
 
//武红男
 
 import mailBox from '@/views/mailBox'
 import numberOfacount from '@/views/numberOfacount'
 import provIng from '@/views/provIng'
 import regiSter from '@/views/regiSter'
 import SiGnIn from '@/views/SiGnIn'
 import setPw from '@/views/setPw'
 import retPw from '@/views/retPw'
 	import Xloading from "../views/Xloading"
 
 
 import addAdress from '@/views/addAdress'
 import confirmAdress from '@/views/confirmAdress'
 import location from '@/views/location'
 
 
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: Xloading
    },
		 
		 {
		  path: '/index',
		  name: 'index',
		  component: index
		},
		{
		  path: '/findoutmore',
		  name: 'findoutmore',
		  component: findoutmore
		},
		{
		  path: '/vipchannel',
		  name: 'vipchannel',
		  component: vipchannel
		},
    {
      path: '/HwCategory',
      name: 'HwCategory',
      component: HwCategory,
      children:[
        {path:'/',component:HwCategoryNewPage},
        {path:'/HwCategoryNewPage',name:"HwCategoryNewPage",component:HwCategoryNewPage},
        {path:'/HwCategorySpage',name:"HwCategorySpage",component:HwCategorySpage},
        {path:'/HwCategoryTpage',name:"HwCategoryTpage",component:HwCategoryTpage}
      ]
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/SetPersonalMessage',
      name: 'SetPersonalMessage',
      component: SetPersonalMessage
    },{
      path: '/paydesk',
      name: 'paydesk',
      component: Paydesk
    },
    {
      path: '/InteFurniture',
      name: 'InteFurniture',
      component: InteFurniture
    },
    {
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path:'/digitalBenefit',
      name:'digitalBenefit',
      component:digitalBenefit
    },
    {
      path:'/addShopCar',
      name:'addShopCar',
      component:addShopCar
    },
    {
      path:'/OrderCenter',
      name:'OrderCenter',
      component:OrderCenter,
      children:[
        {
          path:'/OrderCenter',
          component:OrderCenterContent
        },
      ]
    },
    {
      path:'/recoverList',
      name:'recoverList',
      component:recoverList
    },
    {
      path:'/Refund',
      name:'Refund',
      component:Refund,
      children:[
        {
          path:'/Refund',
          component:RefundRequest
          },
          {
            path:'/RefundReturnSchedule',
            component:RefundReturnSchedule

          },
          {
             path:'/RefundDrawb',
            component:RefundDrawb
          }
      ]
    },
		{
		  path: '/newGift',
		  name: 'newGift',
		  component: newGift
		},
		 {
		  path: '/indent/:goods_id',
		  name: 'indent',
		  component: indent
		}, 
		{
		  path: '/shopDetails/:goods_id',
			// path:"/shopDetails",
		  name: 'shopDetails',
		  component: shopDetails,
		  meta:{
		  	requiresAuth:true
		  }
		},
		{
			path:"/indentAll",
			name:"indentAll",
			component:indentAll
		},
		 {
			 path: '/myPage',
			 name:"myPage",
			 component: myPage
			},
		{
			path: '/changeOld',
			name:"changeOld",
		  component: changeOld
		},
		{
		    path: '/retPw',
		    name: 'retPw',
		    component: retPw	
		  },
		  {
		    path: '/setPw',
		    name: 'setPw',
		    component: setPw	
		  },
			{
			  path: '/SiGnIn',
			  name: 'SiGnIn',
			  component: SiGnIn	
			},
		  {
		    path: '/regiSter',
		    name: 'regiSter',
		    component: regiSter	
		  },
		  {
		    path: '/provIng',
		    name: 'provIng',
		    component: provIng	
		  },
		  {
		    path: '/numberOfacount',
		    name: 'numberOfacount',
		    component: numberOfacount	
		  },
		 {
		   path: '/mailBox',
		   name: 'mailBox',
		   component: mailBox	
		 },
		{
		  path: '/addAdress',
		  name: 'addAdress',
		  component: addAdress
		},
		{
		  path: '/confirmAdress',
		  name: 'confirmAdress',
		  component: confirmAdress
		},
		{
		  path: '/location',
		  name: 'location',
		  component: location
		}
  ]
});
router.beforeEach((to,from,next)=>{
	if(to.meta.requiresAuth){
		if(!sessionStorage.getItem("uphone")){
			let params = to.params;
			params.redirect = to.fullPath;
			next({
				name:"SiGnIn",
				params:params
			})
		}else{
			next();
		}
	}else{
		next();
	}
});
export default router;
