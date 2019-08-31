import {CONSTANTS} from "../actions";

let cardID=4;

const initialState = [
    {
        title: "To Do",
        id: 0,
        cards: [
            {
                id:0,
                text: "description 1"
            },
            {
                id:1,
                text: "description 2"
            }
        ]
    },
    {
        title: "Completed",
        id: 1,
        cards: [
            {
                id:2,
                text: "disc 1"
            },
            {
                id:3,
                text: "disc 2"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_CARD:
            const newCard ={
                text:action.payload.text,
                id:cardID
            }
            cardID+=1;

            const newState = state.map(list=>{
                if(list.id ===action.payload.listID){
                    return {
                        ...list,
                        cards: [newCard,...list.cards]
                    }
                }else {
                    return list;
                }
            });

            return newState;

        default:
            return state;
    }
}

export default listsReducer