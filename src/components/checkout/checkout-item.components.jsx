import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { ClearItem, AddItem, RemoveItem } from '../../redux/cart/cart.actions';


const CheckOutItem = ({cartItem, ClearItem, AddItem, RemoveItem }) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' 
                    onClick={() => RemoveItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' 
                    onClick={() => AddItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' 
                onClick={() => ClearItem(cartItem)}>&#10006;</div>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    ClearItem: item => dispatch(ClearItem(item)),
    AddItem: item => dispatch(AddItem(item)),
    RemoveItem: item => dispatch(RemoveItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);