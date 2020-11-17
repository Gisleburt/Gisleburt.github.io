import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WorkHistory from './WorkHistory';
import { Content } from '../../types/domain';

describe('WorkHistory', () => {
  const history: Content.WorkHistory = {
    __TYPE__: 'WorkHistory',
    title: 'Test Work History',
    roles: [
      {
        __TYPE__: 'RoleDescription',
        business: 'Some Company',
        role: 'Some Role',
        startDate: '2020-01',
        description: 'Some thing',
      },
      {
        __TYPE__: 'RoleDescription',
        business: 'Another Company',
        role: 'Another Role',
        startDate: '2020-01',
        endDate: '2020-01',
        description: 'Another thing',
      },
    ],
  };

  it('should render an WorkHistoryItem for each bit of history', () => {
    const wrapper = shallow(<WorkHistory workHistory={history} />);
    expect(wrapper.find('WorkHistoryItem')).to.have.length(2);
  });

  it('should pass work history down', () => {
    const wrapper = shallow(<WorkHistory workHistory={history} />);
    expect(wrapper.find('H2').text()).to.equal(history.title);

    const firstItem = wrapper.find('WorkHistoryItem').at(0);
    expect(firstItem.prop('business')).to.equal(history.roles[0].business);
    expect(firstItem.prop('role')).to.equal(history.roles[0].role);
    expect(firstItem.prop('startDate')).to.equal(history.roles[0].startDate);
    expect(firstItem.prop('endDate')).to.equal(undefined);
    expect(firstItem.prop('description')).to.equal(history.roles[0].description);

    const secondItem = wrapper.find('WorkHistoryItem').at(1);
    expect(secondItem.prop('business')).to.equal(history.roles[1].business);
    expect(secondItem.prop('role')).to.equal(history.roles[1].role);
    expect(secondItem.prop('startDate')).to.equal(history.roles[1].startDate);
    expect(secondItem.prop('endDate')).to.equal(history.roles[1].endDate);
    expect(secondItem.prop('description')).to.equal(history.roles[1].description);
  });
});
