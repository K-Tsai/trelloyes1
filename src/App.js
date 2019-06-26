import React, { Component } from 'react';
import List from './List'
import './App.css';
import Messages from './Messages';

class App extends Component {
  static defaultProps = {
    state: {
      lists: [],
      allCards: {},
    }
  };
  handleDeleteItem() {
    console.log('handle delete item called');
  }
  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteItem={this.handleDeleteItem}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
