<template>
    <div class="c-con">
        <Grid :columnData="columnData"
              :tableData="memberPager.tableData"
              :serachModel="serachModel"
              :total="memberPager.total"
              @onChange="gridChange">
            <el-table-column label="操作" slot="column">
                <template scope="scope">
                    <el-button size="small" @click="showEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button size="small" type="danger" @click="showDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </Grid>
        <Dialog :visible="dialogStat.editVisible" @handleSure="editHandleSure" @handleCancle="editHandleCancle">
            <el-form :model="form">
                <el-form-item label="题目" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类" :label-width="formLabelWidth">
                    <el-input v-model="form.type" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="题库描述" :label-width="formLabelWidth">
                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                </el-form-item>
                <div>
                    <table style="width: 100%">
                        <tr>
                            <td style="width: 35%">
                                <el-form-item label="选项1" :label-width="formLabelWidth">
                                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                                </el-form-item>
                            </td>
                            <td style="width: 35%">
                                <el-form-item label="值" :label-width="formLabelWidth">
                                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                                </el-form-item>
                            </td>
                            <td style="width: 30%">
                                <el-tooltip class="item" effect="dark" content="正确答案" placement="top">
                                    <el-checkbox v-model="form.truth"></el-checkbox>
                                </el-tooltip>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 35%">
                                <el-form-item label="选项1" :label-width="formLabelWidth">
                                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                                </el-form-item>
                            </td>
                            <td style="width: 35%">
                                <el-form-item label="值" :label-width="formLabelWidth">
                                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                                </el-form-item>
                            </td>
                            <td style="width: 30%">
                                <el-tooltip class="item" effect="dark" content="正确答案" placement="top">
                                    <el-checkbox v-model="form.truth"></el-checkbox>
                                </el-tooltip>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 35%">
                                <el-form-item label="选项1" :label-width="formLabelWidth">
                                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                                </el-form-item>
                            </td>
                            <td style="width: 35%">
                                <el-form-item label="值" :label-width="formLabelWidth">
                                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                                </el-form-item>
                            </td>
                            <td style="width: 30%">
                                <el-tooltip class="item" effect="dark" content="正确答案" placement="top">
                                    <el-checkbox v-model="form.truth"></el-checkbox>
                                </el-tooltip>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 35%">
                                <el-form-item label="选项1" :label-width="formLabelWidth">
                                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                                </el-form-item>
                            </td>
                            <td style="width: 35%">
                                <el-form-item label="值" :label-width="formLabelWidth">
                                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                                </el-form-item>
                            </td>
                            <td style="width: 30%">
                                <el-tooltip class="item" effect="dark" content="正确答案" placement="top">
                                    <el-checkbox v-model="form.truth"></el-checkbox>
                                </el-tooltip>
                            </td>
                        </tr>
                    </table>
                </div>
            </el-form>
        </Dialog>
        <Dialog :visible="dialogStat.delVisible" @handleSure="delHandleSure" @handleCancle="delHandleCancle">
            <div slot="content">
                <div style="text-align: center;font-size: 18px">您确定要删除吗？</div>
            </div>
        </Dialog>
    </div>
</template>

<script>
    import $Http from  '@/config/HttpHelper'
    import API from  '@/config/URL'
    import Grid from '@/components/Grid.vue'
    import Dialog from '@/components/Dialog.vue'
    import TopicResConf from './TopicResConf';
    export default {
        data () {
            return {
                dialogStat: {
                    editVisible: false,
                    delVisible: false,
                },
                serachModel: TopicResConf.serachModel,
                columnData: TopicResConf.columnData,
                memberPager: {
                    total: 400,
                    pageSize: 10,
                    currentPage: 1,
                    tableData: []
                },
                form: {
                    "id": "",
                    "name": "",
                    "topicTypeName": "",
                    "code": "",
                    "detail": "",
                    "updateTm": "",
                    "createTm": "",
                    "truth": "",
                    "optons": [
                        {
                            "label": "",
                            "value": ""
                        },
                        {
                            "label": "",
                            "value": ""
                        }
                    ]
                },
                formLabelWidth: '120px'
            }
        },
        mounted(){
            var self = this;
            self.loadData({});
        },
        methods: {
            loadData(params){
                var self = this;
                $Http.get(API.topicResListUrl, {params: params}).then(function (res) {
                    if (res.data.data) {
                        self.memberPager.tableData = res.data.data.list;
                        self.memberPager.total = res.data.data.total;
                    }
                });
            },
            gridChange(val){
                this.loadData(val);
            },
            showEdit(index, row) {
                this.dialogStat.editVisible = true;
            },
            showDelete(index, row) {
                this.dialogStat.delVisible = true;
            },
            editHandleSure(){
                this.$message({
                    message: '保存成功',
                    type: 'success'
                });
                this.dialogStat.editVisible = false;
            },
            delHandleSure(){
                this.$message({
                    message: '操作成功',
                    type: 'success'
                });
                this.dialogStat.delVisible = false;
            },
            editHandleCancle(){
                this.dialogStat.editVisible = false;
            },
            delHandleCancle(){
                this.dialogStat.delVisible = false;
            }
        },
        components: {
            Grid, Dialog
        }
    }
</script>
