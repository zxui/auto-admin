<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>NavMenu 导航菜单</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>NavMenu 导航菜单</h2>
            <p>网站提供导航功能的菜单。</p>
        </div>

        <div class="c-block">
            <h3>顶栏</h3>
            <span class="desc">适用广泛的基础用法。</span>
            <br/>
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
            <div class="line"></div>
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </div>

        <div class="c-block">
            <h3>侧栏</h3>
            <span class="desc">垂直菜单，可内嵌子菜单。</span>
            <br/>
            <el-row class="tac">
                <el-col :span="8">
                    <h5>带 icon</h5>
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="8">
                    <h5>不带 icon</h5>
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
                        <el-submenu index="1">
                            <template slot="title">导航一</template>
                            <el-menu-item-group title="分组一">
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">导航二</el-menu-item>
                        <el-menu-item index="3">导航三</el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="8">
                    <h5>分组</h5>
                    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
                            <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组二">
                            <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
                            <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
                        </el-menu-item-group>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
