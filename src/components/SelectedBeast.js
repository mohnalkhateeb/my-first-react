import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card';
// import { Modal, Button } from 'react-bootstrap'

class SelectedBeast extends React.Component {
    render(){
  
        
    
        return (
          <Modal show={this.props.displayModal} onHide={this.props.hideModal}>
          <Modal.Dialog>
            <Modal.Header>
              <h2>{this.props.title}</h2>
            </Modal.Header>
            <Modal.Body>
            <Card style={{ width: '26rem'}}>
            <Card.Img src={this.props.source} />
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>{this.props.detail}</Card.Text>
                  <Button onClick = {this.props.hideModal} variant="primary" size="lg" block>C L O S E</Button>
                </Card.Body>
            </Card>
          </Modal.Body>
          </Modal.Dialog>
          </Modal>
        )
      }
}

export default SelectedBeast;