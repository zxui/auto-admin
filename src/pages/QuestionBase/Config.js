import Utils from '@/common/Utils'
const config = {}
config.columnData = [
    {label: '题库名称', width: 50, prop: 'name', maxlength: 20, editable: true, serach: true},
    {label: '题库代码', width: 50, prop: 'code', editable: true, serach: true},
    {label: '描述', width: 50, prop: 'detail', type: 'textarea', maxlength: 120, editable: true},
    {label: '更新时间', width: 50, prop: 'updateTm', type: 'date', sortable: true},
    {label: '创建时间', width: 50, prop: 'createTm', type: 'date', sortable: true}
];

config.formRule = {
    name: [
        {required: true, message: '请输入题库名称', trigger: 'blur'}
    ],
    code: [
        {required: true, message: '请输入分类代码', trigger: 'blur'}
    ]
}

config.serachModel = Utils.toSerachModel(config.columnData);

config.formModel = Utils.toFormModel(config.columnData);

export default config;