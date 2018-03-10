import authorApi from './../api/mockAuthorApi';
import { LOAD_AUTHORS_SUCCESS, DELETE_AUTHOR_SUCCESS } from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function deleteAuthorSuccess(authorId) {
    return { type: DELETE_AUTHOR_SUCCESS, authorId };
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(err => {
            throw err;
        });
    };
}

export function deleteAuthor(authorId) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return authorApi.deleteAuthor(authorId).then(() => {
            dispatch(deleteAuthorSuccess(authorId));
        }).catch(err => {
            throw err;
        });
    };
}