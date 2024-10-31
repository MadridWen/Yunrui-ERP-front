<template>
    <div>
        <el-row class="tac">       
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>员工管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><a style="color:black;text-decoration: none;" href="./#/addemp">员工添加</a></el-menu-item>
                            <!-- target="EmpList" -->
                            <el-menu-item index="1-2"><a style="color:black;text-decoration: none;" href="./#/emplist">员工查询</a></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

</style>