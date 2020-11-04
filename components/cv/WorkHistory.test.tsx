import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WorkHistory from './WorkHistory';
import { WorkHistoryItemProps } from './WorkHistoryItem';

describe('WorkHistory', () => {
  const history: WorkHistoryItemProps[] = [
    {
      company: 'Some Company',
      title: 'Some Role',
      startDate: '2020-01',
      description: ['Some thing'],
    },
    {
      company: 'Another Company',
      title: 'Another Role',
      startDate: '2020-01',
      endDate: '2020-01',
      description: ['Another thing'],
    },
  ];

  it('should render an WorkHistoryItem for each bit of history', () => {
    const wrapper = shallow(<WorkHistory history={history} />);
    expect(wrapper.find('WorkHistoryItem')).to.have.length(2);
  });

  it('should pass work history down', () => {
    const wrapper = shallow(<WorkHistory history={history} />);

    const firstItem = wrapper.find('WorkHistoryItem').at(0);
    expect(firstItem.prop('company')).to.equal(history[0].company);
    expect(firstItem.prop('title')).to.equal(history[0].title);
    expect(firstItem.prop('startDate')).to.equal(history[0].startDate);
    expect(firstItem.prop('endDate')).to.equal(undefined);
    expect(firstItem.prop('description')).to.equal(history[0].description);

    const secondItem = wrapper.find('WorkHistoryItem').at(1);
    expect(secondItem.prop('company')).to.equal(history[1].company);
    expect(secondItem.prop('title')).to.equal(history[1].title);
    expect(secondItem.prop('startDate')).to.equal(history[1].startDate);
    expect(secondItem.prop('endDate')).to.equal(history[1].endDate);
    expect(secondItem.prop('description')).to.equal(history[1].description);
  });
});
