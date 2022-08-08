import React from "react";


function Slide(props) {
    const colorText = `${props.colorText}`;
    // console.log(colorText);
    return (
        <>
            <div className="slide">
            <img alt="" src={props.img} />
                <figure>
                    <img alt="" src={props.img} />
                    <figcaption>
                        <h2 className={colorText}>{props.title}</h2>
                        <p>{props.concept}</p>
                    </figcaption>
                </figure>

                <div className="bg_overlay"></div>
            </div>
        </>

    );
}

export default Slide;