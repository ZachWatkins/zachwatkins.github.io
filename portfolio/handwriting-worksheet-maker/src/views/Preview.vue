<template>
    <div id="preview" :style="{ fontFamily, fontSize }">
        <div class="title">{{ title }}</div>
        <div class="content" :style="{ opacity }">
            <span v-for="(line, index) in contentElements" :key="index">
                {{ line }}<br>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Preview',
    props: {
        title: {
            type: String,
            default: 'Today\'s Handwriting Worksheet',
        },
        content: {
            type: String,
            default: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
        },
        fontFamily: {
            type: String,
            default: 'Century Gothic',
        },
        fontSize: {
            type: String,
            default: '18px',
        },
        opacity: {
            type: Number,
            default: 0.25,
        },
    },
    computed: {
        contentElements() {
            return this.content.split(/[\r\n]+/g);
        },
    },
};
</script>
<style scoped>
#preview {
    width: 8.5in;
    height: 11in;
    padding: 1in;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    background-color: #FFF;
    color: #000;
}

.title {
    text-align: center;
    font-size: 24pt;
    line-height: 0.75;
    margin-bottom: 0.25in;
}

.content {
    word-wrap: break-all;
}
</style>
