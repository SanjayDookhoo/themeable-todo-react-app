import React from "react";
import Card from "./ListCard";
import ActionButton from "./ActionButton";
import {Droppable,Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import { string } from "prop-types";

const ListContainer = styled.div`
    backgroundColor: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding:8px;
    height: 100%;
    margin-right: 8px;
`

const List = ({title,cards,listID,index}) => {
    return(
        <Draggable draggableId={string(listID)} index={index}>
            {provided =>(
                <ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)}>
                        {provided =>(
                            <div {...provided.droppableProps} ref={provided.innerRef}>
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
                </ListContainer>
            )}
        </Draggable>
        <Droppable droppableId={String(listID)}>
            {provided =>(
                <ListContainer {...provided.droppableProps} ref={provided.innerRef} >
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
                </ListContainer>
            )}

        </Droppable>
    )
};

export default List;