<template>
    <div id="overflow-root" class="overflow-auto">
        <div id="root" class="inline-block border mx-auto box-content">
            <form id="form" class="mb-2 border-b flex">
                <div class="border-r p-2">
                    <label for="fontSize" class="mr-2">Size:</label>
                    <input type="number" id="fontSize" name="fontSize" v-model="fontSize" class="w-auto box-content"
                        :style="{
                            width: `${fontSize.toString().length}ch`,
                        }" />
                    <select id="fontUnit" name="fontUnit" v-model="fontUnit">
                        <option value="px">px</option>
                        <option value="pt">pt</option>
                    </select>
                    /
                    <input type="number" id="lineHeight" name="lineHeight" v-model="lineHeight" min="0" step="0.1"
                        class="w-auto box-content" :style="{ width: `${lineHeight.toString().length}ch` }" /><select
                        id="lineHeightUnit" name="lineHeightUnit" v-model="lineHeightUnit">
                        <option value="em">em</option>
                        <option value="px">px</option>
                    </select>
                </div>
                <div class="border-r p-2">
                    <label for="letterSpacing" class="mr-2">Kerning:</label>
                    <input type="number" id="letterSpacing" name="letterSpacing" v-model="letterSpacing" min="0"
                        step="0.1" class="w-auto box-content"
                        :style="{ width: `${letterSpacing.toString().length}ch` }" />px
                </div>
                <div class="border-r p-2">
                    <label for="opacity" class="mr-2">Fade:</label>
                    <input type="number" id="opacity" name="opacity" v-model="opacity" min="0" max="1" step="0.05"
                        class="w-auto box-content" :style="{ width: `${opacity.toString().length}ch` }" />
                </div>
                <div class="border-r p-2">
                    <input type="submit" value="Print" @click="print" />
                </div>
            </form>
            <div id="preview" class="text-center break-words"
                :style="{ fontFamily, fontSize: `${fontSize}${fontUnit}` }">
                <div class="title text-center inline-block" contenteditable>Today's Practice</div>
                <div class="content" contenteditable
                    :style="{ opacity, letterSpacing: `${letterSpacing}px`, lineHeight: `${lineHeight}${lineHeightUnit}` }">
                    <span v-for="(line, index) in contentElements" :key="index">
                        {{ line }}<br>
                    </span>
                </div>
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
            fontFamily: 'ABeeZee',
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
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');

#root input[type="number"],
#root select {
    border-width: 2px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

#root input[type="number"]:focus,
#root select:focus {
    outline: #007bff solid 2px;
}

#root input[type="submit"] {
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

#root {
    width: 8.5in;
}

#preview {
    width: 8.5in;
    height: 11in;
    padding: 0.8in 0.8in;
}

#preview .title {
    font-size: 24pt;
    margin-bottom: 0.5in;
    display: inline-block;
}

#preview .content {
    word-wrap: break-word;
    text-align: left;
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
    body>#app>main>.vp-doc>div>div>#main>#overflow-root,
    body>#app>main>.vp-doc>div>div>#main>#overflow-root>#root {
        display: inline-block;
    }

    body>#app>main>.vp-doc>div>div>#main>#overflow-root>#root>#form {
        display: none;
    }

    body #preview,
    body #preview * {
        display: block;
    }

    body #root {
        border: 0 none;
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
