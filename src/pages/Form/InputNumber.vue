<template>
    <div class="c-con">
        <el-input-number size="large" v-model="num4"></el-input-number>
        <el-input-number v-model="num5"></el-input-number>
        <el-input-number size="small" v-model="num6"></el-input-number>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                num4: 1,
                num5: 1,
                num6: 1
            }
        }
    };
</script>