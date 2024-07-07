import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleForm } from '../actions/formActions';

const NewButton = ()=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(toggleForm());
    };

    return (
        <button onClick={handleClick}>New</button>
    );
};

export default NewButton;