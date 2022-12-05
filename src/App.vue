<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import { SplashScreen } from '@capacitor/splash-screen';
import { onMounted } from 'vue';

onMounted(async () => {
  await SplashScreen.show({
    showDuration: 2000,
    autoHide: false,
  });
});
</script>
