import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';

/*Basic*/
import Layout from '../pages/Basic/Layout.vue';
import Color from '../pages/Basic/Color.vue';
import Icon from '../pages/Basic/Icon.vue';
import Button from '../pages/Basic/Button.vue';

import Radio from '../pages/Form/Radio.vue';
import Checkbox from '../pages/Form/Checkbox.vue';
import Input from '../pages/Form/Input.vue';
import InputNumber from '../pages/Form/InputNumber.vue';
import Select from '../pages/Form/Select.vue';
import Cascader from '../pages/Form/Cascader.vue';
import Switch from '../pages/Form/Switch.vue';
import Slider from '../pages/Form/Slider.vue';
import TimePicker from '../pages/Form/TimePicker.vue';
import DatePicker from '../pages/Form/DatePicker.vue';
import DateTimePicker from '../pages/Form/DateTimePicker.vue';
import Upload from '../pages/Form/Upload.vue';
import Rate from '../pages/Form/Rate.vue';
import ColorPicker from '../pages/Form/ColorPicker.vue';
import Form from '../pages/Form/Form.vue';

import Table from '../pages/Data/Table.vue';
import Tag from '../pages/Data/Tag.vue';
import Progress from '../pages/Data/Progress.vue';
import Tree from '../pages/Data/Tree.vue';
import Pagination from '../pages/Data/Pagination.vue';
import Badge from '../pages/Data/Badge.vue';

import Alert from '../pages/Notice/Alert.vue';
import Loading from '../pages/Notice/Loading.vue';
import Message from '../pages/Notice/Message.vue';
import MessageBox from '../pages/Notice/MessageBox.vue';
import Notification from '../pages/Notice/Notification.vue';

import Breadcrumb from '../pages/Navigation/Breadcrumb.vue';
import Dropdown from '../pages/Navigation/Dropdown.vue';
import NavMenu from '../pages/Navigation/NavMenu.vue';
import Tabs from '../pages/Navigation/Tabs.vue';

if (!window.VueRouter) Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Dashboard
    }, {
        path: '/Layout',
        component: Layout
    }, {
        path: '/Color',
        component: Color
    }, {
        path: '/Icon',
        component: Icon
    }, {
        path: '/Button',
        component: Button
    }, {
        path: '/Table',
        component: Table
    }

    , {
        path: '/Radio',
        component: Radio
    }, {
        path: '/Checkbox',
        component: Checkbox
    }, {
        path: '/Input',
        component: Input
    }, {
        path: '/InputNumber',
        component: InputNumber
    }, {
        path: '/Select',
        component: Select
    }, {
        path: '/Cascader',
        component: Cascader
    }, {
        path: '/Switch',
        component: Switch
    }, {
        path: '/Slider',
        component: Slider
    }, {
        path: '/TimePicker',
        component: TimePicker
    }, {
        path: '/DatePicker',
        component: DatePicker
    }, {
        path: '/DateTimePicker',
        component: DateTimePicker
    }, {
        path: '/Upload',
        component: Upload
    }, {
        path: '/Rate',
        component: Rate
    }, {
        path: '/ColorPicker',
        component: ColorPicker
    }, {
        path: '/Form',
        component: Form
    }

    , {
        path: '/Tag',
        component: Tag
    }, {
        path: '/Progress',
        component: Progress
    }, {
        path: '/Tree',
        component: Tree
    }, {
        path: '/Pagination',
        component: Pagination
    }, {
        path: '/Badge',
        component: Badge
    }

    , {
        path: '/Alert',
        component: Alert
    }, {
        path: '/Loading',
        component: Loading
    }, {
        path: '/Message',
        component: Message
    }, {
        path: '/MessageBox',
        component: MessageBox
    }, {
        path: '/Notification',
        component: Notification
    }

    , {
        path: '/Breadcrumb',
        component: Breadcrumb
    }, {
        path: '/Dropdown',
        component: Dropdown
    }, {
        path: '/NavMenu',
        component: NavMenu
    }, {
        path: '/Tabs',
        component: Tabs
    }
];
const router = new VueRouter({routes});
export default router;
