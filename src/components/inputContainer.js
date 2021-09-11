import React from 'react';
import InputDetail from './inputDet';
import './inputContainer.css';

function InputContainer(props) {
    return (
        <div className='py-3 customStyle'>
            <InputDetail onChange={props.handleSortChange} type='sort' defaultVal='' defaultDesc='Select Sort Order' val1='last' val1Desc='Last Name' 
                        val2='email' val2Desc='Email Address'/>
            <InputDetail onChange={props.handleFilterChange} type='filter' defaultVal='' defaultDesc='Select Filter Criteria' val1='male' val1Desc='Male' 
                        val2='female' val2Desc='Female'/>
        </div>
    )
}

export default InputContainer;