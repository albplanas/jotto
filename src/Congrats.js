import React from 'react';
import { tsPropertySignature } from '@babel/types';

export default (props)=>{
    return props.success?<div data-test="component-congrats">
                                <span data-test="component-message">Congratulation ! You guessed the word!</span>
                        </div>:
                        <div data-test="component-congrats">
                              
                        </div>;
}