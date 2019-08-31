import React from "react";
import Icon from "@material-ui/core/Icon"

class ActionButton extends React.Component{
    state ={
        formOpen: false //form should not open on first render
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
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
        return <p>hello</p>
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

}

export default ActionButton;