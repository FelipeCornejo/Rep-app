import React, {Component} from 'react';
import Usuario from './Usuario';
import Repositorios from './Repositorios';
import './Styles.css';

const username = "alanrubin";
const BASE_URL = "https://api.github.com";
const url = `${BASE_URL}/users/${username}/repos?per_page=250`;

const data =  {
    nombre: "nombre del repositorio",
    lenguaje: "Ruby",
    descripcion: "descripcion"
}

//creare un data2 para que se visualice la actualizacion de la funcion handleUpdateClick
const data2 = {
    nombre: "nombre de repositorio2",
    lenguaje: "Js",
    descripcion: "descripcion2"
}

class FrameRep extends Component {

    constructor() {
        super();
        this.state = {
            username: 'alanrubin',
            data: data,
        };
    }
//lo siguiente no se pudo resolver (getData) ya que no supe como pedir la informacion dentro de la api.
//ya que era una array de arrays, no encontre el camino adecuado para llegar a pedir la info.
    //getData = url => {
        //const { language } = url.language;
        //const { description } = url.description;
        //const { name } = url.name;

        //const data = {
            //lenguaje : language ,
            //descripcion : description,
            //nombre : name,
        //};

        //return data;
    //}
    
//Actualizacion de la pagina para cuando cambie de usuario, por mientras hardcoreado con un boton de "buscar" para ver si cambia la informacion
//interna (dentro de FrameRep)
//hardocreado con data2 para previsualizar los cambios
//la idea es poner un fetch que resuelva la constante url y me entregue la info que pido en getData
    handleUpdateClick = () => {
        fetch(url)

        console.log ("actualizado");

        this.setState({
            data: data2
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
