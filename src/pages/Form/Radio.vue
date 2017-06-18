<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>Radio 单选框</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>Radio 单选框</h2>
            <p>在一组备选项中进行单选</p>
        </div>
        <div class="c-block">
            <h3>基础用法</h3>
            <span class="desc">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</span>
            <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
            <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        </div>
        <div class="c-block">
            <h3>禁用状态</h3>
            <span class="desc">单选框不可用的状态。</span>
            <el-radio disabled v-model="radio" label="禁用">备选项</el-radio>
            <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>
        </div>
        <div class="c-block">
            <h3>单选框组</h3>
            <span class="desc">适用于在多个互斥的选项中选择的场景。</span>
            <el-radio-group v-model="radio">
                <el-radio :label="3">备选项</el-radio>
                <el-radio :label="6">备选项</el-radio>
                <el-radio :label="9">备选项</el-radio>
            </el-radio-group>
        </div>
        <div class="c-block">
            <h3>按钮样式</h3>
            <span class="desc">按钮样式的单选组合。</span>
            <el-radio-group v-model="radio3">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
            <div style="margin: 15px 0;"></div>
            <el-radio-group v-model="radio4">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京" :disabled="true"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
            <div style="margin: 15px 0;"></div>
            <el-radio-group v-model="radio5" :disabled="true">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                radio: '1',
                radio3: '上海',
                radio4: '上海',
                radio5: '上海'
            };
        }
    }
</script>