const config = {}
config.columnData = [
    {label: '题目', width: 180, prop: 'name', serach: true},
    {label: '分类', width: 180, prop: 'topicTypeName', serach: true},
    {label: '描述', width: 180, prop: 'detail'},
    {label: '更新时间', width: 180, prop: 'updateTm'},
    {label: '创建时间', width: 180, prop: 'createTm', type: 'date'}
];
config.serachModel = {
    name: '',
    topicTypeName: ''
}
export default config;