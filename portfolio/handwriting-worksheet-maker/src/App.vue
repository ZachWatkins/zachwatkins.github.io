<template>
    <div id="app">
        <form id="form">
            <label for="title" class="mr-2">Title:</label>
            <input type="text" id="title" name="title" v-model="title" /><br>
            <label for="font" class="mr-2">Font:</label>
            <select id="font" name="font" v-model="font">
                <option value="Century Gothic">Century Gothic</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Arial">Arial</option>
            </select><br>
            <label for="content" class="mr-2">Content:</label>
            <input type="text" id="content" name="content" v-model="content" :style="{ fontFamily: font }" /><br>
            <input type="submit" value="Print" @click="print" />
        </form>
        <div id="print-preview" :style="{ border: '1px solid', marginTop: '20px', overflow: 'scroll' }">
            <Preview :title="title" :content="content" />
        </div>
    </div>
</template>
<script>
import Preview from './views/Preview.vue';
export default {
    name: 'App',
    components: {
        Preview,
    },
    data() {
        return {
            title: 'Today\'s Handwriting Worksheet',
            font: 'Century Gothic',
            content: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
        };
    },
    methods: {
        print(e) {
            if (e) {
                e.preventDefault();
            }
            window.print();
            // // Create a new window for printing.
            // const printWindow = window.open('', '_blank');
            // // Write the content of the print preview to the new window.
            // printWindow.document.write(document.getElementById('print-preview').innerHTML);
            // // Print the new window.
            // printWindow.print();
        },
    },
};
</script>
<style scoped>
input[type="text"],
select {
    border-bottom: 1px solid;
}

.word-wrap {
    word-break: break-all;
}

input[type="submit"] {
    margin-top: 10px;
    color: white;
    background-color: #007bff;
    padding: 5px 10px;
    line-height: 1.1;
    border-radius: 0.25rem;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}
</style>
