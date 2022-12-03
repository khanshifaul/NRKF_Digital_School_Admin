<script setup>
import { Icon } from '@iconify/vue';
import YearChartVue from './YearChart.vue';
</script>

<template>
    <div class="p-3 grid grid-cols-2 gap-3">
        <div class="flex flex-col space-y-3">
            <div class="grid grid-flow-row gap-3">
                <div class="grid grid-flow-col gap-3">
                    <div
                        class="grid grid-flow-col gap-3 justify-around items-center p-2 rounded bg-pink-400 text-white shadow-md shadow-slate-400">
                        <Icon class="text-3xl border-2 rounded-full" icon="mdi:account-school" />
                        <div class="grid">
                            <h3 class="text-lg font-bold">400</h3>
                            <h2 class="text-md font-semibold">Students</h2>
                        </div>
                    </div>
                    <div
                        class="grid grid-flow-col gap-3 justify-around items-center p-2 rounded bg-pink-400 text-white shadow-md shadow-slate-400">
                        <Icon class="text-3xl border-2 rounded-full" icon="mdi:human-male-board" />
                        <div class="grid">
                            <h3 class="text-lg font-bold">20</h3>
                            <h2 class="text-md font-semibold">Teachers</h2>
                        </div>
                    </div>
                </div>
                <div class="grid grid-flow-col gap-3">
                    <div
                        class="grid grid-flow-col gap-3 justify-around items-center p-2 rounded bg-pink-400 text-white shadow-md shadow-slate-400">
                        <Icon class="text-3xl border-2 rounded-full" icon="mdi:school" />
                        <div class="grid">
                            <h3 class="text-lg font-bold">400</h3>
                            <h2 class="text-md font-semibold">Attendence</h2>
                        </div>
                    </div>
                    <div
                        class="grid grid-flow-col gap-3 justify-around items-center p-2 rounded bg-pink-400 text-white shadow-md shadow-slate-400">
                        <Icon class="text-3xl border-2 rounded-full" icon="mdi:school" />
                        <div class="grid">
                            <h3 class="text-lg font-bold">400</h3>
                            <h2 class="text-md font-semibold">Attendence</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-2 rounded bg-pink-100 text-black shadow-md shadow-slate-400">
                Add Teacher
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <div class="p-2 rounded bg-pink-100 text-black shadow-md shadow-slate-400">
                <YearChartVue />
            </div>
            <div class="p-2 rounded bg-pink-100 text-black shadow-md shadow-slate-400">
                <v-date-picker v-model="date" is-expanded />
            </div>
        </div>
    </div>
</template>