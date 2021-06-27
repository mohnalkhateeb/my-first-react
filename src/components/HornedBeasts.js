import React from 'react'
import reactDom from 'react-dom';

class HornedBeasts extends React.Component
{
    render() {
        return(
            <div className="hornedBeasts">
                <h2> {this.props.title}</h2> 
                <img src= {this.props.source}  alt ={this.props.title}/>
                <p> {this.props.detail}</p>
            </div>
        )
    }

}

export default HornedBeasts