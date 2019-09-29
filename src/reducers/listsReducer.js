import {CONSTANTS} from "../actions";

let cardID=4;
let listID=2

const initialState = [
    // {
    //     title: "To Do",
    //     id: 0,
    //     cards: [
    //         {
    //             id:0,
    //             text: "description 1"
    //         },
    //         {
    //             id:1,
    //             text: "description 2"
    //         }
    //     ]
    // },
    // {
    //     title: "Completed",
    //     id: 1,
    //     cards: [
    //         {
    //             id:2,
    //             text: "disc 1"
    //         },
    //         {
    //             id:3,
    //             text: "disc 2"
    //         }
    //     ]
    // }

    //id of list and card cant be the same, dnd is confused (soln: make a custom string, string temporals)
    {
        title: "To Do",
        id: `list-${0}`,
        cards: [
            {
                id:`card-${0}`,
                text: "description 1"
            },
            {
                id:`card-${1}`,
                text: "description 2"
            }
        ]
    },
    {
        title: "Completed",
        id: `list-${1}`,
        cards: [
            {
                id:`card-${2}`,
                text: "disc 1"
            },
            {
                id:`card-${3}`,
                text: "disc 2"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList ={
                title:action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID +=1;
            return [...state,newList];
        case CONSTANTS.ADD_CARD:
            const newCard ={
                text:action.payload.text,
                id: `card-${cardID}`
            }
            cardID+=1;

            const newState = state.map(list=>{
                if(list.id ===action.payload.listID){
                    return {
                        ...list,
                        cards: [...list.cards,newCard]
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