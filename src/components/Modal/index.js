import React from "react"
import { createPortal } from 'react-dom';
import "./style.css"
import { CLOSE } from "../../assets/images";
import { Image } from "../Image";

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

    componentWillUnmount(){
        Modal.instance.hide()
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
            <div className="modal" onClick={(e) => this.hide()}>
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()} //! stop bubbling
                >
                    <Image
                        alt="omers-visit-place"
                        src={img_url}
                        width="300"
                        height="300"
                    />
                </div>
                <div className="close-button">
                    <Image
                        src={CLOSE}
                        alt="close"
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