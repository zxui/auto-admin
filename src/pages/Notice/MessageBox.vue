<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>MessageBox 弹框</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>MessageBox 弹框</h2>
            <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、成功提示、错误提示、询问信息。</p>
        </div>

        <div class="c-block">
            <h3>基础用法</h3>
            <span class="desc">当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。点击打开 Message Box</span>
            <br/>
            <el-button type="text" @click="open">点击打开 Message Box</el-button>
        </div>

        <div class="c-block">
            <h3>确认消息</h3>
            <span class="desc">提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</span>
            <br/>
            <el-button type="text" @click="open2">点击打开 Message Box</el-button>
        </div>

        <div class="c-block">
            <h3>提交内容</h3>
            <span class="desc">当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</span>
            <br/>
            <el-button type="text" @click="open3">点击打开 Message Box</el-button>
        </div>

        <div class="c-block">
            <h3>自定义</h3>
            <span class="desc">可自定义配置不同内容。</span>
            <br/>
            <el-button type="text" @click="open4">点击打开 Message Box</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            open() {
                this.$alert('这是一段内容', '标题名称', {
                            confirmButtonText: '确定',
                            callback: action => {
                            this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
            }
            });
            },
            open2() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
            },
            open3() {
                this.$prompt('请输入邮箱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    this.$message({
                    type: 'success',
                    message: '你的邮箱是: ' + value
                });
            }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
            },
            open4() {
                const h = this.$createElement;
                this.$msgbox({
                            title: '消息',
                            message: h('p', null, [
                                h('span', null, '内容可以是 '),
                                h('i', { style: 'color: teal' }, 'VNode')
                            ]),
                            showCancelButton: true,
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            beforeClose: (action, instance, done) => {
                            if (action === 'confirm') {
                    instance.confirmButtonLoading = true;
                    instance.confirmButtonText = '执行中...';
                    setTimeout(() => {
                        done();
                    setTimeout(() => {
                        instance.confirmButtonLoading = false;
                }, 300);
                }, 3000);
                } else {
                    done();
                }
            }
            }).then(action => {
                    this.$message({
                    type: 'info',
                    message: 'action: ' + action
                });
            });
            }
        }
    }
</script>