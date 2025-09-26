import './App.css';
import Login from './component/Login/Login';
import { ApolloProvider } from '@apollo/client/react';
// import client from '../gqlConfig';
// import client from '../gqlConfig';
import client from './Helper/gqlConfig';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Login />
      </ApolloProvider>
    </div>
  );
}

export default App;
