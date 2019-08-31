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
        id: 0,
        cards: [
            {
                id:0,
                text: "disc 1"
            },
            {
                id:1,
                text: "disc 2"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default listsReducer