import { call, fork, takeLatest } from 'redux-saga/effects';
import { SET_LOGGED_IN_USER } from './actions/Actions';
import { LoginService } from './services/Login.service';

export function* setLoggedInUser({ payload }: any) {
  yield call(LoginService.setLoggedInUser, payload.uid);
}
export const loginSagas = function* () {
  yield takeLatest(SET_LOGGED_IN_USER, setLoggedInUser);
};

export function* sagas() {
  yield fork(loginSagas);
}
