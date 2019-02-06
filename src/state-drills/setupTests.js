import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

const sectionProbs = [
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

    it('renders without errors', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Accordion />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  
    it('renders empty given no tabs', () => {
      const wrapper = shallow(<Accordion />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders the first tab by default', () => {
      const wrapper = shallow(<Accordion sections={sectionProbs} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders empty when sections not supplied', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders no sections active by default', () => {
        const wrapper =shallow(<Accordion section={sectionProbs}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders a clicked section', () => {
        const wrapper = shallow(<Accordion section={sectionProb}/>)
        wrapper.find('button').at(0).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
  })