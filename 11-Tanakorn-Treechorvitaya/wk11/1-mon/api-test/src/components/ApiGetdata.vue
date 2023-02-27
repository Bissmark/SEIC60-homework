<template>
    <div>
        <button @click="fetchEmoji">Fetch Emoji</button>
        <button @click="clearEmoji">Clear Emojis</button>
        <p v-for="(emoji, i) in emojis" :key="i">{{ emoji }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RandomEmoji',
    data: function () {
        return {
            emojis: []
        };
    },
    methods: {
        fetchEmoji: async function () {
            const {data} = await axios.get('https://emojihub.yurace.pro/api/random');
            console.log(data);
            this.emojis.push(data.htmlCode[0]);
        },
        clearEmoji: function() {
            this.emojis = [];
        }
    }
}
</script>