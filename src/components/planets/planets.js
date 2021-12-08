import React from 'react';
import Planet from './planet/planet.js';
const Planets = () => {
    return (
        <fragment>
            <h3>Planet List</h3>
            <hr />
            <Planet name="Mercúrio"
                description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. "
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/480px-Mercury_in_color_-_Prockter07-edit1.jpg"
                link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)" />
                 <Planet name="Plutão"
                description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. "
                img_url="https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg"
                link="https://pt.wikipedia.org/wiki/Plut%C3%A3o" />
        </fragment>
    )
}
export default Planets;