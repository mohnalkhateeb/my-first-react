import React from 'react';
import reactDom from 'react-dom';
import HornedBeasts from './HornedBeasts';
class Main extends React.Component
{
    render() {
        return(
            <div>
            <HornedBeasts title='Forest' source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5omSUVfXJSD6O2yyNQ8yJveYS7Hb2Yll7Yw&usqp=CAU'  detail ='Here is the scary beauty and true fantasy'/>
            <HornedBeasts title='dreset' source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9j8N50X1BKfrDxai7-pVYHnTQqbjI0vL3EA&usqp=CAU'  detail ='The beauty of suffering and frightening calm'/>
            <HornedBeasts title='sea' source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7F9VbpOs4y0-6PQmx7EzMkfW8onuSi6iH8g&usqp=CAU'  detail ='The beauty of the unknown and the fear of the moment'/>
    
            </div>
        )
    }

}

export default Main