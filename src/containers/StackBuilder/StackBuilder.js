import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import PancakeStack from '../../components/PancakeStack/PancakeStack';

class StackBuilder extends Component {
  render() {
    return (
      <Auxiliary>
        <PancakeStack/>
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}

export default StackBuilder;
