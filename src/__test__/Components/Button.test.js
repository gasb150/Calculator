import React from 'react'
import { create } from 'react-test-renderer'

import Button from '../../components/Button'

it('renders correctly', ()=>{
  const elem = create(<Button buttonName="button" handlerClick={()=>'this is a button'} type="sp" />)
  expect(elem).toMatchSnapshot();
})