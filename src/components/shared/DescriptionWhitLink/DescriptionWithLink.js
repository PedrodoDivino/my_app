import React from 'react';

const DescriptionWhitLink = (props) => {
    return (
        <fragment>
            <p>{props.description}</p>
            <p>
                <a href={props.link}>{props.link}</a>
            </p>
        </fragment>
    )
}
export default DescriptionWhitLink;

