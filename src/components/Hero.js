import React from 'react';

function Hero(){
    return (
        <div className="hero">
            <img src={require("../assets/photos/BreakUpCookies.png")} height="500px" width="100px" alt="Breakup Cookies" />
            <img src={require("../assets/photos/DinnerRolls.png")} height="100" width="100" alt="Dinner Rolls" />
            <img src={require("../assets/photos/LemonCurdCake.png")} height="100" width="100" alt="Lemon Curd Cake" />
        </div>
    )
}

export default Hero;