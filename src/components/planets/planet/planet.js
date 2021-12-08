import React, { fragment } from 'react';
import GrayImg from '../../shared/gray_img/grayImg.js';
import DescriptionWhitLink from '../../shared/DescriptionWhitLink/DescriptionWithLink.js';


const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            < DescriptionWhitLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} />


        </div>
    )
}
export default Planet;