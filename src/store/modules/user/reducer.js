import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draftState.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draftState.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draftState.profile = null;
        break;
      }
      default:
    }
  });
}
