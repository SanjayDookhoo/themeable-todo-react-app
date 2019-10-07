import React, {Component} from 'react';
import List from "./List";
import {connect} from "react-redux"
import ActionButton from "./ActionButton"
import {DragDropContext,Droppable} from "react-beautiful-dnd";
import { sort} from "../actions";
// import logo from './logo.svg';
// import './App.css';
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class App extends Component {

  onDragEnd = (result) => {
    //reordering logic
    //create redux action and reordering logic happens in reducer
    const {destination, source, draggableId,type} =result;

    //if destination is null, it was not dropped in a droppable location
    if(!destination){
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  }

  render () {
    const {lists} = this.props;
    return (
      //the prop function is a function that will run when draggin ends
      <DragDropContext onDragEnd={this.onDragEnd}> 
        <div className="App">
          <h2>hello</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list"> 
            {provided=>(
              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
            
                {/* <List title="first list"/> */}
                {lists.map((list,index) => (
                    <List 
                      listID={list.id}
                      key={list.id} /*performance update for react by including the id when mapping*/
                      title={list.title} 
                      cards={list.cards}
                      index={index} /> 
                  ))} 
                  {provided.placeholder}
                  <ActionButton list />
              </ListContainer>
            )}
          </Droppable>

          
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
