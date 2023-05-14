<template>
  <v-form>
    <v-textarea
      label="Enter your text"
      v-model="generatorStore.content"
    ></v-textarea>

    <v-select
      label="Select extension"
      v-model="generatorStore.extension"
      :items="extensions"
    ></v-select>

    <v-slider
      label="Width"
      v-model="width"
      :min="sizeMinMax[0]"
      :max="sizeMinMax[1]"
      step="1"
    >
      <template v-slot:append>
        <v-text-field
          v-model="width"
          type="number"
          style="width: 90px"
          density="compact"
          hide-details
          variant="outlined"
        ></v-text-field>
      </template>
    </v-slider>

    <v-slider
      label="Height"
      v-model="height"
      :min="sizeMinMax[0]"
      :max="sizeMinMax[1]"
      step="1"
    >
      <template v-slot:append>
        <v-text-field
          v-model="height"
          type="number"
          style="width: 90px"
          density="compact"
          hide-details
          variant="outlined"
        ></v-text-field>
      </template>
    </v-slider>
  </v-form>
</template>

<script lang="ts">
  import { mapStores } from 'pinia'
  import { defineComponent } from 'vue'
  import { useGeneratorStore } from '@/stores/generator'
  import settings from '@/data/settings'
  import _ from 'lodash'

  export default defineComponent({
    name: 'SettingsFields',

    data() {
      return {
        extensions: settings.extensions,
        sizeMinMax: settings.sizeMinMax
      }
    },

    computed: {
      ...mapStores(useGeneratorStore),

      width: {
        get() {
          return this.generatorStore.width
        },
        set(value: number) {
          if (value > this.sizeMinMax[1]) value = this.sizeMinMax[1]
          if (value < this.sizeMinMax[0]) value = this.sizeMinMax[0]
          this.generatorStore.width = value
        }
      },

      height: {
        get() {
          return this.generatorStore.height
        },
        set(value: number) {
          if (value > this.sizeMinMax[1]) value = this.sizeMinMax[1]
          if (value < this.sizeMinMax[0]) value = this.sizeMinMax[0]
          this.generatorStore.height = value
        }
      }
    }
  })
</script>
