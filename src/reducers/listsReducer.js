import {CONSTANTS} from "../actions";
import produce from "immer"

let listID=1
const initialState = [
    {
        title: "To Do",
        id: 0,
        cardCount:1,
        cards: [
            {
                id:0,
                text: "Make your first ToDo list!",
                finished:false
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.TOGGLE_CARD:

            const nextState = produce(state, draftState => {
                draftState[action.payload.listID].cards[action.payload.cardID].finished=!draftState[action.payload.listID].cards[action.payload.cardID].finished

            })
            return nextState;

            // return state;
        case CONSTANTS.ADD_LIST:
            const newList ={
                title:action.payload,
                cards: [],
                id: listID,
                cardCount:0
            }
            listID +=1;
            return [...state,newList];
        case CONSTANTS.ADD_CARD:
            const newCard ={
                text:action.payload.text,
                id: state[action.payload.listID].cardCount,
                finished:false //state of completion
            }


            const newState = produce(state, draftState => {

                draftState[action.payload.listID].cardCount+=1;
            })

            const newState2 = newState.map(list=>{
                if(list.id ===action.payload.listID){
                    return {
                        ...list,
                        cards: [...list.cards,newCard]
                    }
                }else {
                    return list;
                }
            });

            return newState2;

        default:
            return state;
    }
}

export default listsReducer