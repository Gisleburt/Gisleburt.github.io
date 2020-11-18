import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ContactDetails from './ContactDetails';
import { Content } from '../../types/domain';

describe('ContactDetails', () => {
  it('should render each contact as a definition list', () => {
    const contactDetails: Content.ContactDetails = {
      __TYPE__: 'ContactDetails',
      id: '1',
      title: 'Contact Details',
      details: [
        {
          __TYPE__: 'ContactDetail',
          id: '2',
          label: 'website',
          value: 'https://example.com',
        },
        {
          __TYPE__: 'ContactDetail',
          id: '3',
          label: 'email',
          value: 'example@example.com',
        },
      ],
    };
    const wrapper = shallow(<ContactDetails contactDetails={contactDetails} />);
    expect(wrapper.find('dl')).to.have.length(1);
    expect(wrapper.find('dt')).to.have.length(2);
    expect(wrapper.find('dd')).to.have.length(2);
  });

  it('should render anchors only if there is an href', () => {
    const contactDetails: Content.ContactDetails = {
      __TYPE__: 'ContactDetails',
      id: '1',
      title: 'Contact Details',
      details: [
        {
          __TYPE__: 'ContactDetail',
          id: '2',
          label: 'website',
          value: 'https://example.com',
          href: 'https://example.com',
        },
        {
          __TYPE__: 'ContactDetail',
          id: '3',
          label: 'email',
          value: 'example@example.com',
        },
      ],
    };
    const wrapper = shallow(<ContactDetails contactDetails={contactDetails} />);
    expect(wrapper.find('dt')).to.have.length(2);
    expect(wrapper.find('a')).to.have.length(1);
  });
});
