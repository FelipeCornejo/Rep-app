import React, {Component} from 'react';
import Usuario from './Usuario';
import Repositorios from './Repositorios';
import './Styles.css';

const BASE_URL = "https://api.github.com";


const data =  {
    nombre: "nombre de la wea",
    descripcion: "asd",
    fecha: "/ /"
}

const data2 =  {
    nombre: "nombre de la wea1!!!!",
    descripcion: "asd!!!!!",
    fecha: "/ /!!!!!"
}

class FrameRep extends Component {

    constructor() {
        super();
        this.state = {
            username: 'littlecornejo',
            data: data,
        }
    }

    handleUpdateClick = () => {
        fetch(url);

        console.log("actualizado;");

        this.setState({
            username: 'alanrubin',
            data: data2,
        });
    }

    render () {
        const { username, data } = this.state;
        return (
            <div className="FrameRepCont"> 
                <Usuario username ={username}/>
                <Repositorios data={data}/>
                <button onClick={this.handleUpdateClick}>BUSCAR</button>
            </div>
        );
    }
};

export default FrameRep;