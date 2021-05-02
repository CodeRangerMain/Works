import React from 'react'

const Header = (props) => {

    return (
        <div>
            <header className='header'>
                <div className="runNumber">
                    <div class="flag flag-finish">
                    </div>
                    {props.settings.sName}
                </div>
                <div class="runTime">09:12 (00:48)</div>
                <div class="clock">13:18:14</div>
            </header>
            <div className='competitors-header'>
                <div className="position">
                    <span>Поз</span>
                </div>
                <div className="name">
                    <span>Номер ⁄ Пилот</span>
                </div>
                <div className="laps">
                    <span>Кругов</span>
                </div>
                <div className="lastlap">
                    <span>Последний</span>
                </div>
                <div className="bestlap">
                    <span>Лучший</span>
                </div>
                <div className="diff-bestlap">
                    <span>Разница</span>
                </div>
                <div className="average">
                    <span>Среднее</span>
                </div>
            </div>
        </div>

    )
}

export default Header