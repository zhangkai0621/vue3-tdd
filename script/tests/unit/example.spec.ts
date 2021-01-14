import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// 传入一个 url ，检查 url 是否正确
describe('HelloWorld.vue', () => {
  it('传入 url 是否渲染为 a 标签', () => {
    const url = 'test content'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { url }
    })
    expect(wrapper.find('a').text()).toMatch(url)
  })
})


