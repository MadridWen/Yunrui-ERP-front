import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import EmpList from '@/components/EmpList'
import AddEmp from '@/components/AddEmp'
import UpdateEmp from '@/components/UpdateEmp'
import Left from '@/components/Left'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/HelloWorld',   
            component: HelloWorld
        },
        {
            path: '/',   
            redirect: "/index"
        },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/emplist',
            component: EmpList
        },
        {
            path: '/addemp',
            component: AddEmp
        },
        {
            path: '/updateemp',
            component: UpdateEmp
        },
        {
            path: '/left',
            component: Left
        }

    ]
    })