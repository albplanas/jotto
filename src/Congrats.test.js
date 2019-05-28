import React from "react"
import Enzyme,{shallow} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import Congrats from './Congrats';
import { findByTestAttr } from "../test/testUtils";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({adapter :new EnzymeAdapter()})
 
const setup =(props={})=>{
    const wrapper = shallow(<Congrats {...props}/>);
    
    return wrapper
}


test('renders without crashing', () => {
   const wrapper=setup();
   const component = findByTestAttr(wrapper,"component-congrats");
   expect(component.length).toBe(1)
});

test('renders no text when success prop is false', () => {
    const wrapper=setup({success:false});
    const component = findByTestAttr(wrapper,"component-congrats");
    expect(component.text()).toBe("")
});

test('renders no empty congrats message prop is true', () => {
    const wrapper=setup({success:true});
    const message = findByTestAttr(wrapper,"component-message");
    expect(message.text().length).not.toBe(0)
});