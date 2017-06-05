<template>
    <div id="app">
        <el-row>
            <!--hearder start-->
            <el-col :span="24">
                <div class="header-bg">
                    <a href="javascript:void(0)" @click="showSilder" :class="{zxHide:silderStats}"><i class="el-icon-menu zx-slider-meun-btn"></i></a>
                    <a href="javascript:void(0)" @click="showSilder" :class="{zxHide:!silderStats}"><i class="el-icon-close zx-slider-meun-btn"></i></a>
                    <a class="header-logo-link" href=""><img src="./assets/logo.png" class="header-logo"><span style="font-size: 20px; color: white;">ZX-UI</span></a>
                    <div class="header-operations">
                        <el-dropdown class="user-info" trigger="click">
                        <span class="el-dropdown-link">
                            管理员：zxui<i class="el-icon-caret-bottom el-icon--right"></i>
                         </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>修改个人信息</el-dropdown-item>
                                <el-dropdown-item divided>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </el-col>
            <!--hearder end-->
            <!--宽屏菜单 start-->
            <el-col :xs="7" :sm="6" :md="5" :lg="4" class="zx-left-meun">
                <div>
                    <el-menu default-active="2" unique-opened router>
                        <el-submenu :index="menu.code" v-for="menu in meuns">
                            <template slot="title"><i :class="menu.icon"></i>{{menu.name}}</template>
                            <el-menu-item v-for="child in menu.childrens" :index="child.code">{{child.name}}</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </el-col>
            <!--宽屏菜单 end-->
            <el-col :xs="17" :sm="18" :md="19" :lg="20" class="zx-right-content">
                <!--窄屏菜单 start-->
                <div class="zx-slider-meun">
                    <div :class="{slideinPanel:silderStats,slideoutPanel:!silderStats}">
                        <el-menu default-active="2" unique-opened router>
                            <el-submenu :index="menu.code" v-for="menu in meuns">
                                <template slot="title"><i :class="menu.icon"></i>{{menu.name}}</template>
                                <el-menu-item v-for="child in menu.childrens" :index="child.code">{{child.name}}</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </div>
                </div>
                <!--窄屏菜单 end-->
                <!--页面视图 start-->
                <div class="c-content-s" >
                    <router-view></router-view>
                </div>
                <!--页面视图 end-->
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                silderStats:false,
                meuns: [{
                    name: '基础组件',
                    code: 'base',
                    icon: 'el-icon-menu',
                    childrens: [
                        {name: 'Layout 布局', code: 'Layout'},
                        {name: 'Color 色彩', code: 'Color'},
                        {name: 'Typography 字体', code: 'Typography'},
                        {name: 'Icon 图标', code: 'Icon'},
                        {name: 'Button 按钮', code: 'Button'}]
                }, {
                    name: '表单',
                    code: 'form',
                    icon: 'el-icon-edit',
                    childrens: [
                        {name: 'Radio 单选框', code: 'Radio'},
                        {name: 'Checkbox 多选框', code: 'Checkbox'},
                        {name: 'Input 输入框', code: 'Input'},
                        {name: 'InputNumber 计数器', code: 'InputNumber'},
                        {name: 'Select 选择器', code: 'Select'},
                        {name: 'Cascader 级联选择器', code: 'Cascader'},
                        {name: 'Switch 开关', code: 'Switch'},
                        {name: 'Slider 滑块', code: 'Slider'},
                        {name: 'TimePicker 时间选择器', code: 'TimePicker'},
                        {name: 'DatePicker 日期选择器', code: 'DatePicker'},
                        {name: 'DateTimePicker 日期时间选择器', code: 'DateTimePicker'},
                        {name: 'Upload 上传', code: 'Upload'},
                        {name: 'Rate 评分', code: 'Rate'},
                        {name: 'ColorPicker 颜色选择器', code: 'ColorPicker'},
                        {name: 'Form 表单', code: 'Form'}]
                }, {
                    name: '数据展示',
                    code: 'dataGrid',
                    icon: 'el-icon-document',
                    childrens: [
                        {name: 'Table 表格', code: 'Table'},
                        {name: 'Tag 标签', code: 'Tag'},
                        {name: 'Progress 进度条', code: 'Progress'},
                        {name: 'Tree 树形控件', code: 'Tree'},
                        {name: 'Pagination 分页', code: 'Pagination'},
                        {name: 'Badge 标记', code: 'Badge'}]
                }, {
                    name: '消息提示',
                    code: 'Notice',
                    icon: 'el-icon-information',
                    childrens: [
                        {name: 'Alert 警告', code: 'Alert'},
                        {name: 'Loading 加载', code: 'Loading'},
                        {name: 'Message 消息提示', code: 'Message'},
                        {name: 'MessageBox 弹框', code: 'MessageBox'},
                        {name: 'Notification 通知', code: 'Notification'}]
                }]
            }
        },
        methods: {
            showSilder:function(){
                this.silderStats = !this.silderStats;
            }
    }
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
        box-shadow: 0px 2px 2px #cacaca;
    }

    .header-logo {
        height: 45px;
        margin-left: 10px;
    }

    .header-operations {
        float: right;
        margin-top: 15px;
        margin-right: 20px;
    }

    .header-operations .user-info{
        font-size: 16px;
    }

    .c-content-s {
        padding: 10px;
    }
    .zx-slider-meun-btn{
        display: none;
    }
    .zx-slider-meun{
        display: none;
    }
    .zxHide{
        display: none;
    }
    .slideinPanel {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
        transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
        position: fixed;
        z-index: 2;
        width: 55%;
        min-height: 800px;
        background-color: #eef1f6;
        box-shadow: 1px 0px 5px #cacaca;
    }
    .slideoutPanel {
        -webkit-transform: translate(-480px, 0);
        transform: translate(-480px, 0);
        transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
        position: fixed;
        z-index: 2;
        width: 55%;
        min-height: 800px;
        background-color: #eef1f6;
        box-shadow: 1px 0px 5px #cacaca;
    }
    .header-logo-link{
        text-decoration: none;
    }
    @media screen and (max-width: 800px ){
        .zx-left-meun{
            display: none;
        }
        .zx-right-content{
            width: 100%;
        }
        .zx-slider-meun{
            display: block;
        }
        .zx-slider-meun-btn{
            display: block;
            color: white;
            font-size: 24px;
            float: left;
            margin-top: 10px;
            margin-left: 10px;
        }
        .header-logo-link{
            margin-left: 35%;
            text-decoration: none;
        }
    }
</style>

