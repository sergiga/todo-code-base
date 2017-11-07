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

  it('initializes the selected data to 0', () => {
    const defaultData = FilterSelector.data();
    expect(defaultData.selected).to.equals(0);
  });

  it('renders the filter container', () => {
    expect(wrapper.find('div.filter-container'))
    .to.exist;
    expect(wrapper.find('div.filter-list'))
    .to.exist;
  });

  it('renders the filter items in "li" items', () => {
    wrapper.setProps({
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
    });

    const els = wrapper.findAll('li.filter-item');

    expect(els).to.exist;
    expect(els.length).to.equal(2);

    els.wrappers.forEach((el, i) => {
      expect(el.text().trim())
      .to.equal(`Testing ${i}...`);
    });
  });

  it('should emit filterSelected with the selected item id on item click', (done) => {
    wrapper.setProps({
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
    });

    vm.$on('filterSelected', (val) => {
      expect(val).to.equal(0);
      done();
    });

    const item = wrapper.find('li.filter-item');
    item.trigger('click');
  });

  it('adds \'selected\' class to the selected item', () => {
    wrapper.setProps({
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
    });

    wrapper.setData({
      selected: 0,
    });

    const item = wrapper.find('li.filter-item.selected');
    expect(item).to.exist;
    expect(item.text().trim()).to.equal('Testing 0...');
  });
});
