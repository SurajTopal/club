import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import profileReducer from '../features/profile/profileSlice';
import matchReducer from '../features/matches/liveMatchesSlice';
import liveMatchesQuestionReducer from '../features/matches/liveMatchesQuestionSlice';
import fetchWalletBalanceReducer from '../features/wallet/walletBalanceSlice';
import addOrderReducer from '../features/addOrder/addOrderSlice';
import fetchTransactionReducer from '../features/wallet/transactionSlice';
import liveMatchReducer from '../features/matches/liveMatchSlice';
import contestReducer from '../features/contest/contestSlice';
import playerQuestionReducer from '../features/playerQuestion/playerQuestionSlice';
import winningReducer from '../features/winningList/winningSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    counter: counterReducer,
    match: matchReducer,
    liveQuestion: liveMatchesQuestionReducer,
    walletBalance: fetchWalletBalanceReducer,
    addOrder: addOrderReducer,
    transaction: fetchTransactionReducer,
    liveMatch: liveMatchReducer,
    allContest: contestReducer,
    playerQuestion: playerQuestionReducer,
    winning: winningReducer,
  },
});

//Steps :
// 1. create store
// 2. wrap app component under provider
// 3. create slice
// 4. Register reducer in store
