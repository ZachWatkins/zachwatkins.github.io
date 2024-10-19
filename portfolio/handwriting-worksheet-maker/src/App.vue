<template>
    <div id="root">
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
            </select> <select id="font-family" name="font-family" v-model="fontFamily">
                <option value="Century Gothic">Century Gothic</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
            </select><br>
            <label for="lineHeight" class="mr-2">Line Height:</label>
            <input type="number" id="lineHeight" name="lineHeight" v-model="lineHeight" min="0" step="0.1"
                :style="{ width: `${lineHeight.toString().length}ch` }" /><select id="lineHeightUnit"
                name="lineHeightUnit" v-model="lineHeightUnit">
                <option value="em">em</option>
                <option value="px">px</option>
            </select><br>
            <label for="letterSpacing" class="mr-2">Letter Spacing:</label>
            <input type="number" id="letterSpacing" name="letterSpacing" v-model="letterSpacing" min="0" step="0.1"
                :style="{ width: `${letterSpacing.toString().length}ch` }" />px<br>
            <label for="opacity" class="mr-2">Opacity:</label>
            <input type="number" id="opacity" name="opacity" v-model="opacity" min="0" max="1" step="0.05"
                :style="{ width: `${opacity.toString().length}ch` }" /><br>
            <label for="content" class="mr-2">Content:</label><br>
            <textarea id="content" name="content" class="w-full" v-model="content"
                :style="{ fontFamily: font }"></textarea><br>
            <input type="submit" value="Print" @click="print" />
        </form>
        <h2>Preview</h2>
        <hr>
        <div id="preview" :style="{ fontFamily, fontSize: `${fontSize}${fontUnit}` }">
            <div class="title">{{ title }}</div>
            <div class="content"
                :style="{ opacity, letterSpacing: `${letterSpacing}px`, lineHeight: `${lineHeight}${lineHeightUnit}` }">
                <span v-for="(line, index) in contentElements" :key="index">
                    {{ line }}<br>
                </span>
            </div>
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
            title: 'Handwriting Worksheet',
            fontFamily: 'Century Gothic',
            fontSize: 36,
            fontUnit: 'pt',
            lineHeight: 1.5,
            lineHeightUnit: 'em',
            opacity: 0.15,
            letterSpacing: 1,
            content: `AaBbCcDdEeFfGgHhIiJj
KkLlMmNnOoPpQqRrSsTt
UuVvWwXxYyZz`,
        };
    },
    computed: {
        contentElements() {
            return this.content.split(/[\r\n]+/g);
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
<style>
#root input[type="text"],
#root input[type="number"],
#root select {
    border-width: 2px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

#root textarea {
    border-width: 2px;
    border-style: solid;
    padding: 0.5em;
}

#root input[type="number"] {
    width: auto;
    box-sizing: content-box;
}

#root input[type="text"]:focus,
#root input[type="number"]:focus,
#root select:focus {
    outline: #007bff solid 2px;
}

#root input[type="submit"] {
    margin-top: 10px;
    color: white;
    background-color: #007bff;
    padding: 5px 10px;
    line-height: 1.1;
    border-radius: 0.25rem;
    cursor: pointer;
}

#root input[type="submit"]:hover {
    background-color: #0056b3;
}

#preview {
    border: 1px solid;
    width: 8.5in;
    height: 11in;
    margin: 0 auto;
    padding: 0.8in 1in;
    overflow-wrap: break-word;
}

#preview .title {
    font-size: 24pt;
    text-align: center;
    line-height: 0.75;
    margin-bottom: 0.5in;
}

#preview .content {
    word-wrap: break-word;
}

@media print {
    body * {
        display: none;
        padding: 0;
        margin: 0;
    }

    body>#app,
    body>#app>main,
    body>#app>main>.vp-doc,
    body>#app>main>.vp-doc>div,
    body>#app>main>.vp-doc>div>div,
    body>#app>main>.vp-doc>div>div>#main,
    body>#app>main>.vp-doc>div>div>#main>#root {
        display: inline-block;
    }

    body #preview,
    body #preview * {
        display: block;
    }

    body #preview {
        border: 0 none;
        color: #000;
        padding: 0;
        margin: 0.4in 0.45in;
        width: auto;
        height: auto;
    }

    #preview .title {
        margin-bottom: 0.5in;
    }
}
</style>
