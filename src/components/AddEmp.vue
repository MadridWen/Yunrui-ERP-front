<template>
    <div style="width: 400px;">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="工号">
            <el-input v-model="form.eid"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="form.ename"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
            <el-radio label="男" value="1"></el-radio>
            <el-radio label="女" value="0"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="学历">
            <el-select style="width:320px;" v-model="form.edu" placeholder="请选择学历">
            <el-option label="博士" value="1"></el-option>
            <el-option label="硕士" value="2"></el-option>
            <el-option label="本科" value="3"></el-option>
            <el-option label="专科" value="4"></el-option>
            <el-option label="高中" value="5"></el-option>
            <el-option label="初中" value="6"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="入职日期">
            <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.employed" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="出生日期">
            <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="薪酬">
            <el-input v-model="form.salary"></el-input>
        </el-form-item>  
        <el-form-item>
            <el-button type="primary" @click="onSubmit">添加员工</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          eid: '',
          ename: '',
          sex: '',
          edu: '',
          employed: '',
          birthday:'',
          salary: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>

</style>