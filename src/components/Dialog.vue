<template>
    <div>
        <el-dialog
                :title="dialogTitle"
                :visible.sync="visible"
                :before-close="handleCancle"
                :width="autoWidth+'px'">
            <slot name="content">
                <div class="zx-form-content">
                    <b v-if="groupTitle">{{groupTitle}}</b>
                    <el-form :model="formModel" ref="formModel" :rules="formRule" inline-message>
                        <i v-if="1==defReadAndWrite" class="icon iconfont icon-bianji opt-edit-btn" title="编辑"
                           @click="defReadAndWrite = 0;dialogTitle='编辑'"> 编辑</i>
                        <el-form-item
                                v-for="field in formField"
                                v-if="field.editable"
                                :label="field.label" class="form-label-width"
                                :prop="field.prop">
                            <span v-if="defReadAndWrite>0">
                                {{formModel[field.prop]}}
                            </span>
                            <span v-else>
                                <el-select v-if="'select'==field.type"
                                           v-model="formModel[field.prop]"
                                           :placeholder="field.label"
                                           class="form-text-width" size="small">
                                    <el-option v-for="option in field.options" :label="option.label"
                                               :value="option.value"></el-option>
                                </el-select>
                                <el-input v-if="'text'==field.type||!!!field.type"
                                          v-model="formModel[field.prop]"
                                          :placeholder="field.label"
                                          :maxlength="field.maxlength"
                                          clearable
                                          class="form-text-width" size="small">
                                    <span slot="suffix" v-if="field.maxlength">{{formModel[field.prop].length}}/{{field.maxlength}}</span>
                                </el-input>
                                <el-autocomplete v-if="'autocomplete'==field.type"
                                                 v-model="formModel[field.prop]"
                                                 :placeholder="field.label"
                                                 :maxlength="field.maxlength"
                                                 :focus="autocompleteFocus(field.suggestions)"
                                                 :fetch-suggestions="suggestions"
                                                 class="form-text-width" size="small">
                                    <span slot="suffix" v-if="field.maxlength">{{formModel[field.prop].length}}/{{field.maxlength}}</span>
                                </el-autocomplete>
                                <el-input v-if="'textarea'==field.type"
                                          type="textarea"
                                          :rows="2"
                                          :placeholder="field.label"
                                          :maxlength="field.maxlength"
                                          v-model="formModel[field.prop]"
                                          class="form-textarea-width">
                                </el-input>
                                <span class="textarea-suffix" v-if="'textarea'==field.type&&field.maxlength">{{formModel[field.prop].length}}/{{field.maxlength}}</span>
                                <span v-if="'radio'==field.type">
                                    <el-radio v-for="option in field.options"
                                              v-model="formModel[field.prop]"
                                              :label="option.value">
                                        {{option.label}}
                                    </el-radio>
                                </span>
                                <span v-if="'checkbox'==field.type">
                                    <el-checkbox-group v-model="formModel[field.prop]">
                                        <el-checkbox v-for="option in field.options"
                                                     :label="option.value"
                                                     :key="option.label">
                                            {{option.label}}
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </span>
                                <el-date-picker v-if="'date'==field.type"
                                                class="form-text-width" size="small"
                                                v-model="formModel[field.prop]"
                                                type="date">
                                </el-date-picker>
                            </span>
                        </el-form-item>
                    </el-form>
                    <slot name="footer"></slot>
                </div>
            </slot>
            <div slot="footer" class="dialog-footer" style="text-align: center" v-if="defReadAndWrite==0">
                <el-button @click="handleCancle">取 消</el-button>
                <el-button type="primary" @click="handleSure">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    /**
     * @params readAndWrite 0：编辑，1：可读可写，2：只读
     */
    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            readAndWrite: {
                type: Number,
                default: 0
            },
            title: {
                type: String,
                default: "编辑"
            },
            groupTitle: {
                type: String
            },
            formField: {
                type: Array
            },
            formRule: {
                type: Object
            },
            formModel: {
                type: Object
            }
        },
        data: function () {
            return {
                defReadAndWrite: this.readAndWrite,
                dialogTitle: this.title,
                autocomplete: []
            }
        },
        methods: {
            handleSure(){
                var _self = this;
                _self.$refs['formModel'].validate(function (valid) {
                    if (valid) {
                        _self.$emit('handleSure', _self.formModel);
                    } else {
                        return false;
                    }
                })
            },
            handleCancle(){
                this.$emit('handleCancle');
            },
            suggestions(queryString, callback){
                let autocomplete = this.autocomplete;
                let results = queryString ? autocomplete.filter(this.createFilter(queryString)) : autocomplete;
                callback(results);
            },
            createFilter(queryString) {
                return function (autocomplete) {
                    return (autocomplete.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            autocompleteFocus(val){
                this.autocomplete = !!val ? val : [];
            }
        },
        computed: {
            autoWidth(){
                return this.formField ? '950' : '300';
            }
        },
        watch: {
            visible(val){
                this.visible = val;
                this.defReadAndWrite = this.readAndWrite;
                this.dialogTitle = this.title;
            },
            readAndWrite(val){
                this.readAndWrite = val;
                this.defReadAndWrite = val;
            },
            title(val){
                this.title = val;
                this.dialogTitle = val;
            },
            formField(val){
                this.formField = val;
            },
            formRule(val){
                this.formRule = val;
            },
            formModel(val){
                this.formModel = val;
            }
        },
        R: 2,
        RW: 1,
        W: 0
    }
</script>

<style scoped>
    .form-label-width .el-form-item__label {
        text-align: left;
        width: 80px !important;
    }

    .form-field-width {
        width: 180px !important;
    }

    .zx-form-content {
        max-height: 420px;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .form-text-width {
        width: 40%;
    }

    .form-textarea-width {
        width: 65%;
    }

    .textarea-suffix {
        color: #c0c4cc;
        position: relative;
        top: 0px;
        left: -60px;
    }

    .opt-edit-btn {
        font-size: 16px;
        position: absolute;
        right: 50px;
        z-index: 999;
        margin-right: 10px;
        cursor: pointer;
    }

    .icon-bianji.opt-edit-btn {
        color: #AEB1BD;
    }

    .icon-bianji.opt-edit-btn:hover {
        color: rgba(174, 177, 189, 0.57);
    }
</style>
