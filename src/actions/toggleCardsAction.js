import  {CONSTANTS } from "../actions";   

export const toggleCard = (listID, cardID) => {
    return {
        type: CONSTANTS.TOGGLE_CARD,
        payload: {listID,cardID}
    };
};