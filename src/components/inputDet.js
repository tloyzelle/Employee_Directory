import React from "react";


function InputDetail(props) {
    return (
        <form className='m-3'>
            <select name={props.type} id={props.type} onChange={props.onChange}>
                <option value={props.defaultVal}>{props.defaultDesc}</option>
                <option value={props.val1}>{props.val1Desc}</option>
                <option value={props.val2}>{props.val2Desc}</option>
            </select>
        </form>
    )
}

export default InputDetail;