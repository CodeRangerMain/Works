import React from 'react'

const Row = (props) => {


    return (
        <div className='row' >
            <div class="position">1</div>
            <div class="name"><span class="number">{props.id}</span><span class="span-name">{props.racerName}</span></div>
            <div class="laps"><span>13</span> <span class="hide-desktop"></span></div>
            <div class="lastlap">46.203</div>
            <div class="bestlap">43.141</div>
            <div class="diff-bestlap"><span>+ 3.116</span></div>
            <div class="average"><span>48.585</span></div>
        </div >
    )
}
export default Row;