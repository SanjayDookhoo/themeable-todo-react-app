import React, {Component} from 'react';
import List from "./List";
import {connect} from "react-redux"
import ActionButton from "./ActionButton"
import {DragDropContext} from "react-beautiful-dnd";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  onDragEnd = () => {
    //reordering logic
  }

  render () {
    const {lists} = this.props;
    return (
      //the prop function is a function that will run when draggin ends
      <DragDropContext onDragEnd={this.onDragEnd}> 
        <div className="App">
          <h2>hello</h2>
          <div style={styles.listContainer}>
            
            {/* <List title="first list"/> */}
            {lists.map(list => (
                <List 
                  listID={list.id}
                  key={list.id} /*performance update for react by including the id when mapping*/
                  title={list.title} 
                  cards={list.cards} /> 
              ))} 
              <ActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const styles ={
  listContainer: {
    display: "flex",
    flexDirection:"row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
