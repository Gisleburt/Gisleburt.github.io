import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WorkHistoryItem from './WorkHistoryItem';
import { Content } from '../../types/domain';

const workHistoryItemWithoutEnd: Content.RoleDescription = {
  __TYPE__: 'RoleDescription',
  business: 'some company',
  role: 'some company',
  startDate: '2019-01',
  description: 'Some description',
};

const workHistoryItemWithEnd: Content.RoleDescription = {
  ...workHistoryItemWithoutEnd,
  endDate: '2020-02',
};

describe('WorkHistoryItem', () => {
  it('should render the company name', () => {
    const wrapper = shallow(<WorkHistoryItem {...workHistoryItemWithEnd} />);
    expect(wrapper.find('WorkHistoryTitle').text()).to.include(workHistoryItemWithoutEnd.business);
  });

  it('should render the role', () => {
    const wrapper = shallow(<WorkHistoryItem {...workHistoryItemWithEnd} />);
    expect(wrapper.find('WorkHistoryTitle').text()).to.include(workHistoryItemWithoutEnd.role);
  });

  it('should render the start date', () => {
    const wrapper = shallow(<WorkHistoryItem {...workHistoryItemWithEnd} />);
    expect(wrapper.find('WorkHistoryTitle').text()).to.include('2019');
  });

  it('should render the end date', () => {
    const wrapper = shallow(<WorkHistoryItem {...workHistoryItemWithEnd} />);
    expect(wrapper.find('WorkHistoryTitle').text()).to.include('2020');
  });

  it('should render now if there is no end date', () => {
    const wrapper = shallow(<WorkHistoryItem {...workHistoryItemWithoutEnd} />);
    expect(wrapper.find('WorkHistoryTitle').text()).to.include('Now');
  });
});
