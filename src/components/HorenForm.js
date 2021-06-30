import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Horend from './Horend.json';


class HorenForm extends React.Component {
    filterHorn = (event) => {
        const hornsNum = parseInt(event.target.value);
        let HorenFilterd = Horend;
        if (hornsNum) {
            HorenFilterd = Horend.filter((item) => item.horns === hornsNum);
        }
        this.props.filterHorn(HorenFilterd)
    }
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="hornedChoices.ControlSelect1">
                        <Form.Label>View a beast by number of horns </Form.Label>
                        <Form.Control  as="select" onChange={this.filterHorn}>
                            <option>All</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default HorenForm;