import { useState } from "react"
import './App.css';
import html2canvas from "html2canvas";

function App() {
    const [linea1, setLinea1] = useState('');
    const [linea2, setLinea2] = useState('');
    const [imagen, setImagen] = useState('');



    const onChangeLinea1 = function(evento) {
        setLinea1(evento.target.value)
    }

    const onChangeLinea2 = function(evento) {
        setLinea2(evento.target.value)
    }


    const onChangeImagen = function(evento) {
        setImagen(evento.target.value)
    }

    const onClickExportar = function(evento) {
        // alert("¿Deseas descargar el meme?")

        html2canvas(document.querySelector("#containerImagen")).then(canvas => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement('a');
            link.download = "1.jpg";
            link.href = img;
            link.click();
        });
    }

    return (<div className="App">
                <div className="container containerLogeo w-25">
                <div className="row text-white">
                    <div className="col">
                    <h2 className="mb-2">Generador de memes React</h2>
                    <h3 className="mb-3">Codo a codo</h3>
                    <div className="mt-3">
                    <select className="btnElegirMeme" onChange = { onChangeImagen } >
                        <option value = "1" > Meme 1 </option>
                        <option value = "2" > Meme 2 </option>  
                        <option value = "3" > Meme 3 </option>  
                        <option value = "4" > Meme 4 </option>  
                        <option value = "5" > Meme 5 </option>  
                    </select > 
                    </div>


                    {/* Inputs de texto */}
                    <div className="mb-2">
                        <label for="email" className="form-label"></label>
                        <input
                        onChange = { onChangeLinea1 }
                        placeholder="Texto 1"
                        className="form-control"
                        type="text"
                        name="text"
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label for="password" className="form-label"></label>
                        <input
                        onChange = { onChangeLinea2 }
                        placeholder="Texto 2"
                        className="form-control"
                        type="text"
                        name="text"
                        ></input>
                    </div>

                    {/* Imagen y texto de imagen */}
                    <div className = "containerImagen mb-4" id = "containerImagen">
                        <span > { linea2 } </span>
                        <br/>
                        <span> { linea1 } </span>  
                        <img src = { "/img/" + imagen + ".jpg" }/>
                    </div>
                    
                    {/* Boton de descarga */}
                    <div className="d-grid mb-4">
                        <button className="btn btnDescargar fw-bold" onClick = { onClickExportar } > Descargar </button>
                    </div>

                    </div>
                </div>
                </div>
                
            </div>
            );       
}

export default App;