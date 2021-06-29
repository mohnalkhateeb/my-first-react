import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card';
// import { Modal, Button } from 'react-bootstrap'

class SelectedBeast extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //      showmodel: false
        // }
    }


    showModelBeast = (key) => {

        this.props.showModelBeast(this.props.key)
        this.props.showModelBe(this.props.key)
    }
    addcloseMod = () => { this.props.addcloseMod() }
    render() {
        return (
            <>
            {/* <Modal show={} onHide={}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Img src={this.props.source} />
                    <Modal.Text>{this.props.detail}</Modal.Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.addcloseMod}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal> */}
            <Card style={{ width: '250px' } } onClick={this.showModelBeast}>
                    <Card.Img onClick={this.favoritedplus} variant="top" src={this.props.source} />
                    <Card.Body>
                        <Card.Title>{this.props.Title}</Card.Title>
                        <Card.Text>
                        {this.props.detail}
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
                <SelectedBeast title={this.title} source={this.image_url} detail={this.description}/>
            </>
        )
    }
}

export default SelectedBeast;