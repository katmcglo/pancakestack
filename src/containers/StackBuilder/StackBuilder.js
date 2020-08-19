import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import PancakeStack from '../../components/PancakeStack/PancakeStack';

class StackBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  render() {
    return (
      <Auxiliary>
        <PancakeStack ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}

export default StackBuilder;
