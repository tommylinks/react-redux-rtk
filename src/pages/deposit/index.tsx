import React from 'react';
import { useAppSelector, useAppDispatch } from '@utils/reduxHooks';
import { useGetPokemonByNameQuery } from '@utils/services/app';
import { decrement, increment, incrementByAmount } from './slices/depositSlice';

const DepositPage = () => {
  const count = useAppSelector((state) => state.borrow.value);
  const dispatch = useAppDispatch();
  const { data: pokemon } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <div>
      <h1>Deposit page: {pokemon?.name}</h1>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button type="button" onClick={() => dispatch(incrementByAmount(10))}>
        add 10
      </button>
      <div>{count}</div>
    </div>
  );
};

export default DepositPage;
