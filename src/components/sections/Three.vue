<script setup>
function scrollTop() {
    document.getElementById("landing")
        .scrollIntoView({ behavior: "smooth" })
}
</script>

<template>

<section id="three" class="bg-zinc-900 h-screen flex">

<div class="">
    <div class="absolute flex w-full animate-bounce">
        <svg @click="scrollTop()" class="w-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
        </svg>
    </div>
</div>

</section>

</template>
