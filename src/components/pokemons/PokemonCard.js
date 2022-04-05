import React from 'react';

const PokemonCard = ({id, name, image, type, secondaryImage, height, weight, hp, attack, defense, speed}) => {



    let correctWeight = (weight* 0.1);
    const frontStyle = `card-front ${type}`
    const backStyle= `card-back ${type}`
    return(
        <div className="card">
            <div className="card-inner">
            <div className={frontStyle}>
                <div className="number">
                    <h3>#0{id}</h3>
                </div>
                <img src={image} alt=''/>
                <div className="card-details">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                </div>
            </div>
            <div className={backStyle}>
            <div className="number">
                    <h3>#0{id}</h3>
                </div>
                <img src={secondaryImage} alt=''/>
                <div className="card-details">
                    <h3>Stats</h3>
                    <div className="card-left-column">
                    <small>Height:</small><br></br>
                    <small>Weight:</small><br></br>
                    <small>Base HP:</small><br></br>
                    <small>Base Attack:</small><br></br>
                    <small>Base Defense:</small><br></br>
                    <small>Base Speed:</small>
                    </div>
                    <div className="card-right-column">
                    <small>{height}0cm</small><br></br>
                    <small>{correctWeight}kg</small><br></br>
                    <small>{hp.base_stat}</small><br></br>
                    <small>{attack.base_stat}</small><br></br>
                    <small>{defense.base_stat}</small><br></br>
                    <small>{speed.base_stat}</small>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default PokemonCard;