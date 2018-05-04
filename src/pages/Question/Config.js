import Utils from '@/common/Utils'
const config = {}
config.columnData = [
    {label: '题目', width: 50, prop: 'qs', maxlength: 20, editable: true, serach: true},
    {label: '题库', width: 50, prop: 'qsBase', editable: true, serach: true},
    {label: '分类', width: 50, prop: 'type', editable: true, serach: true},
    {label: '描述', width: 50, type: 'textarea', maxlength: 120, prop: 'detail'},
    {label: '更新时间', width: 50, prop: 'updateTm', type: 'date', sortable: true},
    {label: '创建时间', width: 50, prop: 'createTm', type: 'date', sortable: true}
];

config.formRule = {
    qs: [
        {required: true, message: '请输入题目', trigger: 'blur'}
    ],
    qsBase: [
        {required: true, message: '请输入题库', trigger: 'blur'}
    ],
    type: [
        {required: true, message: '请输入分类', trigger: 'blur'}
    ]
}

config.serachModel = Utils.toSerachModel(config.columnData);

config.formModel = Utils.toFormModel(config.columnData);

export default config;