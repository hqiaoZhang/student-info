/*
 * @Author: zhanghongqiao 
 * @Date: 2018-11-13 17:37:53 
 * @Email: 991034150@qq.com 
 * @Description: 左边菜单
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-16 10:04:34
 */

 <template>
   <div class="side-menu" :class="{w56: defIsCollapse}">
    <el-menu  :default-active="defaultActive" :collapse="defIsCollapse" :open="defaultActive" 
      @open="handleOpen" @select="handleSelect">
      <template v-for="item in memuList">   
        <el-menu-item   v-if="isEmpty(item.childList)" 
          :key="item.id" :index="item.id">  
          <router-link :to="{path: `${item.menuUrl}`}">
              <i class="iconfont"  v-html="item.icon || '&#xe636;'"></i>
              <span>{{item.menuName}}</span>
          </router-link>  
           <!-- <a :key="item.id" :href="item.menuUrl" > 
              <i class="iconfont" v-html="item.icon || '&#xe686;'"></i>
              {{item.menuName}}
            </a>   -->
            
        </el-menu-item>  
        <!-- 有二级菜单 --> 
        <el-submenu v-if="!isEmpty(item.childList)" 
            popper-class="top-menu-popper"  
            :key="item.id" :index="item.id">  
          <template slot="title">  
             <i class="iconfont" v-html="item.icon || '&#xe686;'"></i>
            <span slot="title">{{item.menuName}}</span>
          </template> 
          <MenuItem :menus="item.childList" />
        </el-submenu>  
      </template>  
    </el-menu>
    <transition name="el-zoom-in-center">
      <span @click="handleOpenMenu" class="footer_btn open_btn" v-if="defIsCollapse"></span>
    </transition>
    <transition name="el-zoom-in-center">
      <span @click="handleColseMenu" class="footer_btn close_btn" v-if="!defIsCollapse">
        <i class="open_btn"></i> </span>
    </transition>
   </div>
 </template>

 <script>
 import './index.scss'
 import MenuItem from './menuItem.vue' 
 import { isEmpty } from 'lodash'
 export default {
   data() {
     return { 
       defIsCollapse: false,
       memuList: []
     }
   },
   props: {
     sourceData: Array,
     defaultActive: String,
     isCollapse: Boolean,
   },
   components: {
     MenuItem
   },
   mounted() { 
     this.defIsCollapse = this.isCollapse
     this.getMemuList(this.sourceData)
   },
   methods: {
     isEmpty: isEmpty,
     getMemuList(data) {
       if(_.isEmpty(data)) {
         return
       }
      //  //  1系统用户 2商家 3入驻订单未支付 
      // const loginType = sessionStorage.getItem('loginType')
      // if(loginType == 1) {
      //   return this.memuList = [data[0]]
      // }
      this.memuList = data

     },
     handleOpenMenu() {
       this.defIsCollapse = false 
       this.$store.commit('setOpenSideMenu', false)
     },
     handleColseMenu() {
       this.defIsCollapse = true
       this.$store.commit('setOpenSideMenu', true)
     },
      // 选种项  
      handleSelect(key) { 
        this.$store.commit('setSideMenuDefActive', key)
      },
      // 打开
      handleOpen(key, keyPath) {
        return
        this.$store.commit('setSideMenuDefActive', key)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    watch: {
      isCollapse: function() {
        this.defIsCollapse = this.isCollapse
      },
      sourceData: 'getMemuList'
    }
 }
 </script>
 
 
