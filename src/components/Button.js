import React from "react";

import {logDOM} from "@testing-library/react";

// const props = {
// name: 'Jan Frits',
// banaan: 'Loremdjsdnsjfhs'
//}

function Button (props) {
    console.log(props);
    return (

            <button
                type={props.typeOfButton}
                onClick={props.klikEvent}
                disabled={props.onDisabled}
            >{props.name}

            </button>

    )

}

export default Button;

