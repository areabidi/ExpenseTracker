import { transaction } from "mobx";

export default (state, action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            console.log('Current transactions:', state.transactions);
            return{
                ...state, 
                transtactions: state.transactions
                .filter(transaction => transaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                }

        default: 
            return state;
    }
}