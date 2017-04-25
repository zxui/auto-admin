import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import Layout from '../pages/Layout.vue';
import Color from '../pages/Color.vue';
import Typography from '../pages/Typography.vue';
import Icon from '../pages/Icon.vue';
import Button from '../pages/Button.vue';

import Radio from '../pages/Radio.vue';
import Checkbox from '../pages/Checkbox.vue';
import Input from '../pages/Input.vue';
import InputNumber from '../pages/InputNumber.vue';
import Select from '../pages/Select.vue';
import Cascader from '../pages/Cascader.vue';
import Switch from '../pages/Switch.vue';
import Slider from '../pages/Slider.vue';
import TimePicker from '../pages/TimePicker.vue';
import DatePicker from '../pages/DatePicker.vue';
import DateTimePicker from '../pages/DateTimePicker.vue';
import Upload from '../pages/Upload.vue';
import Rate from '../pages/Rate.vue';
import ColorPicker from '../pages/ColorPicker.vue';
import Form from '../pages/Form.vue';

import Table from '../pages/Table.vue';
import Tag from '../pages/Tag.vue';
import Progress from '../pages/Progress.vue';
import Tree from '../pages/Tree.vue';
import Pagination from '../pages/Pagination.vue';
import Badge from '../pages/Badge.vue';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Dashboard
  },{
    path: '/Layout',
    component: Layout
  },{
    path: '/Color',
    component: Color
  },{
    path: '/Typography',
    component: Typography
  },{
    path: '/Icon',
    component: Icon
  },{
    path: '/Button',
    component: Button
  },{
    path: '/Table',
    component: Table
  }

  ,{
    path: '/Radio',
    component: Radio
  },{
    path: '/Checkbox',
    component: Checkbox
  },{
    path: '/Input',
    component: Input
  },{
    path: '/InputNumber',
    component: InputNumber
  },{
    path: '/Select',
    component: Select
  },{
    path: '/Cascader',
    component: Cascader
  },{
    path: '/Switch',
    component: Switch
  },{
    path: '/Slider',
    component: Slider
  },{
    path: '/TimePicker',
    component: TimePicker
  },{
    path: '/DatePicker',
    component: DatePicker
  },{
    path: '/DateTimePicker',
    component: DateTimePicker
  },{
    path: '/Upload',
    component: Upload
  },{
    path: '/Rate',
    component: Rate
  },{
    path: '/ColorPicker',
    component: ColorPicker
  },{
    path: '/Form',
    component: Form
  }

  ,{
    path: '/Tag',
    component: Tag
  },{
    path: '/Progress',
    component: Progress
  },{
    path: '/Tree',
    component: Tree
  },{
    path: '/Pagination',
    component: Pagination
  },{
    path: '/Badge',
    component: Badge
  }
];
const router = new VueRouter({routes});
export default router;
