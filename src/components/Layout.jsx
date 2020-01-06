import React, { Component } from 'react';
import Header from './Header.jsx';


export default MainContent =>
  class extends Component {
    

    renderComponent(props) {  
      const newProps = {
        ...this.props
      };
      
      return <MainContent { ...newProps } />;
    }  
     
    render() {
      // console.log('desde el layout', this.props);
      return (
        <section className="MainContent">

          <Header />
          { this.renderComponent(this.props) }
        </section>
      );
    }
  };