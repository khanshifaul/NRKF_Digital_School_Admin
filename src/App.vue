<script setup>
import { RouterView } from 'vue-router';
import AdminHeaderVue from '@/components/AdminHeader.vue';
import AdminSideNavVue from '@/components/AdminSideNav.vue';
</script>

<template>
  <AdminSideNavVue />
  <div class="grid grid-rows-[auto_1fr]">
    <AdminHeaderVue />
    <main>
      <RouterView />
    </main>
  </div>
</template>
