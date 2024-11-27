import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransitionList = () => {
    const {transactions} = useContext(GlobalContext);
    const context = useContext(GlobalContext);
    console.log(context) //we can do this or just directly call transactions  
  return (
    <>
    <h3> Histroy</h3>
    <ul className="list">
   
   {transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction}/>))}
            
    </ul>
    </>
  )
}
