import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card';
// import { Modal, Button } from 'react-bootstrap'

class SelectedBeast extends React.Component {
    render(){
    
        // [x] R E F A C T O R > C O D E
        let displayModal = this.props.displayModal;
        let hideModal = this.props.hideModal;
        // let image = this.props.SelectedBe.image_url;
        // let title = this.props.SelectedBe.title;
        // let description = this.props.SelectedBe.description;
        // let keyword = this.props.SelectedBe.keyword;
    
        return (
          <Modal show={displayModal} onHide={this.props.hideModal}>
          <Modal.Dialog>
            <Modal.Header>
              <h2>Lil Horned Beasties</h2>
            </Modal.Header>
            <Modal.Body>
            <Card style={{ width: '26rem'}}>
            <Card.Img src={this.props.source} />
                <Card.Body>
                  <Card.Title>{this.props.Title}</Card.Title>
                  <Card.Text>{this.props.detail}</Card.Text>
                  <Button onClick = {hideModal} variant="primary" size="lg" block>C L O S E</Button>
                </Card.Body>
            </Card>
          </Modal.Body>
          </Modal.Dialog>
          </Modal>
        )
      }
}

export default SelectedBeast;