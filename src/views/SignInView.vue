<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="sign-in">
        <div
          class="row flex justify-center content-center"
          style="height: 100%"
        >
          <div class="col-xs-10 col-md-10 col-lg-8 col-xl-6">
            <div class="q-mb-xl flex justify-center content-center">
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
            <div class="q-mb-sm">
              <q-form greedy class="q-gutter-md">
                <q-input
                  color="white"
                  dark
                  placeholder="Username or Email"
                  outlined
                  filled
                />
                <q-input
                  color="white"
                  dark
                  placeholder="Password"
                  outlined
                  filled
                  type="password"
                />
                <div>
                  <q-btn
                    class="full-width text-black text-capitalize"
                    color="white"
                    unelevated
                    label="Sign In"
                    size="md"
                    :to="{ name: 'Home View' }"
                  />
                </div>
              </q-form>
            </div>
            <div class="text-center q-my-lg">
              <p class="text-caption text-white q-my-none text-italic">
                OR SIGN IN WITH
              </p>
            </div>
            <div class="q-gutter-md q-mt-xs">
              <div>
                <q-btn
                  class="facebook-button full-width"
                  glossy
                  unelevated
                  label="Facebook"
                  icon="facebook"
                  :to="{ name: 'Home View' }"
                />
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
@import '@/quasar-variables.sass';

.sign-in {
  background-color: $primary;
  height: 100vh;

  .facebook-button {
    background-color: #4064ac;
    color: white;
  }

  .google-button {
    background-color: #d54831;
    color: white;
  }
}
</style>
