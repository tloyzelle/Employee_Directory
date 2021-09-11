import React from "react";

const SearchForm = (props) => {
    const inputEl = useRef("");

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };

    return (
        <div className='form-group' style={{ display: 'flex' }}>
            <label htmlFor="search"></label>
            <input
            ref = {inputEl}
            onChange = {getSearchTerm}
            Value = {props.term}
            name = "search"
            type = "text"
            className = "form-control"
            placeholders = "Search Employee"
            id = "search"
             />
        </div>
    )
}

export default SearchForm