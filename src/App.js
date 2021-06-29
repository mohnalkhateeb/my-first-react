// import logo from './logo.svg';
import React from 'react';
import SelectedBeast from './components/SelectedBeast';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Horend from './components/Horend.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      SelectedBe: {}
    }
  }
 
  showModelBe = (key)=> {
    let objBeast= Horend.find(item => item.title === key)
        //  <SelectedBeast  title={item.title} source={item.image_url} detail={item.description} key={key}/>
    this.setState({SelectedBe :objBeast}, {showMod:true})
    
}

  hideModal = () => {this.setState({displayModal: false});
  }
  render() {
    return (
      <div>
        <Header />
        <Main 
          showModal={this.showModal} 
        />
        <SelectedBeast 
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          title={this.state.SelectedBe.title}
           source={this.state.SelectedBe.image_url}
            detail={this.state.SelectedBe.description}
        />
        <Footer />
      </div> 
    )
  }
}

export default App;