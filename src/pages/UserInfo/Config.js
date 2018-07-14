import Utils from '@/common/Utils'
const config = {}
config.columnData = [
    {label: '昵称', width: 50, prop: 'nickName', serach: true, editable: true},
    {label: '头像', width: 50, prop: 'avatarUrl', special: 'image'},
    {label: '性别', width: 50, prop: 'gender', serach: true, editable: true},
    {label: '城市', width: 50, prop: 'city', serach: true, editable: true},
    {label: '省份', width: 50, prop: 'province', serach: true, editable: true},
    {label: '国家', width: 50, prop: 'country', serach: true, editable: true},
    {label: '语言', width: 50, prop: 'language', editable: true},
    {label: '微信号', width: 50, prop: 'openId', serach: true, editable: true}
];

config.formRule = {}

config.serachModel = Utils.toSerachModel(config.columnData);

config.formModel = Utils.toFormModel(config.columnData);

export default config;