import React, {Component} from 'react';
import List from "./List";
import {connect} from "react-redux"
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render () {
    const {lists} = this.props;
    return (
      <div className="App">
        <h2>hello</h2>
        {/* <div style={styles.listContainer}> */}
        {/* <List title="first list"/> */}
        {lists.map(list => (
            <List key={list.id} title={list.title} cards={list.cards} /> /*performance update for react by including the id when mapping*/
          ))} 
        {/* </div> */}
      </div>
    );
  }
}

// const styles ={
//   listContainer: {
//     display: "flex",
//     flexDirection:"row",
//     marginRight: 8
//   }
// };

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
