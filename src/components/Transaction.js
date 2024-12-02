import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const { deleteTransaction} = useContext(GlobalContext);
   // const { addTransaction} = useContext(GlobalContext);

   const sign = transaction.amount < 0 ? '-' : '+';
    return(
        
        <li className={transaction.amount < 0? 'minus' : 'plus'}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
           
        <button onClick={ () => {
            console.log('Deleting transaction with ID:', transaction.id)
            deleteTransaction(transaction.id)}

        } 
        className='delete-btn'>x</button>
        </li>
       
    );

};