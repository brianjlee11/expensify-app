import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
		type: 'INCREMENT',
		incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({count = 1} = {}) => ({
	type: 'SET',
	count
}); 

// 1. Reducers are pure functions, function is not pure if it depends on variables
// outside of the function
// 2. Never change the state or action directly, read-only

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			// check if its number
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'RESET':
			return {
				count: 0
			};
		case 'SET':
			return {
				count: action.count
			};
		default:
			return state;
	}
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));
