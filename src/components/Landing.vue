<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis"
import worldMapUrl from "../assets/world-map.svg"
import logoRaw from "../assets/logo.svg?raw"


function scrollToNext() {
    const next = document.getElementById("contact")
    next.scrollIntoView({ behavior: "smooth" })
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
    <Transition
        name="fade"
        appear
        :duration="{ enter: 500, leave: 200, delay: 200 }"
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
    >
        <div class="my-auto mx-auto z-10 text-white lg:inline-flex lg:gap-6">
            <div class="w-24 xl:w-32 text-white drop-shadow-[0_0_10px_#ffffff]" v-html="logoRaw"></div>
            <p id="heading" class="
                my-auto font-extrabold selection:bg-emerald-500 drop-shadow-[0_0_10px_#ffffff] shadow-emerald-500 text-white
                text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            ">
                KAAN&nbsp;GROUP <span class="tracking-tighter">s.r.o.</span>
            </p>
        </div>
    </Transition>
</KinesisContainer>

<div class="absolute bottom-10 flex w-full animate-bounce">
    <svg @click="scrollToNext()" class="w-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
    </svg>
</div>

</section>

</template>
