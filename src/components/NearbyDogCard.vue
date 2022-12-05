<template>
  <div
    class="draggable"
    ref="draggableElement"
    :class="{
      isAnimating: isInteractAnimating,
    }"
    :style="{ transform: transformClass }"
  >
    <q-card class="card flex column justify-between" bordered flat>
      <div class="card__image">
        <q-img
          :src="displayPicture"
          position="center"
          fit="cover"
          width="100%"
          height="100%"
        ></q-img>
        <div class="details flex content-end">
          <div class="q-pb-md q-pl-md text-white" style="line-height: 0.8rem">
            <h6 class="text-h6 text-weight-bold q-my-none q-pb-none">
              {{ data.name }}, {{ data.age }}
            </h6>
            <p class="q-my-none q-pb-none">{{ data.distance }}</p>
          </div>
        </div>
      </div>

      <q-carousel
        class="card__gallery rounded-borders"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        v-model="slide"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              height="100%"
              :src="dog2Image"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              height="100%"
              :src="dog3Image"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>

      <q-card-actions class="card__actions flex justify-center content-center">
        <q-btn round color="negative" flat icon="close" />
        <q-btn round color="primary" glossy size="lg" icon="pets" />
        <q-btn round color="pink" icon="favorite" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import {
  computed,
  onMounted,
  ref,
  onBeforeUnmount,
  defineProps,
  defineEmits,
} from 'vue';
import interact from 'interactjs';
import dog2Image from '@/assets/images/samples/pug2.jpg';
import dog3Image from '@/assets/images/samples/pug3.jpg';

const SWIPE_RIGHT = 'swipe-right';
const SWIPE_LEFT = 'swipe-left';
const SWIPE_DOWN = 'swipe-down';
const interactYThreshold = 150;
const interactXThreshold = 100;
const interactMaxRotation = 15;
const interactOutOfSightXCoordinate = 500;
const interactOutOfSightYCoordinate = 600;

const props = defineProps({
  index: Number,
  data: Object,
});

const emit = defineEmits(['swipe', 'hideCard']);

const slide = ref(1);
const draggableElement = ref(null);
let screenX = ref(0);
let screenY = ref(0);
let screenRotation = ref(0);
let isInteractAnimating = ref(false);
let isInteractDragged = ref(null);

const transformClass = computed(() => {
  if (!isInteractAnimating.value || isInteractDragged.value) {
    return `translate3D(${screenX.value}px, ${screenY.value}px, 0) rotate(${screenRotation.value}deg)`;
  }
  return null;
});

const displayPicture = new URL(
  `/src/assets/images/samples/pug${props.data.id}.jpg`,
  import.meta.url
).toString();

const setInteractValues = (coordinates) => {
  const { x, y, rotation } = coordinates;
  screenX.value = x || 0;
  screenY.value = y || 0;
  screenRotation.value = rotation || 0;
};

const onStart = () => {
  isInteractAnimating.value = false;
};

const onMove = (event) => {
  const x = screenX.value + event.dx;
  const y = screenY.value + event.dy;
  let rotation = interactMaxRotation * (x / interactXThreshold);
  if (rotation > interactMaxRotation) {
    rotation = interactMaxRotation;
  } else if (rotation < -interactMaxRotation) {
    rotation = -interactMaxRotation;
  }

  setInteractValues({ x, y, rotation });
};

const onEnd = () => {
  isInteractAnimating.value = true;
  if (screenX.value > interactXThreshold) {
    swipeAction(SWIPE_RIGHT);
  } else if (screenX.value < -interactXThreshold) {
    swipeAction(SWIPE_LEFT);
  } else if (screenY.value > interactYThreshold) {
    swipeAction(SWIPE_DOWN);
  } else {
    resetCardPosition();
  }
};

const resetCardPosition = () => {
  setInteractValues({ x: 0, y: 0, rotation: 0 });
};

const initInteractJS = (selector) => {
  interact(selector).draggable({
    onstart: onStart,
    onmove: onMove,
    onend: onEnd,
  });
};

const swipeAction = (interaction) => {
  stopDraggableElementEvents();
  switch (interaction) {
    case SWIPE_RIGHT:
      setInteractValues({
        x: interactOutOfSightXCoordinate,
        rotation: interactMaxRotation,
      });
      emit('swipe', SWIPE_RIGHT);
      break;
    case SWIPE_LEFT:
      setInteractValues({
        x: -interactOutOfSightXCoordinate,
        rotation: -interactMaxRotation,
      });
      emit('swipe', SWIPE_LEFT);
      break;
    case SWIPE_DOWN:
      setInteractValues({
        y: interactOutOfSightYCoordinate,
      });
      emit('swipe', SWIPE_DOWN);
      break;
  }

  hideCard();
};

const hideCard = () => {
  setTimeout(() => {
    emit('hideCard', props.data);
  }, 300);
};

const stopDraggableElementEvents = () => {
  interact(draggableElement).unset();
  isInteractDragged.value = true;
};

onMounted(() => {
  initInteractJS(draggableElement.value);
});

onBeforeUnmount(() => {
  interact(draggableElement).unset();
});
</script>

<style scoped lang="scss">
.draggable {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.card {
  height: 100%;
  overflow: hidden;
  position: relative;

  &__image {
    height: 50%;
    position: relative;

    .details {
      box-shadow: 0px -50px 40px -20px rgba(0, 0, 0, 0.75) inset;
      -webkit-box-shadow: 0px -50px 40px -20px rgba(0, 0, 0, 0.75) inset;
      -moz-box-shadow: 0px -50px 40px -20px rgba(0, 0, 0, 0.75) inset;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__gallery {
    height: 30%;
  }

  &__actions {
    height: 20%;
  }
}

.isAnimating {
  transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
