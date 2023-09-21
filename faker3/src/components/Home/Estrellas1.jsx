import { useState } from "react";
import Modal from './Modal'


const Estrellas1 =() => {

const [countEstrellas, setCountEstrellas] = useState("")

const [modal1, setModal1] = useState(false);
const [modal2, setModal2] = useState(false);


const Toogle1 = () => setModal1(!modal1);
const Toogle2 = () => setModal2(!modal2);


function menosEstrellas() {

   if (countEstrellas.length <= 0) {
      {setModal1(true)}
      // window.alert("No hay estrellas, agregue una por favor...")
   } else{

      setCountEstrellas(prevestrellas => prevestrellas.substring(0, prevestrellas.length - 1));
   }
}

function masEstrellas() {
   if (countEstrellas.length >=5){
      {setModal2(true)}
      // <Modal show ={modal} close={() => Toogle()} title="Título dinámico">
      //     Este es el contenido dinamico del modal
      //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, et?dasdasd
      // </Modal>
   //   window.alert("Maximas estrellas concedidas. Gracias!")
   } else {

      setCountEstrellas(prevestrellas => prevestrellas +="⭐")
   }
}

return (
    <div className='contador'>


        {/* <button onClick={() => Toogle()}>Modal</button> */}
         <Modal show ={modal1} close={Toogle1} title="Título dinámico">
                              Agregue Estrellas
         </Modal>        
         <Modal show ={modal2} close={Toogle2} title="Título dinámico">
                              No puede agregar más estrellas
         </Modal>        
         <div className="btns-abajo">
            <div className="manos">
               <button onClick={menosEstrellas}>👎</button> 
               <button onClick={masEstrellas}>👍</button>
            </div>
            <div className="estrellas">
               <h3>{countEstrellas}</h3>
            </div>
         </div>
    </div>
)


}


export default Estrellas1;