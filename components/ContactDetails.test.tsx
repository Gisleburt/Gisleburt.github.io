import React from 'react';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import ContactDetails from './ContactDetails';

describe('ContactDetails', () => {
  it('should render', () => {
    shallow(<ContactDetails contactDetails={[]} />);
  });
});
