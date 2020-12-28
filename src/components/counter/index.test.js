import React from 'react';

import Counter from './index';
import { shallow } from 'enzyme';

describe('<Counter/> testing', () => {
  it('renders with initial value of 0', () => {
    const counter = shallow(<Counter />)
    const result = counter.find('span.result');
    expect(result.text()).toBe('0');
  })
  it('renders with value of 6', () => {
    const start = 10;
    const counter = shallow(<Counter start={start} />)
    const result = counter.find('span.result');
    expect(result.text()).toBe(`${start}`);
  })
  it('renders addition button', () => {
    const counter = shallow(<Counter />);
    expect(counter.find('button.addition')).toHaveLength(1);
  })
  it('renders subtraction button', () => {
    const counter = shallow(<Counter />);
    expect(counter.find('button.substraction')).toHaveLength(1);
  })

  it('should after click addition button counter result is changing', () => {
    const counter = shallow(<Counter />);
    const result = parseInt(counter.find('span.result').text());
    counter.find('button.addition').simulate('click');
    expect(counter.find('span.result').text()).toBe(`${result + 1}`);
  })
  it('should after click substraction button counter result is changing', () => {
    const counter = shallow(<Counter />);
    const result = parseInt(counter.find('span.result').text());
    counter.find('button.substraction').simulate('click');
    expect(counter.find('span.result').text()).toBe(`${result - 1}`);
  })

  it('after enter the number to input and click button "Zmień" counter state is changing', () => {
    const counter = shallow(<Counter />);
    const button = counter.find('button.start-changer');
    counter.find('input').simulate('change', { target: { value: 100 } })
    setTimeout(() => {
      button.simulate('click');
      expect(counter.find('span.result').text()).toBe('100');
    }, 50);
  })
  it('button "reset" changing counter state to inital value', () => {
    const counter = shallow(<Counter start={3} />);
    const button = counter.find('button.reset');
    counter.find('button.substraction').simulate('click');
    button.simulate('click');
    expect(counter.find('span.result').text()).toBe(`${3}`);
  })

})