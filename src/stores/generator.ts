import { defineStore } from 'pinia'
import queryString from 'query-string'
import settings from '@/data/settings'
import _ from 'lodash'

export interface generatorState {
  extension: (typeof settings.extensions)[number]
  content: string | null
  barcodeType: string
  width: number
  height: number
}

function generateCodeUrl(data: generatorState): string {
  const payload = {
    content: data.content,
    barcodeType: data.barcodeType,
    width: data.width,
    height: data.height
  }

  const query = queryString.stringify(payload)

  return `/barcode/embed/image.${data.extension || 'SVG'}?${query}`
}

export const useGeneratorStore = defineStore('generator', {
  state: (): generatorState => ({
    extension: settings.extensions[0],
    content: '',
    barcodeType: 'QR',
    width: _.floor(_.mean(settings.sizeMinMax)),
    height: _.floor(_.mean(settings.sizeMinMax))
  }),

  getters: {
    generateCodePreview(state): string {
      if (!state.content) return ''
      const payload = {
        ...state,
        extension: 'SVG',
        width: 100,
        height: 100
      }

      return generateCodeUrl(payload)
    },

    generateCode(state): string {
      if (!state.content) return ''

      return generateCodeUrl(state)
    }
  }
})