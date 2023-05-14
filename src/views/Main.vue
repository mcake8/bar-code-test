<template>
  <v-main class="page">
    <h1 class="text-h4 mb-3">Let's make a QR</h1>
    <v-sheet elevation="1">
      <v-container >
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="6"
          >
            <settings-fields />
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="6"
          >
            <result-code />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-main>
</template>

<script setup lang="ts">
  import SettingsFields from '@/components/SettingsFields.vue'
  import ResultCode from '@/components/ResultCode/ResultCode.vue'
</script>


<style scoped>
  .page {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>