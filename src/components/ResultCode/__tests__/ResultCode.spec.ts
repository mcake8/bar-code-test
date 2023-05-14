import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import ResultCode from '@/components/ResultCode/ResultCode.vue'
import { useGeneratorStore } from '@/stores/generator'
import settings from '@/data/settings'
import _ from 'lodash'

class ResizeObserver {
  observe() {}
  unobserve() {}
}

describe('ResultCode', () => {
  window.ResizeObserver = ResizeObserver

  const mountFunction = (options?: any) => {
    return mount(ResultCode, {
      ...options,
      global: {
        plugins: [createTestingPinia(), createVuetify({ components, directives })]
      }
    })
  }

  it('renders correctly', () => {
    const wrapper = mountFunction()
    expect(wrapper.exists()).toBe(true)
  })

  it('correct download link', async () => {
    const wrapper = mountFunction()
    const store = useGeneratorStore()
    
    store.content = 'test'
    store.width = _.random(settings.sizeMinMax[0], settings.sizeMinMax[1])
    store.height = _.random(settings.sizeMinMax[0], settings.sizeMinMax[1])

    const width = store.width
    const height = store.height
    
    await new Promise((resolve) => setTimeout(resolve, 600))

    const downloadButton = wrapper.find('a.v-btn')
    expect(downloadButton.exists()).toBe(true)

    expect(downloadButton.attributes('href')).toBe(
      `/barcode/embed/image.PNG?barcodeType=QR&content=test&height=${height}&width=${width}`
    )
  })

  it('correct preview', async () => {
    const wrapper = mountFunction()
    const store = useGeneratorStore()
    store.content = 'test'
    await new Promise((resolve) => setTimeout(resolve, 600))
    const previewImage = wrapper.find('img')
    expect(previewImage.exists()).toBe(true)

    expect(previewImage.attributes('src')).toBe(
      '/barcode/embed/image.SVG?barcodeType=QR&content=test&height=100&width=100'
    )
  })
})
