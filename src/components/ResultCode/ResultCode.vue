<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-center">
      <v-img
        class="mx-auto"
        height="300"
        max-width="500"
        :src="preview"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
    </div>

    <v-btn
      :disabled="!result"
      class="mt-3"
      color="primary"
      :href="result"
      download
      size="x-large"
    >
      Download
    </v-btn>
  </div>
</template>

<script setup lang="ts">
  import { useGeneratorStore } from '@/stores/generator'
  import { computed, ref, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import _ from 'lodash'

  const generatorStore = useGeneratorStore()
  const { generateCode, generateCodePreview } = storeToRefs(generatorStore)

  const preview = ref(generateCodePreview.value)
  const result = computed(() => generateCode.value)

  const setPreview = _.debounce((value: string) => {
    preview.value = value
  }, 500)

  watch(generateCodePreview, (value) => {
    setPreview(value)
  })
</script>
