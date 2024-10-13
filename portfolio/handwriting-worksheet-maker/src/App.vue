<template>
    <div id="app">
        <form id="form" class="mb-2">
            <label for="title" class="mr-2">Title:</label>
            <input type="text" id="title" name="title" v-model="title" :style="{
                width: `${title.length}ch`,
            }" /><br>
            <label for="font" class="mr-2">Font:</label>
            <input type="number" id="fontSize" name="fontSize" v-model="fontSize" :style="{
                width: `${fontSize.toString().length}ch`,
            }" /><select id="fontUnit" name="fontUnit" v-model="fontUnit">
                <option value="px">px</option>
                <option value="pt">pt</option>
            </select> <select id="font" name="font" v-model="font">
                <option value="Century Gothic">Century Gothic</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Arial">Arial</option>
            </select> <input type="number" id="opacity" name="opacity" v-model="opacity" min="0" max="1" step="0.05"
                :style="{ width: '4ch' }" /> opacity<br>
            <label for="content" class="mr-2">Content:</label><br>
            <textarea id="content" name="content" class="w-full" v-model="content"
                :style="{ fontFamily: font }"></textarea><br>
            <input type="submit" value="Print" @click="print" />
        </form>
        <Preview :title="title" :content="content" :font-size="`${fontSize}${fontUnit}`" :font-family="font" :opacity="opacity" />
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
            fontSize: 36,
            fontUnit: 'pt',
            opacity: 0.25,
            content: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
        };
    },
    computed: {
        fontSizeInPoints() {
            // Formula: px = pt * (96 / 72);
            // pt = px / (96 / 72);
            return parseFloat(this.fontSize) / (96 / 72) + 'pt';
        },
    },
    methods: {
        print(e) {
            if (e) {
                e.preventDefault();
            }
            window.print();
        },
    },
};
</script>
<style scoped>
input[type="text"],
input[type="number"],
select {
    border-width: 2px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

textarea {
    border-width: 2px;
    border-style: solid;
    padding: 0.5em;
}

input[type="number"] {
    width: auto;
    box-sizing: content-box;
}

input[type="text"]:focus,
input[type="number"]:focus,
select:focus {
    outline: #007bff solid 2px;
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
