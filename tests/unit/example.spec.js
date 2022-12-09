import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Post from '@/components/Post.vue'


describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Post.vue', () => {
  it('renders default title when title not recived!', () => {
    // const title = 'My Title';
    const desc = 'Old Descriptoin'
    const wrapper = shallowMount(Post, {
      props: {  desc }
    })
    expect(wrapper.text()).toMatch('NoTitle!')
  })

  it('renders default title when title recived!', () => {
    const comp = shallowMount(Post);
    const title = comp.find('p').element.textContent;

    expect(title).toMatch('NoTitle')
  })
})
