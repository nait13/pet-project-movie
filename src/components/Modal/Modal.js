import React ,{useState} from 'react'
import './Modal.scss'

const Modal = ({active,setActive,children}) => {

    return (
        <div className={active? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
            <div className={active? 'modal__content active' : 'modal__content'}onClick={e =>e.stopPropagation()}>
                <div style={{color:'black'}}>{children}</div>
            </div>        
        </div>
    )
}

export default Modal
