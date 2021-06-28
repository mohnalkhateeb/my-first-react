import React from 'react';
// import reactDom from 'react-dom';
import HornedBeasts from './HornedBeasts';
import Horend from './Horend.json';

// import { isTemplateElement } from '@babel/types';
class Main extends React.Component {
    render() {
        return (
            <div className='main'>

                {
                Horend.map(item => {
                    return (<HornedBeasts title={item.title } source= {item.image_url} detail={item.description} />
                        )
                })
                }
            </div>
        )
    }

}

export default Main