<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>Notification 通知</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>Notification 通知</h2>
            <p>悬浮出现在页面右上角，显示全局的通知提醒消息。</p>
        </div>

        <div class="c-block">
            <h3>基础用法</h3>
            <span class="desc">适用性广泛的通知栏</span>
            <br/>
            <el-button
                    plain
                    @click="open">
                可自动关闭
            </el-button>
            <el-button
                    plain
                    @click="open2">
                不会自动关闭
            </el-button>
        </div>

        <div class="c-block">
            <h3>带有倾向性</h3>
            <span class="desc">带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</span>
            <br/>
            <el-button
                    plain
                    @click="open3">
                成功
            </el-button>
            <el-button
                    plain
                    @click="open4">
                警告
            </el-button>
            <el-button
                    plain
                    @click="open5">
                消息
            </el-button>
            <el-button
                    plain
                    @click="open6">
                错误
            </el-button>
        </div>

        <div class="c-block">
            <h3>带有偏移</h3>
            <span class="desc">让 Notification 偏移一些位置</span>
            <br/>
            <el-button
                    plain
                    @click="open7">
                偏移的消息
            </el-button>
        </div>

    </div>
</template>

<script>
    export default {
        methods: {
            open() {
                const h = this.$createElement;

                this.$notify({
                    title: '标题名称',
                    message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
                });
            },

            open2() {
                this.$notify({
                    title: '提示',
                    message: '这是一条不会自动关闭的消息',
                    duration: 0
                });
            },
            open3() {
                this.$notify({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                });
            },

            open4() {
                this.$notify({
                    title: '警告',
                    message: '这是一条警告的提示消息',
                    type: 'warning'
                });
            },

            open5() {
                this.$notify.info({
                    title: '消息',
                    message: '这是一条消息的提示消息'
                });
            },

            open6() {
                this.$notify.error({
                    title: '错误',
                    message: '这是一条错误的提示消息'
                });
            },

            open7() {
                this.$notify.success({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    offset: 100
                });
            }
        }
    }
</script>
