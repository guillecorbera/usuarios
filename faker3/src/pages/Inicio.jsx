// import Compositores from './Compositores';
import './Inicio.css'
// import Estrellas from './Estrellas';
import React, {useState} from "react";
import { fakerES } from '@faker-js/faker';
import  Estrellas1  from "../components/Home/Estrellas1";
// import Modal from './Modal'
import './Inicio.css'

// const Inicio =() => {

    export default function inicio(){
    
            const [users, setUsers] = useState([]);
    
            // const [modal, setModal] = useState(false);
    
            // const Toogle = () => setModal(!modal);
            
            // Agregar Usuario
            const AddUser = () => {
                const newUser = {
                    firstName: fakerES.person.firstName() ,
                    lastName: fakerES.person.lastName(),
                    uid: fakerES.string.uuid(),
                    email: fakerES.internet.email(),
                    image: fakerES.image.url(),
                }
                setUsers([...users, newUser]);
                
            }
    
            // Remover Usuario
            const RemoveUser = (uid) => {
                setUsers(users.filter((user) => user.uid !== uid));
            };
    
            // Actualizar Usuario
            const UpdateUser = (uid) => {
                setUsers(users.map((user) => {
                    if (user.uid === uid) {
                        return {
                            ...user,
                            firstName: fakerES.person.firstName(),
                            lastName: fakerES.person.lastName(),
                            image: fakerES.image.url(),
                        };
                    }
                    return user;
                }));
            };
            
        
            return (
            <>
                <button onClick={AddUser}>Agregar Usuario Random</button>
                <div className="usersContainer">
                    {users.map((user) => (
                        <div className="userCard" key={user.uid}>
                            <div className="userInfo">
                                <p>Usuario: {user.firstName} {user.lastName}</p>
                                <img src={user.image} alt={user.uid} />
                            </div>
                            <br />
                            <div className="botones">
                                <div className="btns-arriba">
                                    <button onClick={() => UpdateUser(user.uid)}>Actualizar Usuario</button>
                                    <button onClick={() => RemoveUser(user.uid)}>Eliminar Usuario</button>
                                </div>
                                <div></div>
                                <Estrellas1/>
                                {/* <button onClick={() => Toogle()}>Modal</button>
                                <Modal show ={modal} close={Toogle} title="Título dinámico">
                                    Este es el contenido dinamico del modal
                                    Que está en /Home/index.jsx
                                </Modal> */}
                            </div>
                        </div>
                    ))}            
                </div>
            </>
            );
        // };
    }
// }

// export default Inicio;
