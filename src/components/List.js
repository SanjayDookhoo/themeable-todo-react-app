import React from "react";
import Card from "./ListCard";
import ActionButton from "./ActionButton";
import {Droppable} from "react-beautiful-dnd";

const List = ({title,cards,listID}) => {
    return(
        <Droppable droppableId={String(listID)}>
            {provided =>(
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                    <h4>{title}</h4>
    
                    {cards.map((card,index) =>(
                        <Card 
                            completed 
                            key={card.id} 
                            index={index} 
                            text={card.text} 
                            id={card.id} 
                        /> //performance update for react by including the id when mapping
                    ))}
    
                    <ActionButton listID={listID}/>
                    {provided.placeholder}
                </div>
            )}

        </Droppable>
    )
};

const styles={ 
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding:8,
        height: "100%",
        marginRight: 8
    }
}

export default List;