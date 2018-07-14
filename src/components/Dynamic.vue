<template>
    <div>
        <div v-for="(option,index) in opts">
            <el-tooltip class="item" effect="light" content="正确答案" placement="top-start">
                <el-radio v-model="answer" :label="option.value">&nbsp;</el-radio>
            </el-tooltip>
            <el-input v-model="option.name" :placeholder="'请输入选项'+(index+1)"
                      style="width: 250px;"></el-input>
            <el-input v-model="option.value" :value="index" :placeholder="'请输入选项值'+(index+1)"
                      style="width: 140px;"></el-input>
            <i class="btn-icon el-icon-plus" @click="addRow" v-if="0==index"></i>
            <i class="btn-icon icon iconfont icon-shanchu" @click="removeRow(index)" v-else></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                default: function () {
                    return [{}];
                }
            },
            truth: {
                type: String
            }
        },
        data: function () {
            return {
                opts: this.initData(this.options),
                answer: this.truth + ''
            }
        },
        methods: {
            initData(options){
                return JSON.parse(JSON.stringify(options));
            },
            addRow(){
                this.opts.push({});
            },
            removeRow(index){
                this.opts.splice(index, index);
            }
        },
        watch: {
            opts: {
                handler(val){
                    this.$emit('onChange', {options: val, truth: this.answer});
                },
                deep: true
            },
            options(val){
                this.opts = this.initData(val);
            },
            truth(val){
                this.answer = val + ''
            },
            answer(val){
                this.$emit('onChange', {options: this.opts, truth: val});
            }
        },
        checkOptions(options, truth){
            if (!!!truth || !!!options) {
                return false;
            }
            let res = true;
            options.forEach(function (o, i) {
                if (!(o.name && o.value)) {
                    res = false;
                    return;
                }
            });
            return res;
        }
    }
</script>

<style scoped>
    .btn-icon {
        cursor: pointer;
    }
</style>
