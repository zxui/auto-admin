<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>Button 按钮</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>Button 按钮</h2>
            <p>常用的操作按钮。</p>
        </div>

        <div class="c-block">
            <h3>基础用法</h3>
            <span class="desc">基础的按钮用法。</span>
            <br/>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="text">文字按钮</el-button>
        </div>

        <div class="c-block">
            <h3>禁用状态</h3>
            <span class="desc">按钮不可用状态。</span>
            <br/>
            <el-button :plain="true" :disabled="true">主要按钮</el-button>
            <el-button type="primary" :disabled="true">主要按钮</el-button>
            <el-button type="text" :disabled="true">文字按钮</el-button>
        </div>

        <div class="c-block">
            <h3>有颜色倾向</h3>
            <span class="desc">不同的颜色倾向代表不同的提示。</span>
            <br/>
            <div class="block">
                <span class="demonstration">默认显示颜色</span>
                  <span class="wrapper">
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                  </span>
            </div>
            <div class="block">
                <span class="demonstration">hover 显示颜色</span>
                  <span class="wrapper">
                    <el-button :plain="true" type="success">成功按钮</el-button>
                    <el-button :plain="true" type="warning">警告按钮</el-button>
                    <el-button :plain="true" type="danger">危险按钮</el-button>
                    <el-button :plain="true" type="info">信息按钮</el-button>
                  </span>
            </div>
        </div>

        <div class="c-block">
            <h3>图标按钮</h3>
            <span class="desc">带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。</span>
            <br/>
            <el-button type="primary" icon="edit"></el-button>
            <el-button type="primary" icon="share"></el-button>
            <el-button type="primary" icon="delete"></el-button>
            <el-button type="primary" icon="search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>

        <div class="c-block">
            <h3>按钮组</h3>
            <span class="desc">以按钮组的方式出现，常用于多项类似操作。</span>
            <br/>
            <el-button-group>
                <el-button type="primary" icon="arrow-left">上一页</el-button>
                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
            <el-button-group>
                <el-button type="primary" icon="edit"></el-button>
                <el-button type="primary" icon="share"></el-button>
                <el-button type="primary" icon="delete"></el-button>
            </el-button-group>
        </div>

        <div class="c-block">
            <h3>加载中</h3>
            <span class="desc">点击按钮后进行数据加载操作，在按钮上显示加载状态。</span>
            <br/>
            <el-button type="primary" :loading="true">加载中</el-button>
        </div>

        <div class="c-block">
            <h3>不同尺寸</h3>
            <span class="desc">Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</span>
            <br/>
            <el-button type="primary" size="large">大型按钮</el-button>
            <el-button type="primary">正常按钮</el-button>
            <el-button type="primary" size="small">小型按钮</el-button>
            <el-button type="primary" size="mini">超小按钮</el-button>
        </div>

    </div>
</template>
