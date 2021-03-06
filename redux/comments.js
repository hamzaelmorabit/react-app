import * as ActionTypes from "./ActionTypes";

export const Comments = (
  state = {
    errMsg: null,
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,

        errMsg: null,
        comments: action.payload,
      };

    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,

        errMsg: action.payload,
      };

    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      // comment.id = state.length;
      // comment.date = new Date().toISOString();
      // console.log(comment, "Comment on redux ligne 10");
      return { ...state, comments: state.comments.concat(comment) };

    default:
      return state;
  }
};
