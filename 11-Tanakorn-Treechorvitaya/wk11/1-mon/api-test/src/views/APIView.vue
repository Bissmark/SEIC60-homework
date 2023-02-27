<template>
    <div>
        <h1>Random Emoji</h1>
        <ApiGetdata />
    </div>
</template>

<style scoped>

</style>

<script>
import ApiGetdata from '@/components/ApiGetdata.vue'

export default {
    components : {
        ApiGetdata: ApiGetdata
    }
}
</script>
