import { useState } from "react";

export function Estrellas() {



const [estrellas, setEstrellas] = useState(0)
const [countEstrellas, setCountEstrellas] = useState("")

function menosEstrellas() {
   if (estrellas <= 0) {
      window.alert("No hay mas estrellas, agregue una por favor...")
   } else{
      setEstrellas(prevContador => prevContador -= 1)
      setCountEstrellas(prevestrellas => prevestrellas.substring(0, prevestrellas.length - 1));
   }
}

function masEstrellas() {
   if (estrellas >=5){
     window.alert("Maximas estrellas concedidas. Gracias!")
   } else {
      setEstrellas(prevContador => prevContador += 1)
      setCountEstrellas(prevestrellas => prevestrellas +="⭐")
   }
}

return (
    <div className='contador'>
        {countEstrellas}
        <p onClick={menosEstrellas}>👎</p> 
        <p onClick={masEstrellas}>👍</p>
    </div>
)


}