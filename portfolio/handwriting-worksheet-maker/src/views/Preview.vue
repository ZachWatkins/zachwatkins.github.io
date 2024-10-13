<template>
    <div id="preview" :style="{ fontFamily }">
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
    },
};
</script>
<style scoped>
/** paper width: 8.5", height: 11", margins: 0.5" */
#preview {
    width: 8.5in;
    height: 11in;
    margin: 0.5in;
    font-size: 16pt;
}

.title {
    text-align: center;
    font-size: 1.6em;
    line-height: 0.75;
    margin-bottom: 0.25in;
}
</style>
