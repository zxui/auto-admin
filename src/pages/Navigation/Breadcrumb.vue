<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>Breadcrumb 面包屑</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>Breadcrumb 面包屑</h2>
            <p>适用广泛的基础用法。</p>
        </div>

        <div class="c-block">
            <h3>基础用法</h3>
            <span class="desc">基础的按钮用法。</span>
            <br/>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
