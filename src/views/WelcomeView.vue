<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="welcome">
        <div
          class="row flex justify-center content-center"
          style="height: 100%"
        >
          <div class="col-xs-10 col-md-10 col-lg-8 col-xl-6">
            <div class="flex justify-center content-center">
              <q-icon
                class="q-mr-xs"
                color="white"
                name="pets"
                size="lg"
              ></q-icon>
              <h1 class="text-h4 text-weight-bold q-my-none text-white">
                tindogs
              </h1>
            </div>

            <div class="q-my-xl text-center">
              <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div class="q-py-xl">
              <div class="q-gutter-md">
                <div>
                  <q-btn
                    color="white"
                    rounded
                    size="lg"
                    class="full-width text-black text-capitalize"
                    unelevated
                    :to="{ name: 'Sign In View' }"
                    >Sign In</q-btn
                  >
                </div>
                <div>
                  <q-btn
                    color="white"
                    outline
                    rounded
                    size="lg"
                    class="full-width text-white text-capitalize"
                    unelevated
                    >Register</q-btn
                  >
                </div>
              </div>
            </div>
            <div class="text-center q-my-lg">
              <p class="text-caption text-white q-my-none text-italic">
                © 2022 tindogs.com. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped lang="scss">
@import '@/quasar-variables.sass';

.welcome {
  background-color: $primary;
  height: 100vh;
}
</style>
