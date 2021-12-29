import React from 'react';

const DescriptionWhitLink = (props) => {
    if(props.link){
        return (
            <fragment>
                <p>{props.description}</p>
                <p>
                    <a href={props.link}>{props.link}</a>
                </p>
            </fragment>
        )
    } else {
        return (
            <fragment>
                <p><u>{props.description}</u></p>
            </fragment>
            )
        }
}
export default DescriptionWhitLink;

