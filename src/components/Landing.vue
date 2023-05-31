<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis"
import worldMapUrl from "../assets/world-map.svg"
import logoRaw from "../assets/logo.svg?raw"


function scrollNext() {
    document.getElementById("contact")
        .scrollIntoView({ behavior: "smooth" })
}
</script>

<template>

<section id="landing" class="bg-zinc-900 h-screen flex">

<KinesisContainer class="w-full flex overflow-hidden">
    <KinesisElement :strength="10" class="absolute">
        <div class="blur opacity-70">
            <img :src="worldMapUrl" alt="World map" class="z-0 h-screen w-screen object-cover" />
        </div>
    </KinesisElement>

    <div class="my-auto mx-auto z-10 text-white lg:flex lg:flex-wrap lg:gap-6">
        <div class="mx-auto lg:inline-flex lg:gap-8">
            <div class="pb-6 my-auto lg:pb-0 mx-auto w-24 xl:w-32 text-white drop-shadow-[0_0_10px_#ffffff]" v-html="logoRaw"></div>
            <p id="heading" class="
                my-auto text-center font-extrabold selection:bg-emerald-500 drop-shadow-[0_0_10px_#ffffff] shadow-emerald-500 text-white
                text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            ">
                KAAN&nbsp;<span class="xl:uppercase">Group</span> <span class="tracking-tighter">s.r.o.</span>
            </p>
        </div>
        <p class="
            my-auto md:pt-4 text-center font-extrabold selection:bg-emerald-500 drop-shadow-[0_0_10px_#ffffff] shadow-emerald-500 text-white
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full
        ">
            Realitní činnost, stavební práce
        </p>
    </div>
</KinesisContainer>

<div class="absolute flex w-full animate-bounce bottom-0">
    <svg @click="scrollNext()" class="w-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
    </svg>
</div>

</section>

</template>
