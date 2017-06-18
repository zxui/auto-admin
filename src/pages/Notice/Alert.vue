<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>Alert 警告</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>Alert 警告</h2>
            <p>用于页面中展示重要的提示信息。</p>
        </div>
        <div class="c-block">
            <h3>基本用法</h3>
            <span class="desc">页面中的非浮层元素，不会自动消失。</span>
            <br/>
            <el-alert
                    title="成功提示的文案"
                    type="success">
            </el-alert>
            <el-alert
                    title="消息提示的文案"
                    type="info">
            </el-alert>
            <el-alert
                    title="警告提示的文案"
                    type="warning">
            </el-alert>
            <el-alert
                    title="错误提示的文案"
                    type="error">
            </el-alert>
        </div>
        <div class="c-block">
            <h3>自定义关闭按钮</h3>
            <span class="desc">自定义关闭按钮为文字或其他符号。</span>
            <br/>
            <el-alert
                    title="不可关闭的 alert"
                    type="success"
                    :closable="false">
            </el-alert>
            <el-alert
                    title="自定义 close-text"
                    type="info"
                    close-text="知道了">
            </el-alert>
            <el-alert
                    title="设置了回调的 alert"
                    type="warning"
                    @close="hello">
            </el-alert>
        </div>
        <div class="c-block">
            <h3>带有 icon</h3>
            <span class="desc">表示某种状态时提升可读性。</span>
            <br/>
            <el-alert
                    title="成功提示的文案"
                    type="success"
                    show-icon>
            </el-alert>
            <el-alert
                    title="消息提示的文案"
                    type="info"
                    show-icon>
            </el-alert>
            <el-alert
                    title="警告提示的文案"
                    type="warning"
                    show-icon>
            </el-alert>
            <el-alert
                    title="错误提示的文案"
                    type="error"
                    show-icon>
            </el-alert>
        </div>
        <div class="c-block">
            <h3>带有辅助性文字介绍</h3>
            <span class="desc">包含标题和内容，解释更详细的警告。</span>
            <br/>
            <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </el-alert>
        </div>
        <div class="c-block">
            <h3>带有 icon 和辅助性文字介绍</h3>
            <br/>
            <el-alert
                    title="成功提示的文案"
                    type="success"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
            </el-alert>
            <el-alert
                    title="消息提示的文案"
                    type="info"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
            </el-alert>
            <el-alert
                    title="警告提示的文案"
                    type="warning"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
            </el-alert>
            <el-alert
                    title="错误提示的文案"
                    type="error"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
            </el-alert>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            hello() {
                alert('Hello World!');
            }
        }
    }
</script>