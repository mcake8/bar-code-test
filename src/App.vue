<template>
  <v-app>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  onBeforeMount(() => {
    let defaultTheme = 'light'

    if (window?.matchMedia('(prefers-color-scheme: dark)')) {
      defaultTheme = 'dark'
    }

    theme.global.name.value = defaultTheme
  })
</script>
