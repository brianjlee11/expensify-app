import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'; 
import getVisibleExpenses from './selectors/expenses';
import "react-dates/lib/css/_datepicker.css";
import './styles/styles.scss'
import 'normalize.css/normalize.css'

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 800, createdAt: 295730104 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 500, createdAt: 485736294 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
