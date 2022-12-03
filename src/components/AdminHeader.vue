<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="bg-orange-300 p-3">
        <div class="grid grid-flow-col justify-between">
            <div>
                <input class="hidden md:block" type="text">
                <Icon class="md:hidden text-2xl" icon="mdi:magnify" />
            </div>
            <div class="flex space-x-3">
                <router-link :to="{ name: 'dashboard' }">
                    <Icon class="text-2xl" icon="mdi:bell" />
                </router-link>
                <router-link :to="{ name: 'dashboard' }">
                    <Icon class="text-2xl" icon="mdi:email" />
                </router-link>
                <div class="flex justify-center items-center">
                    <img class="h-6 mx-2 border-2 rounded-full" src="@/assets/sample-img.png">
                    <p class="font-semibold">Admin</p>
                    <Icon class="text-2xl" icon="mdi:chevron-down" />
                </div>
                <Icon class="text-2xl cursor-pointer" icon="mdi:menu" @click="toggleNav()"/>
            </div>
        </div>
    </div>
</template>