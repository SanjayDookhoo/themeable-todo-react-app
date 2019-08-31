import React from "react";
import Card from "./ListCard"

const List = ({title}) => {
    return(
        <div style={styles.container}>
        <h4>{title}</h4>
        <Card/>
        </div>
    )
};

const styles={
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding:8
    }
}

export default List;