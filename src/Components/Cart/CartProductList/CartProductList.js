import React from 'react';
import Button from '../../UI/Button/Button';
import styled from 'styled-components';

const ProductInCart = styled.div`
    text-align: center;
    width: 100%;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-items: stretch;
    justify-content: space-between;
    align-items: top;
    :hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

const CartProductInfo = styled.div`
    margin: 0 15px;
    text-align: center;
    width: 10%;
    @media (max-width: 820px) {
        display: block;
        margin: 10px;
        h4 {
            margin: 15px 0;
        }
    }
`;
const SmallProductImage = styled.img`
    width: 100px;
    z-index: -1;
`;
const CartProductDelete = styled.div`
    align-items: center;
    vertical-align: bottom;
    display: flex;
    display: ${props => (props.noBtn ? 'none' : 'block')};
    @media (max-width: 450px) {
        margin: auto;
    }
`;
const CartProductWrapper = styled.div`
    align-items: center;
    vertical-align: bottom;
    display: flex;
`;

const CartProductList = props => {
    return (
        <ProductInCart onClick={props.clicked}>
            <CartProductWrapper>
                <SmallProductImage src={props.image} alt={props.alt}></SmallProductImage>
            </CartProductWrapper>
            <CartProductInfo>
                <h4>{props.brand}</h4>
                <p>{props.model}</p>
            </CartProductInfo>
            <CartProductInfo>
                <h4>No.</h4>
                <p>{props.quantity}</p>
            </CartProductInfo>
            <CartProductInfo>
                <h4>Size</h4>
                <p>{props.size}</p>
            </CartProductInfo>
            <CartProductInfo>
                <h4>Price</h4>
                <p>{props.price}$</p>
            </CartProductInfo>
            <CartProductDelete noBtn={props.noBtn}>
                <Button value={props.id} clicked={props.onClick}>
                    Delete
                </Button>
            </CartProductDelete>
        </ProductInCart>
    );
};

export default CartProductList;
