import React from 'react';
// import reactDom from 'react-dom';
import HornedBeasts from './HornedBeasts';
import SelectedBeast from './SelectedBeast';
import Horend from './Horend.json';

// import { isTemplateElement } from '@babel/types';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayModal: false,
            SelectedBe: [{
                image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
                title: "UniWhal",
                description: "A unicorn and a narwhal nuzzling their horns",
                keyword: "narwhal",
                horns: 1
            }]
        }
    }
    hideModal = () => { this.setState({ displayModal: false }); }

    showModelBeast = (key) => {
        key.preventDefault()
        let objBeast = Horend.find(item => item.title === key)

        this.setState({ SelectedBe: objBeast }, { displayModal: true })

    }

    render() {
        return (
            <div className='main'>

                {
                    Horend.map((item, key) => {
                        return (<HornedBeasts showModelBeast={this.showModelBeast} title={item.title} source={item.image_url} detail={item.description} key={key} />
                        )
                    })
                }
                {<SelectedBeast
                    displayModal={this.state.displayModal}
                    hideModal={this.hideModal}
                    title={this.state.SelectedBe.title}
                    source={this.state.SelectedBe.image_url}
                    detail={this.state.SelectedBe.description}
                />}


            </div>
        )
    }

}

export default Main