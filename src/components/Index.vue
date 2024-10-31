<template>
    <div style="width: 1200px;margin: 10px auto;">
        <el-row>
            <el-col :span="24">
                <div style="width:100%;background-color: #1585e5;" class="grid-content bg-purple-dark">
                    云睿ERP进销存管理信息系统
                </div>
            </el-col>
        </el-row>
        <el-row>
            <!-- <iframe>

            </iframe> -->
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <Left></Left>
                </div>
            </el-col>
            <el-col :span="20">
                <div style="background-color: #f6f9fb;" class="grid-content bg-purple-light">
                    <EmpList></EmpList>
                </div>
            </el-col>
        </el-row>
    </div>
 </template>
 
 <script>
   import EmpList from './EmpList'
   import Left from './Left'
   export default{
     name:"Index",
     components:{
        EmpList,
        Left,
     }
   }
 </script>
 <style>
 .el-row {
     margin-bottom: 0px;
     &:last-child {
       margin-bottom: 0;
     }
   }
   .el-col {
     border-radius: 4px;
   }
   .bg-purple-dark {
     background: #0a508c;
     width:400px;
   }
   .bg-purple {
     /* background: #d3dce6; */
     border: 1px aqua solid;
   }
   .bg-purple-light {
     background: #0a508c;
   }
   .grid-content {
     border-radius: 4px;
     font-size: 20px;
 
     min-height: 36px;
     color: white;
   }
   .row-bg {
     padding: 10px 0;
     background-color: #f9fafc;
   }
 </style>
 