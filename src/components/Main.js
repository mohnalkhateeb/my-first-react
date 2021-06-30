import React from 'react';
// import reactDom from 'react-dom';
import HornedBeasts from './HornedBeasts';
import SelectedBeast from './SelectedBeast';
import Horend from './Horend.json';
import HorenForm from './HorenForm';

// import { isTemplateElement } from '@babel/types';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayModal: false,
            SelectedBe: {},
            HorenFilterd: Horend
        }
    }
    hideModal = () => { this.setState({ displayModal: false }); }

    showModelBeast = (key) => {
        // key.preventDefault()
        let SelectedB = Horend.find(item => item.title === key)
        console.log(key)
        this.setState({ SelectedBe: SelectedB, displayModal: true })
        console.log(this.state.SelectedBe.title)
    }
    toFilterForm = (HorenFilterd) => { this.setState({ HorenFilterd });}
        render() {
            return (
                <div className='main'>
                    {
                        <HorenForm  filterHorn = {this.toFilterForm}/>
                    }

                    {
                        this.state.HorenFilterd.map((item, key) => {
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
                    />
                    }
                    
                </div>
            )
        }

    }

    export default Main