import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

// import reactDom from 'react-dom';

class HornedBeasts extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            favorited: 0
        }
    }

    favoritedplus = () => {
        this.setState({
            favorited: this.state.favorited + 1
        })
     
        
    }
    render() {
        return(
            // <div className="hornedBeasts">
            //     <h2> {this.props.title}</h2> 
            //     <img onClick = {this.favoritedplus} src= {this.props.source}  alt ={this.props.title} width={250}/>
            //     <p> {this.props.detail}</p>
            //     <p> 💚{this.state.favorited}</p>
            // </div>

            <Card style={{ width: '250px' } } >
                    <Card.Img onClick={this.favoritedplus} variant="top" src={this.props.source} />
                    <Card.Body>
                        <Card.Title>{this.props.Title}</Card.Title>
                        <Card.Text>
                        {this.props.detail}
                        </Card.Text>
                        <Card.Text>
                        ❤️ {this.state.favorited}
                        </Card.Text>
                    </Card.Body>
                </Card>
        )
    }

}

export default HornedBeasts