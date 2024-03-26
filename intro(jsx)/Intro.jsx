import React from "react";


function Intro(props){
    return (
        <div>
            <header>
                <h1>Introduction</h1>
                <h2>저는 경성대학교 소프트웨어학과 20학번 이승준입니다.</h2>    
            </header>

            <div class="school">
                <h2 id="school">[학교]</h2>
                <h3>{props.school}</h3>
            </div>
            <div class="trigger">
                <h2 id="trigger">[계기]</h2>
                <h3>{props.trigger}</h3>
            </div>
            <div class="major">
                <h2 id="major">[전공]</h2>
                <h3>{props.major}</h3>
            </div>
        </div>
    );
}
export default Intro;