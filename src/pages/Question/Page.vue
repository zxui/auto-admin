<template>
    <div class="c-con">
        <Grid :columnData="masterGrid.columnData"
              :tableData="masterGrid.tableData"
              :serachModel="masterGrid.serachModel"
              :total="masterGrid.total"
              selection
              @onSelection="handleSelection"
              @onRowDblclick="showEdit"
              @onChange="gridChange">
             <span slot="btn-group">
                    <el-button plain type="primary" size="medium" icon="icon iconfont icon-shanchu"
                               @click="delHandleSure()">删除
                    </el-button>
                    <el-button plain type="primary" size="medium" icon="el-icon-plus"
                               @click="showCreate()">创建
                    </el-button>
            </span>
        </Grid>
        <Dialog :title="dialogStat.title"
                :visible="dialogStat.editVisible"
                :readAndWrite="dialogStat.readAndWrite"
                :formField="masterGrid.formField"
                :formRule="masterGrid.formRule"
                :formModel="masterGrid.formModel"
                @handleSure="editHandleSure"
                @handleCancle="editHandleCancle">
        </Dialog>
    </div>
</template>

<script>
    import $HttpHelper from '@/common/HttpHelper';
    import Urls from '@/common/Urls';
    import Grid from '@/components/Grid.vue';
    import Dialog from '@/components/Dialog.vue';
    import Config from './Config';
    export default {
        data () {
            return {
                dialogStat: {
                    title: '创建',
                    editVisible: false,
                    readAndWrite: Dialog.W
                },
                masterGrid: {
                    total: 0,
                    pageSize: 10,
                    currentPage: 1,
                    tableData: [],
                    serachModel: Config.serachModel,
                    columnData: Config.columnData,
                    formField: Config.columnData,
                    formRule: Config.formRule,
                    formModel: Config.formModel,
                    currentSelectionRows: []
                }
            }
        },
        mounted(){
            var self = this;
            self.loadingData({});
        },
        components: {
            Grid, Dialog
        },
        methods: {
            loadingData(params){
                var self = this;
                $HttpHelper.get(Urls.questionUrl, {params: params}).then(function (res) {
                    if (res.data.data) {
                        self.masterGrid.total = res.data.data.total;
                        self.masterGrid.tableData = res.data.data.list;
                    }
                });
            },
            gridChange(val){
                this.loadingData(val)
            },
            showCreate() {
                this.masterGrid.formModel = JSON.parse(JSON.stringify(Config.formModel));
                this.dialogStat.title = '创建';
                this.dialogStat.readAndWrite = Dialog.W;
                this.dialogStat.editVisible = true;
            },
            showEdit(val){
                this.masterGrid.formModel = Object.assign({}, Config.formModel, val);
                this.dialogStat.title = '详细';
                this.dialogStat.readAndWrite = Dialog.RW;
                this.dialogStat.editVisible = true;
            },
            showDelete(index, row) {
            },
            editHandleSure(val){
                let self = this;
                val.options = [];
                $HttpHelper.post(Urls.questionUrl, self.$qs.stringify(val)).then(function (res) {
                    self.dialogStat.editVisible = false;
                    self.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    self.loadingData({});
                });
            },
            delHandleSure(){
                let self = this;
                if (self.masterGrid.currentSelectionRows.length <= 0) {
                    self.$message({
                        type: 'warning',
                        message: '请选择操作行!'
                    });
                    return false;
                }
                let params = [];
                self.masterGrid.currentSelectionRows.forEach(function (o, i) {
                    params.push(o.id);
                })
                self.$confirm('您确定要删除吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    $HttpHelper.delete(Urls.questionUrl,
                            {params: {ids: params.join(',')}})
                            .then(function () {
                                self.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                                self.loadingData({});
                            });
                });
            },
            editHandleCancle(){
                this.dialogStat.editVisible = false;
            },
            delHandleCancle(){
            },
            handleSelection(val){
                this.masterGrid.currentSelectionRows = val;
            }
        }
    }
</script>

<style>

</style>
