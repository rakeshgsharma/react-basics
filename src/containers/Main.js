import React from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

export default class Main extends React.Component {
    state = {
        productList: [],
        currentActiveProduct: {
            productName: '',
            productDesc: ''
        },
        isEdit: false,
    }

    // handleChange = e => {
    //     this.setState({ 
    //         currentActiveProduct: { 
    //             ...this.state.currentActiveProduct,
    //             [e.target.name] : e.target.value,
    //             productKey: e.target.id 
    //         }
    //     });
    // }
    handleChange = e => {
        const updatedCurrentActiveProduct = { ...this.state.currentActiveProduct }; // simply making a copy
        if (e.target.name === 'productName') {
            updatedCurrentActiveProduct.productName = e.target.value;
        }
        if (e.target.name === 'productDesc') {
            updatedCurrentActiveProduct.productDesc = e.target.value;
        }
        updatedCurrentActiveProduct.productKey = e.target.id;
        this.setState({
            currentActiveProduct: updatedCurrentActiveProduct
        })
    }

    handleSubmit = (e) => {
        if(this.state.currentActiveProduct.productKey) {
            let productList = [];
            if(this.state.isEdit) {
                productList = this.state.productList.map(product => {
                    if (product.productKey === e.target.id) {
                        product = this.state.currentActiveProduct
                    }
                    return product
                });
            } else {
                productList = [...this.state.productList, this.state.currentActiveProduct];
            }
            this.setState({ 
                productList: productList,
                currentActiveProduct: {
                    productName: '',
                    productDesc: ''
                },
                isEdit: false,
            });
        }
    }
    handleEdit = e => {
        this.setState({
            currentActiveProduct: this.state.productList.find(product => product.productKey === e.target.id),
            isEdit: true
        });
    }
    handleDelete = (e) => {
        this.setState({
            productList: this.state.productList.filter(product => product.productKey !== e.target.id)
        })
    }
    render() {
        return (
           <>
            <Form
                handleChange = { this.handleChange }
                handleSubmit = { this.handleSubmit }
                { ...this.state.currentActiveProduct }
            />
            <Table 
                productList = { this.state.productList }
                handleEdit = { this.handleEdit }
                handleDelete = { this.handleDelete }
            />
           </>
       )
    } 
}