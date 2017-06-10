<template>
   <div class="c-con">
       <el-breadcrumb separator="/">
           <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
           <el-breadcrumb-item>Layout 布局</el-breadcrumb-item>
       </el-breadcrumb>
       <div class="c-block">
           <h2>Layout 布局</h2>
           <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
       </div>

       <div class="c-block">
           <h3>基础布局</h3>
           <span  class="desc">使用单一分栏创建基础的栅格布局。</span>
           <el-row class="zx-el-row">
               <el-col class="zx-el-col" :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
           </el-row>
           <el-row class="zx-el-row">
               <el-col class="zx-el-col" :span="12"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="12"><div class="grid-content bg-purple-light"></div></el-col>
           </el-row>
           <el-row class="zx-el-row">
               <el-col class="zx-el-col" :span="8"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="8"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col class="zx-el-col" :span="8"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
           <el-row class="zx-el-row">
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple-light"></div></el-col>
           </el-row>
           <el-row class="zx-el-row">
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple-light"></div></el-col>
           </el-row>
       </div>

       <div class="c-block">
           <h3>分栏间隔</h3>
           <span class="desc">分栏之间存在间隔。</span>
           <el-row :gutter="20">
               <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
       </div>

       <div class="c-block">
           <h3>混合布局</h3>
           <span class="desc">通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</span>
           <el-row :gutter="20" class="zx-el-row">
               <el-col class="zx-el-col" :span="16"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="8"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
           <el-row :gutter="20" class="zx-el-row">
               <el-col class="zx-el-col" :span="8"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="8"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
           <el-row :gutter="20" class="zx-el-row">
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="16"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="4"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
       </div>

       <div class="c-block">
           <h3>分栏偏移</h3>
           <span class="desc">支持偏移指定的栏数。</span>
           <el-row :gutter="20" class="zx-el-row">
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
           <el-row :gutter="20" class="zx-el-row">
               <el-col class="zx-el-col" :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
           <el-row :gutter="20" class="zx-el-row">
               <el-col class="zx-el-col" :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
       </div>

       <div class="c-block">
           <h3>对齐方式</h3>
           <span class="desc">通过 flex 布局来对分栏进行灵活的对齐。</span>
           <el-row type="flex" class="row-bg zx-el-row">
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
           <el-row type="flex" class="row-bg zx-el-row" justify="center">
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
           <el-row type="flex" class="row-bg zx-el-row" justify="end">
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
           <el-row type="flex" class="row-bg zx-el-row" justify="space-between">
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
           <el-row type="flex" class="row-bg zx-el-row" justify="space-around">
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col class="zx-el-col" :span="6"><div class="grid-content bg-purple"></div></el-col>
           </el-row>
       </div>

       <div class="c-block">
           <h3>响应式布局</h3>
           <span class="desc">参照了 Bootstrap 的 响应式设计，预设了四个响应尺寸：xs、sm、md和lg。</span>
           <el-row :gutter="10">
               <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"></div></el-col>
               <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light"></div></el-col>
               <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></el-col>
               <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></el-col>
           </el-row>
       </div>
   </div>
</template>

<style>
    .zx-el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .zx-el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>