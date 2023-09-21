import './modal.css'
const Modal = ({
        show, close, children, title
    }) => {
    return <>

        <div className={`modal-container ${show? "show" : ""}` } onClick={() => close()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <header className="modal_header">
                <h2 className="modal_header-title"></h2>
                  <p>{title}</p> 
                {/* <button className="close" onClick={()=> close()}> */}
                  {/* Cerrar   */}
                {/* </button>  */}
                
              </header>
              <main className="modal-content">
                  {children}
              </main>
              <footer className="modal_footer">
                <button className="modal_close"  onClick={()=> close()} >Cancelar</button>
                {/* <button className="submit">Entregar</button> */}
              </footer>
            </div>
        </div> 
        
    </>
    
}

export default Modal;