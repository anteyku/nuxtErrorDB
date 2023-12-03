<template>
    <input v-model="value" :type="type || `text`">
    {{ errorMessage }}
</template>

<script setup>
    import { useField } from 'vee-validate';

    let props = defineProps({
        name: String,
        type: String
    })

    let { value, errorMessage } = useField(()=>{
        return props.name
    })
</script>