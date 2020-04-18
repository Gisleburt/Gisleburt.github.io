import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WorkHistoryItem, { WorkHistoryItemProps } from './WorkHistoryItem';

const workHistoryItemWithoutEnd: WorkHistoryItemProps = {
  company: 'some company',
  title: 'some company',
  startDate: new Date('2019-01'),
  description: ['desc1', 'desc2'],
};

const workHistoryItemWithEnd: WorkHistoryItemProps = {
  ...workHistoryItemWithoutEnd,
  endDate: new Date('2020-02'),
};

describe('WorkHistoryItem', () => {
  it('should render the company name', () => {
    const wrapper = shallow(<WorkHistoryItem {...workHistoryItemWithEnd} />);
    expect(wrapper.find('WorkHistoryTitle').text()).to.include(workHistoryItemWithoutEnd.company);
  });

  it('should render the role', () => {
    const wrapper = shallow(<WorkHistoryItem {...workHistoryItemWithEnd} />);
    expect(wrapper.find('WorkHistoryTitle').text()).to.include(workHistoryItemWithoutEnd.title);
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
