import Vue from 'vue';
import FilterSelector from '@/components/FilterSelector';
import { shallow } from 'vue-test-utils';

describe('FilterSelector.vue', () => {
  let wrapper;
  let vm;

  beforeEach(() => {
    wrapper = shallow(FilterSelector);
    vm = wrapper.vm;
  });

  it('renders itself', () => {
    expect(wrapper.name())
      .to.equal('filter-selector');
  });

  it('initializes the selected data to -1', () => {
    const defaultData = FilterSelector.data();
    expect(defaultData.selected).to.equals(-1);
  });

  it('renders the filter container', () => {
    expect(wrapper.find('div.filter-container'))
    .to.exist;
    expect(wrapper.find('div.filter-list'))
    .to.exist;
  });

  it('renders the filter items in "li" items', () => {
    const Constructor = Vue.extend(FilterSelector);
    vm = new Constructor({
      propsData: {
        filters: [
          {
            id: 0,
            name: 'Testing 0...',
          },
          {
            id: 1,
            name: 'Testing 1...',
          },
        ],
      },
    }).$mount();

    const els = Array.from(vm.$el.querySelectorAll('li.filter-item'));

    els.forEach((el, i) => {
      expect(el.innerHTML.trim())
      .to.equal(`Testing ${i}...`);
    });
  });
});
