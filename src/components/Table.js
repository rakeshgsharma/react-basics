import React from 'react';

export default function (props) {
    return (
        <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.productList.map((product) => {
                        return (<tr key = {product.productKey} >
                            <td>{product.productName}</td>
                            <td>{product.productDesc}</td>
                            <td><button id = {product.productKey} onClick= {props.handleEdit}>Edit</button></td>
                            <td><button id = {product.productKey} onClick= {props.handleDelete}>Delete</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
    );
}