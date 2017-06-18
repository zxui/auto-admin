<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>Loading 加载</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>Loading 加载</h2>
            <p>加载数据时显示动效。</p>
        </div>
        <div class="c-block">
            <h3>区域加载</h3>
            <span class="desc">在表格等容器中加载数据时显示。</span>
            <br/>
            <el-table
                    v-loading.body="loading"
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </div>
        <div class="c-block">
            <h3>加载文案</h3>
            <span class="desc">可自定义加载文案。</span>
            <br/>
            <el-table
                    v-loading="loading2"
                    element-loading-text="拼命加载中"
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </div>
        <div class="c-block">
            <h3>整页加载</h3>
            <span class="desc">页面数据加载时显示。</span>
            <br/>
            <el-button
                    type="primary"
                    @click="openFullScreen"
                    v-loading.fullscreen.lock="fullscreenLoading">
                显示整页加载，3 秒后消失
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fullscreenLoading: false,
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                loading: true
            };
        },
        methods: {
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
            }, 3000);
            }
        }
    };
</script>
