<template>
    <el-table
      :data="sourceData"
      style="width: 100%">
      <el-table-column
        prop="name"
        show-overflow-tooltip
        label="姓名" >
        <template slot-scope="scope">
          <a @click="handleDetails(scope.row.id, 2)">{{scope.row.name || '张顾'}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="category"
        label="班级" />  
      <el-table-column
        prop="price"
        label="学号" /> 
      <el-table-column
          prop="stateDesc"
          label="状态" /> 
      <el-table-column label="操作" width="180" class-name="operation"> 
      <template slot-scope="scope">   
           <a  @click="handleDetails(scope.row.id)" ><span><i class="iconfont">&#xe6e2;</i>修改</span></a> 
           <a class="red_color" @click="handleDel(scope.row.id)"><span><i class="iconfont">&#xe627;</i>删除</span></a>
      </template>
    </el-table-column>

    </el-table>
  </template>


  <script>
    export default {
      data() {
        return {
          stateClass: {
            10: 'red_color',
            20: 'yellow_color',
            30: 'green_color'
          }
        }
      },
      props: {
        sourceData: Array
      },
      methods:{
        getClass(state) {
          return this.stateClass[state]
        }, 
        handleDel(id, state) {
          this.$emit('delete', id, state)
        },
        handleDetails(id, state) {  
          this.$router.push({
            path: '/joinpartyApplicant/studentInfo',
            query: {
              id: id, 
            }
          }) 
        }, 
      }
    }
  </script>