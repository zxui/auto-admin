<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>Message 消息提示</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>Message 消息提示</h2>
            <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
        </div>
        <div class="c-block">
            <h3>基础用法</h3>
            <span class="desc">从顶部出现，3 秒后自动消失。</span>
            <br/>
            <el-button :plain="true" @click="open">打开消息提示</el-button>
        </div>
        <div class="c-block">
            <h3>不同状态</h3>
            <span class="desc">用来显示「成功、警告、消息、错误」类的操作反馈。</span>
            <br/>
            <el-button :plain="true" @click="open2">成功</el-button>
            <el-button :plain="true" @click="open3">警告</el-button>
            <el-button :plain="true" @click="open">消息</el-button>
            <el-button :plain="true" @click="open4">错误</el-button>
        </div>
        <div class="c-block">
            <h3>可关闭</h3>
            <span class="desc">可以添加关闭按钮。</span>
            <br/>
            <el-button :plain="true" @click="open5">消息</el-button>
            <el-button :plain="true" @click="open6">成功</el-button>
            <el-button :plain="true" @click="open7">警告</el-button>
            <el-button :plain="true" @click="open8">错误</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            open() {
                this.$message('这是一条消息提示');
            },
            open2() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },

            open3() {
                this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },

            open4() {
                this.$message.error('错了哦，这是一条错误消息');
            },

            open5() {
                this.$message({
                    showClose: true,
                    message: '这是一条消息提示'
                });
            },

            open6() {
                this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },

            open7() {
                this.$message({
                    showClose: true,
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },

            open8() {
                this.$message({
                    showClose: true,
                    message: '错了哦，这是一条错误消息',
                    type: 'error'
                });
            }
        }
    }
</script>
