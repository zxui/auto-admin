<template>
    <div id="app">
        <el-row>
            <el-col :span="24">
                <div class="header-bg">
                    <img src="./assets/logo.png"
                         alt="logo"
                         class="header-logo">
                    <ul class="header-operations">
                        <li></li>
                        <li class="header-download"></li>
                        <li></li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="4">
                <div>
                    <el-menu default-active="2" unique-opened router>
                        <el-submenu :index="menu.code" v-for="menu in meuns">
                            <template slot="title"><i :class="menu.icon"></i>{{menu.name}}</template>
                            <el-menu-item v-for="child in menu.childrens" :index="child.code">{{child.name}}</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="20">
                <div class="c-content-s">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                meuns: [{
                    name: '基础组件',
                    code: 'dataGrid',
                    icon: 'el-icon-message',
                    childrens: [
                        {name: 'Layout 布局', code: 'Layout'},
                        {name: 'Color 色彩', code: 'Color'},
                        {name: 'Typography 字体', code: 'Typography'},
                        {name: 'Icon 图标', code: 'Icon'},
                        {name: 'Button 按钮', code: 'Button'}]
                },{
                    name: '数据展示',
                    code: 'dataGrid',
                    icon: 'el-icon-message',
                    childrens: [
                        {name: 'Table 表格', code: 'Table'},
                        {name: 'Tag 标签', code: 'Tag'},
                        {name: 'Progress 进度条', code: 'Progress'},
                        {name: 'Tree 树形控件', code: 'Tree'},
                        {name: 'Pagination 分页', code: 'Pagination'},
                        {name: 'Badge 标记', code: 'Badge'}]
                },{
                    name: '数据展示',
                    code: 'dataGrid',
                    icon: 'el-icon-message',
                    childrens: [
                        {name: 'Table 表格', code: 'Table'},
                        {name: 'Tag 标签', code: 'Tag'},
                        {name: 'Progress 进度条', code: 'Progress'},
                        {name: 'Tree 树形控件', code: 'Tree'},
                        {name: 'Pagination 分页', code: 'Pagination'},
                        {name: 'Badge 标记', code: 'Badge'}]
                },{
                    name: '数据展示',
                    code: 'dataGrid',
                    icon: 'el-icon-message',
                    childrens: [{name: 'Table 表格', code: 'Table'},
                        {name: 'Tag 标签', code: 'Tag'},
                        {name: 'Progress 进度条', code: 'Progress'},
                        {name: 'Tree 树形控件', code: 'Tree'},
                        {name: 'Pagination 分页', code: 'Pagination'},
                        {name: 'Badge 标记', code: 'Badge'}]
                }]
            }
        },
        methods: {}
    }
</script>

<style>
    body {
        margin: 0px;
        padding: 0px;
        font-family: Helvetica, sans-serif;
    }

    .header-bg {
        background-color: #00a6ea;
    }

    .header-logo {
        height: 65px;
    }

    .header-operations {
        float: right;
    }

    .header-operations li {
        float: left;
    }
    .c-content-s{
        padding: 20px;
    }
</style>

