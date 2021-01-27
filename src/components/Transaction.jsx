import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import moneyFormatter from './moneyFormatter';

const Transaction = ({
  transaction: {
    amount,
    text,
    id,
  },
}) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? '-' : '+';

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {`${text} `}
      <span>
        {`${sign}${moneyFormatter(amount)}`}
      </span>
      <button type="button" onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
