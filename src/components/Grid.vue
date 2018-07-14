<template>
    <div>
        <div class="c-serach">
            <el-form :inline="true" :model="serachModel" ref="serachModel" class="zx-serach">
                <span v-for="(column,index) in serachColumnData">
                    <el-form-item :label="column.serachLabel?column.serachLabel:column.label"
                                  class="form-label-width"
                                  :prop="column.prop">
                        <el-select v-if="'select'==column.type"
                                   v-model="serachModel[column.prop]"
                                   :placeholder="column.label"
                                   class="form-field-width" size="small">
                            <el-option v-for="option in column.options" :label="option.label"
                                       :value="option.value"></el-option>
                        </el-select>
                        <el-input v-if="'text'==column.type||!!!column.type"
                                  v-model="serachModel[column.prop]"
                                  :placeholder="column.label"
                                  class="form-field-width" size="small">
                        </el-input>
                        <el-date-picker v-if="'date'==column.type"
                                        class="form-field-width" size="small"
                                        v-model="serachModel[column.prop]"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <br v-if="(index+1)%3==0&&(index+1)!=serachColumnData.length"/>
                </span>
                <el-form-item style="float: right;">
                    <el-button plain type="primary" size="medium" @click="serach">查询</el-button>
                    <el-button plain type="info" size="medium" @click="reset">重置</el-button>
                    <slot name="btn-group"></slot>
                </el-form-item>
            </el-form>
        </div>
        <div class="c-grid">
            <el-table :data="tableData" border style="width: 100%"
                      @selection-change="handleSelectionChange"
                      @sort-change="handleSortChange"
                      @row-dblclick="handleRowDblclick"
                      :row-class-name="tableRowClassName">
                <el-table-column v-if="selection"
                                 type="selection"
                                 width="50">
                </el-table-column>
                <el-table-column v-for="column in columnData"
                                 v-if="!column.special&&!column.hideaway"
                                 :sortable="column.sortable"
                                 :prop="column.prop"
                                 :label="column.label"
                                 :formatter="formatter"
                                 :min-width="column.width">
                </el-table-column>
                <el-table-column
                        v-else-if="'popover'==column.special&&!column.hideaway"
                        :sortable="column.sortable"
                        :prop="column.prop"
                        :label="column.label"
                        :min-width="column.width">
                    <template slot-scope="scope">
                        <el-popover trigger="hover">
                            {{scope.row[column.prop]}}
                            <div slot="reference">
                                {{scope.row[column.prop]}}
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                        v-else-if="'image'==column.special&&!column.hideaway"
                        :sortable="column.sortable"
                        :prop="column.prop"
                        :label="column.label"
                        :min-width="column.width">
                    <template slot-scope="scope">
                        <img :src="scope.row[column.prop]" width="50px" height="50px"/>
                    </template>
                </el-table-column>
                <slot name="column"></slot>
            </el-table>
        </div>
        <div class="c-pagination">
            <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="pageSizes"
                    :page-size="pageSize"
                    :total="total"
                    layout="total,  prev, pager, next,sizes, jumper">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    let formatterConfig = {
        "createTm": 'date',
        "updateTm": 'date'
    }
    export default {
        data: function () {
            return {
                pageSize: 10,
                pageSizes: [10, 20, 30, 50],
                currentPage: 1,
                serachRowCount: 0,
                serachColumnData: this.getSerachColumnData(this.columnData)
            }
        },
        props: {
            columnData: {
                type: Array
            },
            tableData: {
                type: Array,
                required: true
            },
            serachModel: {
                type: Object
            },
            total: {
                type: Number
            },
            selection: {
                type: Boolean
            }
        },
        methods: {
            serach(params){
                this.$emit('onChange', Object.assign(this.serachModel,
                        {currentPage: this.currentPage, pageSize: this.pageSize}, params));
            },
            handleSizeChange(val){
                this.currentPage = 1;
                this.pageSize = val;
                this.serach();
            },
            handleCurrentChange(val){
                this.currentPage = val;
                this.serach();
            },
            reset(){
                this.$refs['serachModel'].resetFields();
            },
            handleSelectionChange(val){
                this.$emit('onSelection', val);
            },
            handleRowDblclick(val){
                this.$emit('onRowDblclick', val);
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex % 2 == 0) {
                    return 'warning-row';
                }
                return '';
            },
            handleSortChange(val){
                this.serach({sort: val.prop, order: ('ascending' == val.order ? 'asc' : 'desc')});
            },
            getSerachColumnData(columnData){
                let serachColumnData = [];
                columnData.forEach(function (o, i) {
                    if (o.serach) {
                        serachColumnData.push(o)
                    }
                });
                return serachColumnData;
            },
            formatter(row, column, cellValue, index){
                switch (formatterConfig[column.property]) {
                    case 'date':
                        return new Date(cellValue).format('yyyy-MM-dd hh:mm:ss');
                    default:
                        return cellValue;
                }
            }
        }
        ,
        watch: {
            columnData(val){
                this.columnData = val;
                this.getSerachColumnData(this.columnData)
            },
            tableData(val){
                this.tableData = val;
            },
            serachModel(val){
                this.serachModel = val;
            },
            total(val){
                this.total = val;
            }
        }
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

    .c-serach .el-form-item {
        margin-bottom: 0px;
    }

    .zx-serach {
        background: #fff;
        padding: 20px 0px 20px 20px;
        border: 1px solid #ebeef5;
    }
</style>
