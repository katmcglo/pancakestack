import React from 'react';
import Layout from './components/Layout/Layout';
import StackBuilder from './containers/StackBuilder/StackBuilder';


function App() {
  return (
    <div>
      <Layout>
        <StackBuilder></StackBuilder>
      </Layout>
    </div>
  );
}

export default App;
