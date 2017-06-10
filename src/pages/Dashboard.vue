<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block ml25pc">
            <span class="actor">{{msg}}</span>
        </div>
        <p class="tip">
            ZX-UI【auto-admin】是基于<a href="http://element.eleme.io/#/zh-CN" target="_blank">Element</a>创建的一套后台管理系统，主要目的在于加快项目的开发，将公共的模块抽取，剔除多余的重复性工作。
        </p>
    </div>
</template>

<script>
    var data = [
        {text: '只为守护世界和平', len: 2},
        {text: '只为你少加班', len: 2},
        {text: '只为这样的你: 产品设计师', len: 7},
        {text: '只为这样的你: 视觉设计师', len: 7},
        {text: '只为这样的你: 产品经理', len: 7},
        {text: '只为这样的你: 交互设计师', len: 7},
        {text: '只为这样的你: 前端工程师', len: 7}
    ]
    export default {
        data () {
            return {
                msg:''
            }
        },
        methods: {
            showText:function(v, i, s){
                let _this = this;
                if (v.length == 0) return false;
                setTimeout(function () {
                    const conted = setInterval(function () {
                        if (s > 0 && i == v[0].text.length) {
                            clearInterval(conted);
                            _this.showText(v, i, s * -1)
                        }
                        _this.msg = v[0].text.slice(0, i);
                        i += s;
                        if (s < 0 && i < v[0].len) {
                            clearInterval(conted);
                            const _data = v.slice(1);
                            if (_data.length > 0) {
                                _this.showText(_data, _data[0].len, s * -1);
                            } else {
                                _this.showText(data.slice(2), 0, 1);
                            }
                        }
                    }, 150);
                }, 1500);
            }
        },
        mounted () {
                this.showText(data, 0, 1);
        }
    }
</script>

<style>
    @keyframes blink {
        0% {
            opacity: 0
        }
        to {
            opacity: 1
        }
    }

    .actor {
        min-height: 65px;
        font-size: 30px;
    }

    .actor:after {
        content: "";
        width: 3px;
        height: 40px;
        vertical-align: -8px;
        margin-left: 5px;
        background-color: #000;
        display: inline-block;
        animation: blink .4s infinite alternate;
    }

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