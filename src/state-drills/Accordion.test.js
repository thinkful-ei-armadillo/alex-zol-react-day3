import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

const sectionProps = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

describe(`Tabs Component`, () => {

    it('renders empty when sections not supplied', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders no sections active by default', () => {
        const wrapper =shallow(<Accordion sections={sectionProps}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sectionProps}/>)
        wrapper.find('button').at(0).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('only renders last clicked section', () => {
      const wrapper = shallow(<Accordion sections={sectionProps}/>);
      const buttons = wrapper.find('button');
      buttons.forEach(button => {
        button.simulate('click')
      })
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  })