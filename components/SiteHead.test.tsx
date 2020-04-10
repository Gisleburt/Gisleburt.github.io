import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SiteHead from './SiteHead';

describe('SiteHead', () => {
  it('should have a title', () => {
    const wrapper = shallow(<SiteHead title="site title" />);
    expect(wrapper.find('title').text()).to.equal('site title');
  });

  it('should have a favicon', () => {
    const wrapper = shallow(<SiteHead title="site title" />);
    expect(wrapper.find('link[rel="icon"]')).to.have.length.greaterThan(0);
  });
});
