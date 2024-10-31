<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="工号"
        width="190">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.eid }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="190">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.ename }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.ename }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        width="90">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="学历"
        width="90">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.edu }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="入职日期"
        width="140">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.employed }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="出生日期"
        width="140">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.birthday }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="薪酬"
        width="90">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.salary }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>

<script>
  export default {
    data() {
      return {
        tableData: [{
            eid: '001',
            ename: '王明',
            sex: '男',
            edu: '本科',
            employed: '2016-09-12',
            birthday: '1990-07-01',
            salary: 10000,
        }, {
            eid: '002',
            ename: '李丽',
            sex: '女',
            edu: '硕士',
            employed: '2017-09-12',
            birthday: '1991-06-01',
            salary: 20000,
        }, {
            eid: '003',
            ename: '赵维',
            sex: '男',
            edu: '博士',
            employed: '2018-09-12',
            birthday: '1992-11-01',
            salary: 30000,
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style>
  /* mouted.$axios.get('http://localhost:8080/emp/findAll').then((result)=>{
    this.tableData = result.data;
  }).catch((err)=>{
    alert(err.message);
  } */
</style>