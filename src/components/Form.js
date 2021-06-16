import React from 'react';

export default function (props) {
    const getKey = () => props.productKey ? props.productKey : Date.now();
    return (
        <>
            <input
                name = "productName"
                id = { getKey() }
                value = {props.productName}
                onChange = {props.handleChange}
            />
            <input
                name = "productDesc"
                id = { getKey() }
                value = {props.productDesc}
                onChange = {props.handleChange}
            />
            <button id = { getKey() } onClick = {props.handleSubmit}>Save</button>
        </>
    )
}