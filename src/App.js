import React from 'react';
import TodoList from './todos/TodoList'
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <div className="App-background">
        <TodoList />
      </div>
    </AppContainer>
  );
}

export default App;
