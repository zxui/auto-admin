<template>
    <div class="c-con">
        <Grid :columnData="columnData"
              :tableData="memberPager.tableData"
              :serachModel="serachModel"
              :total="memberPager.total"
              @onRowDblclick="showEdit"
              @onChange="gridChange">
        </Grid>
        <Dialog :title="dialogStat.title"
                :visible="dialogStat.editVisible"
                :readAndWrite="dialogStat.readAndWrite"
                :formField="formField"
                :formRule="formRule"
                :formModel="formModel"
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
                    readAndWrite: 0
                },
                serachModel: Config.serachModel,
                columnData: Config.columnData,
                formField: Config.columnData,
                formRule: Config.formRule,
                formModel: Config.formModel,
                memberPager: {
                    total: 400,
                    pageSize: 10,
                    currentPage: 1,
                    tableData: []
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
                $HttpHelper.get(Urls.membership, {params: params}).then(function (res) {
                    if (res.data.data) {
                        self.memberPager.total = res.data.data.total;
                        self.memberPager.tableData = res.data.data.list;
                    }
                });
            },
            gridChange(val){
                this.loadingData(val)
            },
            showCreate() {
                this.formModel = Config.formModel;
                this.dialogStat.title = '创建';
                this.dialogStat.readAndWrite = 0;
                this.dialogStat.editVisible = true;
            },
            showEdit(val){
                this.formModel = Object.assign(Config.formModel, val);
                this.dialogStat.title = '详细';
                this.dialogStat.readAndWrite = Dialog._.readAndWrite.readOnly;
                this.dialogStat.editVisible = true;
            },
            showDelete(index, row) {
            },
            editHandleSure(val){
                $HttpHelper.post(Urls.membership, val).then(function (res) {
                    this.dialogStat.editVisible = false;
                });
            },
            delHandleSure(){
            },
            editHandleCancle(){
                this.dialogStat.editVisible = false;
            },
            delHandleCancle(){
            }
        }
    }
</script>

<style>
    .form-label-width .el-form-item__label {
        text-align: left;
        width: 140px !important;
    }

    .form-field-width {
        width: 250px !important;
    }

    .c-serach .el-form-item {
        margin-bottom: 0px;
    }
</style>
