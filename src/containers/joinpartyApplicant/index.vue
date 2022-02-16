/*
 * @Author: zhanghongqiao 
 * @Date: 2022-02-16 13:27:46 
 * @Email: 991034150@qq.com 
 * @Description: 入党申请人
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-16 14:07:01
 */
  
 <template>
  <div class="commodity_manage">
    <div class="top_query">
        <div class="form_group">
          <el-input placeholder="按学生名称搜索"
                    maxlength="50"
                    clearable
                    suffix-icon="el-icon-search"
                    v-model="params.name"></el-input>
        </div>  
        <el-button @click="handleAdd" class="fr blue_btn "><i class="iconfont">&#xe725;</i>添加学生信息</el-button>
          <!-- <div class="form_group">
            <span class="lab_txt">状态筛选：</span>
              <el-checkbox-group v-model="params.state">
                <el-checkbox v-for="item in states" :label="item.code" 
                  :key="item.code">{{item.name}}</el-checkbox>  
              </el-checkbox-group>
          </div>  -->
      </div>
      <div class="main_container ">  
        <TableList
          :paging="paging"
          :sourceData="tableData"
          @delete="handleDelete"
          v-model="selected" />
        <Pagination :paging="paging" v-model="paging"></Pagination>
    </div>
 

    <TipsPopup :isShow="isShowDel" v-model="isShowDel" :text="`确认删除所选项`" @sure="requestDelete"></TipsPopup>
  </div>
</template>

<script>
import {fetch} from '@/utils/request' 
import TableList from "./tableList";
import "./index.scss";
import { messagePopup } from '@/utils/util' 
import { Pagination, TipsPopup } from "@/components/common";
 
 
export default {
  data() {
    return {   
      name: '',
      params: {
        name: '',
        state: [],
      },
      states: [
        {
          code: 1,
          name: "上架"
        },{
          code: 2,
          name: "下架"
        },
      ],
      // 分页参数
      paging: {
        pageSize: 10,
        total: 0,
        currentPage: 1
      },
      tableData: [{}],
      isShowDel: false,
      selected: {}
       
    };
  }, 
  components: {
    TableList,
    Pagination,
    TipsPopup, 
  },
  mounted() {   
    this.requestList()
  },
  methods: {
    requestList(stype) {
       if(stype != 1) {
         this.paging.currentPage = 1
       }
       let params = {
          name: this.name,
          state: this.params.state.join(','),
          length: this.paging.pageSize,
          page: this.paging.currentPage, 
        }
      fetch('fetchProductPage', params, data => {
        this.tableData = data.list
        this.paging.total = data.total
      })
    },  
    // 删除
    requestDelete() {
      this.isShowDel = false;  
      fetch('fetchProductDown', {id: this.selected.id}, data => {
        if(data.successful) {
          this.responseTips(data, '删除')
        }
      })
    },
     // 响应提示
    responseTips(data, msg) { 
      if (!data) {
        return messagePopup(msg + "失败", "error");
      }
      if (data.successful) {
        messagePopup(data.error || msg + "成功", "success"); 
        this.requestList()
      } else {
        return messagePopup(data.error || msg + "失败", "error");
      }
    }, 
    handleAdd() {
      this.$router.push('/joinpartyApplicant/studentInfo')
    }, 
    // 删除
    handleDelete(item, state) {
      this.selected = item
      this.isShowDel = true 
    }
  },
  watch: { 
    // 分页参数监听
    'paging.pageSize': 'requestList',
    'paging.currentPage': function() {
      this.requestList(1)
    }, 
    'params.name':  'requestList',
    'params.state': 'requestList',  
     
  }
};
</script>
