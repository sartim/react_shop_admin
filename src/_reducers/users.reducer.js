import {userConstants} from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.USER_REQUEST:
      return {};
    case userConstants.USER_SUCCESS:
      return action.user;
    case userConstants.USER_FAILURE:
      return {};
    default:
      return state
  }
}

export function online_users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_ONLINE_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_ONLINE_SUCCESS:
      return {
        items: action.online_users
      };
    case userConstants.GETALL_ONLINE_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
