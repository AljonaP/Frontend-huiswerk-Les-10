import React from "react";


// const Tile = (props) => {
//
//     return (
//         <section>
//             <h2>{props.title}</h2>
//             <img src={props.image} alt={props.imageName}/>
//             <p>{props.text}</p>
//         </section>
//
//     )
// }
//


function Tile(props) {

    return (
        <>
            <section>
                {/*{ voorwaarde ? doe dan dit : anders dit*/
                    props.image ? <img src={props.image} alt={props.image.name}/> :
                        <>
                            <h2>{props.title}</h2>
                            <p>{props.text}</p>
                            <p>{props.text1}</p>
                        </>
                }

            </section>
        </>
    )
}




export default Tile;