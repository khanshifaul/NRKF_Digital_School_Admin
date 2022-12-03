<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <aside v-if="(mobile = !show)" class="bg-blue-300 hidden md:grid grid-rows-[auto_1fr] h-full">
        <div class="py-3 px-6 bg-green-300">AdminSideNav</div>
        <div class="font-semibold">
            <div class="grid border-b-2 px-6 py-2">
                <div class="text-xs uppercase py-2">Navigations</div>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Dashboard
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:tablet-dashboard" />Layouts
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:email" />Mailbox
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Ecommerce
                </router-link>
            </div>
            <div class="grid border-b-2 px-6 py-2">
                <div class="text-xs uppercase py-2">Apps</div>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Calender
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Messenger
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Contacts
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />File Manager
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />To-Do
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />News Feed
                </router-link>
            </div>
            <div class="grid border-b-2 px-6 py-2">
                <div class="text-xs uppercase py-2">Pages</div>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />About
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Academic
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Admission
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Student
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Teacher
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Facilities
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Notices
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Contact
                </router-link>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Help
                </router-link>
            </div>
            <div class="grid border-b-2 px-6 py-2">
                <div class="text-xs uppercase py-2">User Interface</div>
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Dashboard
                </router-link>
            </div>
            <div class="grid px-6 py-2">
                <router-link class="flex flex-nowrap items-center text-lg" :to="{ name: 'dashboard' }">
                    <Icon icon="mdi:view-dashboard" />Logout
                </router-link>
            </div>
        </div>
    </aside>
</template>