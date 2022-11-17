import React, { useEffect } from "react";
import GenArr, { deleteArr, defaultCard } from "./main";
import "../styles/header.css";

function Navbar() {

    useEffect(() => {
        GenArr();
        defaultCard();
    });

    const NewArr = () => {
        deleteArr();
        GenArr(document.getElementById("arr_size").value);
    };

    const NewSize = () => {
        deleteArr();
        GenArr(document.getElementById("arr_size").value);
    };

    return (
        <>
            <div className="title" >
                    <h1>Sorting Visualizer</h1>
            </div>

            <div className="maindiv_nav">

                <div className="buttBars">

                    <div className="rangesliders">

                        <div className="sizeslider">
                                <div className="sliderinput slider">
                                    <p id="size">SIZE</p>
                                    <input type="range" id="arr_size" onChange={NewSize} defaultValue={25} min="10" max="70" step={5} />
                                </div>
                        </div>

                        <div className="newarrbtn">
                            <button type="submit" onClick={NewArr} id="newarr">Gen New Arr</button>
                        </div>

                        <div className="speedslider ">
                                <div className="slidertext slider">
                                    <p id="speed">SPEED</p>
                                    <input type="range" id="arr_speed" defaultValue={40} min="2" max="80" step={5} />
                                </div>
                        </div>

                    </div>

                    <div id="yoyoarrays"></div>

                    <div id="card"> </div>

                </div>



            </div>
        </>
    );
}

export default Navbar;