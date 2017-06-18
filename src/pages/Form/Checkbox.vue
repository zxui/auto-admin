<template>
    <div class="c-con">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">导航页</el-breadcrumb-item>
            <el-breadcrumb-item>Checkbox 多选框</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="c-block">
            <h2>Checkbox 多选框</h2>
            <p>一组备选项中进行多选</p>
        </div>
        <div class="c-block">
            <h3>基础用法</h3>
            <span class="desc">单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</span>
            <!-- `checked` 为 true 或 false -->
            <el-checkbox v-model="checked">备选项</el-checkbox>
        </div>
        <div class="c-block">
            <h3>禁用状态</h3>
            <span class="desc">多选框不可用状态。</span>
            <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
            <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
        </div>
        <div class="c-block">
            <h3>多选框组</h3>
            <span class="desc">适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</span>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="c-block">
            <h3>indeterminate 状态</h3>
            <span class="desc">indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</span>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="c-block">
            <h3>可选项目数量的限制</h3>
            <span class="desc">使用 min 和 max 属性能够限制可以被勾选的项目的数量。</span>
            <el-checkbox-group
                    v-model="checkedCities1"
                    :min="1"
                    :max="2">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="c-block">
            <h3>按钮样式</h3>
            <span class="desc">按钮样式的多选组合。</span>
            <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkboxGroup2" size="small">
                <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '深圳'" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkboxGroup3" size="large" fill="#324057" text-color="#a4aebd" :min="1" :max="3">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        data () {
            return {
                checked: true,
                checkList: ['选中且禁用','复选框 A'],
                checked1: false,
                checked2: true,
                checkAll: true,
                checkedCities: ['上海', '北京'],
                checkedCities1: ['上海', '北京'],
                cities: cityOptions,
                checkboxGroup1: ['上海'],
                checkboxGroup2: ['北京'],
                checkboxGroup3: ['广州'],
                isIndeterminate: true
            };
        },
        methods: {
            handleCheckAllChange(event) {
                this.checkedCities = event.target.checked ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    };
</script>