/* eslint-disable jsx-a11y/alt-text */
import React, { fragment } from 'react';
import './gray.css';

const GrayImg =(props)=>{
    return(
        <img  className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url}></img>
    )
}
export default GrayImg;

