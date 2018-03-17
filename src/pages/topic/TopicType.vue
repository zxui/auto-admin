<template>
    <div class="c-con">
        <div style="margin-bottom: 1%">
            <el-input
                    placeholder="分类名称"
                    :style="'width:300px;'"
                    v-model="currentParams.name"
                    clearable>
            </el-input>
            <el-button type="primary" icon="el-icon-search" @click="serach" style="margin-left: 20px;"> 查 询</el-button>
            <el-button type="primary" icon="el-icon-search" @click="serachAll" style="margin-left: 10px;"> 全 部</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="batchDel" style="float: right">删除</el-button>
            <el-button type="primary" icon="el-icon-edit" @click="openAdd" style="float: right">添加</el-button>
        </div>
        <el-table :data="tableData" border style="width: 100%;">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    label="分类名称"
                    width="180">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="分类代码"
                    width="80">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.type }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="描述"
                    width="180">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.detail }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="更新时间"
                    width="180">
                <template scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.updateTm }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="创建时间"
                    width="180">
                <template scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.createTm }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button size="small" type="danger" @click="showDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="text-align: center;margin-top: 50px">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total"
                    @current-change="pageChange">
            </el-pagination>
        </div>

        <el-dialog title="题库分类" width="500px" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="题库名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="题库类型" :label-width="formLabelWidth">
                    <el-input v-model="form.code" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="题库描述" :label-width="formLabelWidth">
                    <el-input v-model="form.detail" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitData">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="300px">
            <div style="text-align: center;font-size: 18px">您确定要删除吗？</div>
            <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleDelete">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import $Http from  '@/config/HttpHelper'
    import API from  '@/config/URL'
    export default {
        data () {
            return {
                dialogFormVisible: false,
                centerDialogVisible: false,
                currentRowId: '',
                currentParams: {},
                pageSize: 10,
                pageNo: 1,
                total: 0,
                form: {
                    id: '',
                    name: '',
                    code: '',
                    detail: ''
                },
                formLabelWidth: '120px',
                tableData: []
            }
        },
        mounted(){
            var self = this;
            self.loadData(Object.assign(self.currentParams, {pageSize: self.pageSize, pageNo: self.pageNo}));
        },
        methods: {
            loadData(params){
                var self = this;
                $Http.get(API.topicTypeList, {params: params}).then(function (res) {
                    if (res.data.data) {
                        self.tableData = res.data.data.list;
                        self.total = res.data.data.total;
                    }
                });
            },
            handleEdit(index, row) {
                var self = this;
                $Http.get(API.topicTypeInfo, {params: {id: row.id}}).then(function (res) {
                    if ('0' == res.data.code) {
                        self.form = res.data.data;
                        self.dialogFormVisible = true;
                    }
                });
            },
            showDelete(index, row) {
                var self = this;
                self.currentRowId = row.id;
                self.centerDialogVisible = true;
            },
            handleDelete(index, row) {
                var self = this;
                $Http.get(API.delTopicType, {id: self.currentRowId}).then(function (res) {
                    if ('0' == res.data.code) {
                        self.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        self.centerDialogVisible = false;
                    }
                });
            },
            openAdd(){
                this.form = {
                    id: '',
                    name: '',
                    code: '',
                    detail: ''
                };
                this.dialogFormVisible = true;
            },
            submitData() {
                var self = this;
                $Http.get(API.saveTopicType, {params: self.form}).then(function (res) {
                    if ('0' == res.data.code) {
                        self.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        self.dialogFormVisible = false;
                    }
                });
            },
            pageChange(currentPage){
                var self = this;
                self.loadData(Object.assign(self.currentParams, {pageSize: self.pageSize, pageNo: currentPage}));
            },
            serach(){
                var self = this;
                self.loadData(Object.assign(self.currentParams, {pageSize: self.pageSize, pageNo: self.pageNo}));
            },
            serachAll(){
                var self = this;
                self.currentParams = {};
                self.loadData({pageSize: self.pageSize, pageNo: self.pageNo});
            },
            batchDel(){

            }
        }
    }
</script>
