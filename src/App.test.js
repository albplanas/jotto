import React from "react"
import Enzyme,{shallow} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import App from './App';



Enzyme.configure({adapter:new EnzymeAdapter() });

/**
 * 
 *  Factory function 
 * @function setup 
 * @param {object} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */


const setup =(props={}, state=null)=>{
    const wrapper = shallow(<App {...props}/>);
    if(state) wrapper.setState(state)
    return wrapper
}

/**
 * 
 *  Factory function 
 * @function setup 
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
const findByTestAttr =(wrapper,val)=>{
    return wrapper.find("[data-test='"+val+"']")
}


/**
 * 
 *  Factory function 
 * @function setCounter 
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
const setCounter =(counter)=>{

    return setup(null ,{counter});

}

test('renders without crashing', () => {
    const wrapper=setup();
    const appComponent=findByTestAttr(wrapper,'component-app');
   expect(appComponent.length).toBe(1);
});

test('Increment button', () => {
    const wrapper=setup();
    const button=findByTestAttr(wrapper,'increment-button');
   expect(button.length).toBe(1);
});

test('Decrement button', () => {
    const wrapper=setup();
    const button=findByTestAttr(wrapper,'decrement-button');
    expect(button.length).toBe(1);
});

test('render counter', () => {
    const wrapper=setup();
    const counterDisplay=findByTestAttr(wrapper,'counter-display');

   expect(counterDisplay.length).toBe(1);
});
test('start at 0', () => {
    const wrapper=setup();
    const initialCounterState=wrapper.state('counter')
    expect(initialCounterState).toBe(0);
});
test('click buuton incremt counter?', () => {
    const counter=7;
    const wrapper=setup(null ,{counter});

    //click on buttom
    const button = findByTestAttr(wrapper,'increment-button');
    button.simulate('click');
    wrapper.update();
    const counterDisplay= findByTestAttr(wrapper,'counter-display')
   expect(counterDisplay.text()).toContain(counter+1);
});


test('click button decremt counter at 0?', () => {
 
    const wrapper=setCounter(7);

    //click on buttom
    const button = findByTestAttr(wrapper,'decrement-button');
    button.simulate('click');
    wrapper.update();
    const counterDisplay= findByTestAttr(wrapper,'counter-display')
   expect(counterDisplay.text()).toContain(counter-1);
});