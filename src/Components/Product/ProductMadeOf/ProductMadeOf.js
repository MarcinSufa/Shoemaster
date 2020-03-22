import React from 'react';
import styled from 'styled-components';
import ShoeAvailableSize from '../ShoeAvailableSize/ShoeAvailableSize';

// const ShoeAvailableSize = styled.div`
//     display: inline-flex;
//     border: 1px solid #6a1b9a;
//     padding: 5px 10px;
//     margin: 5px;
//     border-radius: 25px;
//     color: #6a1b9a;
//     font-size: 0.8rem;
// `;
const HideMaterials = styled.div`
    display: none;
    background-color: white;
    z-index: 1;
    position: relative;
    top: -10px;
`;

const ShoeMaterials = styled.div`
    background-color: white;
    z-index: 1;
    position: relative;
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: center;
    padding: 10px;
    background-color: transparent;
    font-size: 0.8rem;
`;

const ProductMadeOf = props => {
    console.log(props);
    const Showorhide = props.class === 'HideMaterials' ? HideMaterials : ShoeMaterials;
    return (
        <Showorhide>
            <span>
                upper: <ShoeAvailableSize>{props.upper}</ShoeAvailableSize>
            </span>
            <span>
                lining:<ShoeAvailableSize>{props.lining}</ShoeAvailableSize>
            </span>
            <span>
                outerSole:<ShoeAvailableSize>{props.outerSole}</ShoeAvailableSize>
            </span>
        </Showorhide>
    );
};

export default ProductMadeOf;
