<template>
  <div id="app">
      <el-row>
          <el-col :span="24">
              <div class="header-bg">
                  <img src="./assets/logo.png"
                       alt="logo"
                       class="header-logo">
                  <ul class="header-operations">
                      <li ></li>
                      <li class="header-download"></li>
                      <li ></li>
                  </ul>
              </div>
          </el-col>
          <el-col :span="4">
              <div>
                  <el-menu default-active="2" unique-opened router>
                      <el-submenu index="1">
                          <template slot="title"><i class="el-icon-message"></i>运营商管理</template>
                          <el-menu-item index="Operator">运营商管理</el-menu-item>
                      </el-submenu>
                      <el-submenu index="2">
                          <template slot="title"><i class="el-icon-menu"></i>运营商管理</template>
                          <el-menu-item index="2-1">运营商管理</el-menu-item>
                      </el-submenu>
                      <el-submenu index="3">
                          <template slot="title"><i class="el-icon-setting"></i>运营商管理</template>
                          <el-menu-item index="3-1">运营商管理</el-menu-item>
                      </el-submenu>
                  </el-menu>
              </div>
          </el-col>
          <el-col :span="20">
              <router-view></router-view>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style>
    body {
        margin: 0px;
        padding: 0px;
        font-family: Helvetica, sans-serif;
    }
    .header-bg{
        background-color:#00a6ea;
    }
    .header-logo{
        height: 65px;
    }
    .header-operations{
        float: right;
    }
    .header-operations li{
        float: left;
    }
</style>

