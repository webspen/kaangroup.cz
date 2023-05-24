<script setup>
import { ref } from "vue"


const copied = ref(false)
const ICO = "17945241"


function execCopy() {
    navigator.clipboard.writeText(ICO)
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2500)
}
</script>

<template>

<section id="contact" class="h-screen flex">

<div class="text-xl xl:text-3xl mx-auto my-auto bg-zinc-900 bg-opacity-80 p-5 rounded-sm">
    <p class="text-lg xl:text-2xl text-gray-300">IČO</p>
    <div class="inline-flex gap-3">
        <p v-text="ICO"></p>
        <Transition
            name="opacity"
            mode="out-in"
            enter-active-class="duration-200 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
        >
            <svg key="copy0" v-if="!copied" @click="execCopy()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 xl:w-8 my-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
            </svg>
            <svg key="copy1" v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 xl:w-8 my-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </Transition>
    </div>

    <p class="pt-5 text-lg xl:text-2xl text-gray-300">Adresa</p>
    <p class="pb-5">
        Radniční 133/1<br />
        České Budějovice 1<br />
        370 01 České Budějovice
    </p>

    <p class="text-lg xl:text-2xl text-gray-300">Spisová značka</p>
    <p>C 32861 vedená u Krajského soudu v Českých Budějovicích</p>
</div>

</section>

</template>
