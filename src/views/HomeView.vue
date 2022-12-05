<template>
  <q-page padding class="home">
    <div class="q-mb-lg">
      <h1 class="text-h6 q-pb-none q-my-none text-weight-bold">Discover</h1>
      <p class="q-py-none q-my-none text-grey flex content-end">
        <q-icon name="local_fire_department" size="xs"></q-icon>
        <span> Manila, Philippines </span>
      </p>
    </div>
    <div class="nearby-dogs-container">
      <template v-for="(dog, index) in dogs" :key="index">
        <NearbyDogCard
          :data="dog"
          @hideCard="onHide"
          @swipe="onSwipe"
          :index="index"
        />
      </template>
    </div>
  </q-page>
</template>

<script setup>
import NearbyDogCard from '@/components/NearbyDogCard.vue';
import { ref } from 'vue';

let dogs = ref([
  {
    id: 1,
    name: 'Clay',
    age: 14,
    distance: '1km Away',
  },
  {
    id: 2,
    name: 'Latte',
    age: 11,
    distance: '750meters Away',
  },
  {
    id: 3,
    name: 'Matchi',
    age: 9,
    distance: '2km Away',
  },
  {
    id: 4,
    name: 'Clay',
    age: 14,
    distance: '1km Away',
  },
  {
    id: 5,
    name: 'Latte',
    age: 11,
    distance: '750meters Away',
  },
  {
    id: 6,
    name: 'Matchi',
    age: 9,
    distance: '2km Away',
  },
]);

const onSwipe = (direction) => {
  console.log(direction);
};
const onHide = (data) => {
  dogs.value = dogs.value.filter((dog) => dog.id !== data.id);
};
</script>

<style scoped lang="scss">
.home {
  overflow: hidden;
}

.nearby-dogs-container {
  height: 70vh;
  position: relative;
}
</style>
