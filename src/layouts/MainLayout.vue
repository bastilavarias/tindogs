<template>
  <q-layout class="main-layout" view="hHh lpR fFf" s>
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" />

        <q-toolbar-title class="flex justify-center content-center">
          <div class="flex content-center">
            <q-icon class="q-mr-xs" name="pets"></q-icon
            ><strong class="q-my-none">tindogs</strong>
          </div>
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          icon="account_circle"
          :to="{ name: 'Profile View' }"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <RouterView />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-toolbar class="flex justify-around">
        <template v-for="(navigation, index) in navigations" :key="index">
          <q-btn flat :to="navigation.to">
            <q-icon :name="navigation.icon" />
          </q-btn>
        </template>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const navigations = ref([
  { icon: 'chat_bubble', to: { name: 'Message View' } },
  { icon: 'pets', to: { name: 'Home View' } },
  { icon: 'favorite', to: { name: 'Favorite View' } },
]);
</script>
