<template>
    <div id="preview" :style="{ fontFamily, fontSize }">
        <div class="title">{{ title }}</div>
        <div class="content">{{ content }}</div>
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
    },
};
</script>
<style scoped>
#preview {
    width: 8.5in;
    height: 11in;
    margin: 0.5in;
}

.title {
    text-align: center;
    font-size: 24pt;
    line-height: 0.75;
    margin-bottom: 0.25in;
}

.content {
    white-space: pre;
}
</style>
