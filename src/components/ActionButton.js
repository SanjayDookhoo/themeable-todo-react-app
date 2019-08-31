import React from "react";
import Icon from "@material-ui/core/Icon"
import Textarea from 'react-textarea-autosize';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import {connect} from "react-redux"
import {addCard} from "../actions";

class ActionButton extends React.Component{
    state ={
        formOpen: false, //form should not open on first render
        text: ""
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = e =>{
        this.setState({
            text: e.target.value
        })
    }

    handleAddCard =()=>{
        const {dispatch,listID} = this.props;
        const {text} = this.state;

        if(text) {
            this.setState({
                text: "" //resets the input field for the next time a card needs to be added
            })

            dispatch(addCard(listID,text))
        }
    }

    renderAddButton = () => {
        return (
            <div onClick={this.openForm} style={styles.addBtnStyle}>
                <Icon>add</Icon>
                <p>Add ToDo Card Item</p>
            </div>
        )
    }

    renderForm = () => {
        // const { list } = this.props;

        return <div>
            <Card style={{
                minHeight: 80,
                minWidth:270,
                padding: "6px 8px 2px"
            }}>
                {/*an auto height increasing text box*/}
                <Textarea 
                    placeholder="enter to do item here"
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    
                    style={{
                        resize:"none",
                        width:"100%",
                        overflow:"hidden",
                        outline: "none",
                        border: "none"
                    }}

                    /> {/*onBlur means clicking outside textarea*/}
            </Card>
            <div style={styles.formButtonGroup}>
                <Button 
                    onMouseDown={this.handleAddCard} //onMouseDown function fires before onBlur Function, which is why onClick function was not used at this pointt 
                    variant="contained" 
                    style={{color:"white", backgroundColor:"#5aac44"}}
                >
                    Add ToDo Card

                </Button>

                <Button 
                    variant="contained" 
                    style={{color:"white", backgroundColor:"#6c757d"}}
                >
                    Close

                </Button>
                
            </div>
        </div>

        // return <p>hello</p>
    }

    render(){
        const { completedList } = this.props;
        if (completedList)
            return null;
        else{
            if (this.state.formOpen )
                return this.renderForm();
            else 
                return this.renderAddButton();
        }

    }
}

const styles={
    addBtnStyle: {
        opacity: 0.5,
        display: "flex",
        alignItems: "center",
        curson: "pointer",
        borderRadius: 3,
        height: 35,
        widht: 270,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex", 
        alignItems: "center"
    }
}

export default connect()(ActionButton);