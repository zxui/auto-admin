<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
        </el-breadcrumb>
        <p class="tip">
            ZX-UI【auto-admin】是基于<a href="http://element.eleme.io/#/zh-CN" target="_blank">Element</a>创建的一套后台管理系统，主要目的在于加快项目的开发，将公共的模块抽取，剔除多余的重复性工作。
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>
    p.tip, p.warning {
        padding: 12px 24px 12px 20px;
        margin: 2em 0;
        border-left: 4px solid;
        background-color: #f8f8f8;
        position: relative;
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
    }
    p.tip:before, p.warning:before {
        content: "!";
        position: absolute;
        top: 14px;
        left: -12px;
        color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        text-align: center;
        line-height: 20px;
        font-weight: 700;
        font-family: Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;
    }

    p.warning {
        border-left-color: #f66;
    }

    p.warning:before {
        background-color: #f66;
    }

    p.tip {
        border-left-color: #3c763d;
    }

    p.tip:before {
        background-color: #3c763d;
    }
</style>