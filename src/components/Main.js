import React from 'react';
// import reactDom from 'react-dom';
import HornedBeasts from './HornedBeasts';
// import SelectedBeast from './SelectedBeast';
import Horend from './Horend.json';

// import { isTemplateElement } from '@babel/types';
class Main extends React.Component {
   
    render() {
        return (
            <div className='main'>

                {
                    Horend.map((item,key) => {
                        return (<HornedBeasts showModelBeast={this.props.showModelBe} title={item.title} source={item.image_url} detail={item.description} key={key}/>
                        )
                    })
                }
               
            </div>
        )
    }

}

export default Main