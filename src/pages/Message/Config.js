import Utils from '@/common/Utils'
const config = {}
config.columnData = [
    {label: '会员ID', width: 50, prop: 'name', maxlength: 20, editable: true},
    {label: '会员描述', width: 50, prop: 'description', type: 'textarea', maxlength: 120, editable: true},
    {label: '会员级别', width: 50, prop: 'levelId'},
    {
        label: '会员状态',
        width: 50,
        prop: 'state',
        serach: true,
        type: 'select',
        options: [{label: '有效', value: '1'}, {label: '失效', value: '0'}],
        editable: true
    },
    {label: '会员用户ID', width: 50, prop: 'userId', serach: true, editable: true},
    {label: '会员设备ID', width: 50, prop: 'deviceId', serach: true, editable: true},
    {label: '项目名称', width: 50, prop: 'project', serach: true, editable: true},
    {label: '会员激活时间', serachLabel: '会员激活时间区间', width: 50, prop: 'startTm', type: 'date', serach: true, editable: true, sortable: true},
    {label: '会员到期时间', serachLabel: '会员到期时间区间', width: 50, prop: 'endTm', type: 'date', serach: true, editable: true, sortable: true},
    {label: '会员信息更新时间', width: 50, prop: 'updateTm', type: 'date', editable: true, sortable: true}
];

config.formRule = {
    name: [
        {required: true, message: '请输入活动名称', trigger: 'blur'},
        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
    ],
    description: [
        {required: true, message: '请选择活动区域', trigger: 'blur'}
    ],
    startTm: [
        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
    ],
    endTm: [
        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
    ]
}

config.serachModel = Utils.toSerachModel(config.columnData);

config.formModel = Utils.toFormModel(config.columnData);

export default config;