import React from "react"
import { createPortal } from 'react-dom';
import "./style.css"
import { CLOSE } from "../../assets/images";

class Modal extends React.Component{

    static instance = null

    static Show = ({ image }) => {
        Modal.instance.setState({ visible: true, image })
    }

    state = {
        visible: false,
        image: ""
    }

    componentDidMount(){
        Modal.instance = this
    }

    hide = () => {
        this.setState({ visible: false })
    }

    close_modal = (e) => {
        const close = e.classList.toString().includes("close")
        if (close) this.hide()
        else return false;
    }

    renderModal = () => {
        const { image: img_url } = this.state
        return(
            <div className="modal close" onClick={(e) => this.close_modal(e.target)}>
                <div className="modal-content">
                    <img
                        src={img_url}
                        alt="omers-vişit-place"
                    />
                </div>
                <div className="close-button close">
                    <img
                        src={CLOSE}
                        alt="close"
                        className="close"
                    />
                </div>
            </div>
        )
    }

    render(){

        const { visible } = this.state

        return(
            visible
            ?   createPortal(this.renderModal(),document.body)
            :   null
        )
    }
}

export { Modal }