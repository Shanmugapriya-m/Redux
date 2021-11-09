import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
export const postComment = (campsiteId, rating, author, text) => dispatch => {
    const newComment = {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', { 
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => { throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
    console.log('post comment', error.message);
    alert('Your comment could not be posted\n Error: ' + error.message);
});
};


export const fetchCampsites = () => dispatch => { //Fetch Campsite

    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
};

export const campsitesLoading = () => ({ //Campsite Loading
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({  //Campsite Failed
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({ //Export Campsite
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});


export const fetchComments = () => dispatch => {     //Fetch Comments
    return fetch(baseUrl + 'comments')
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({  //Comments Failed
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({ //Add Comments
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchPromotions = () => dispatch => {  //Fetch Promotions.
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({ //Promotions Loading
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({ //Promotions Failed
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({ //Add Promotions
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});



//Adding PARTNERS

export const fetchPartners = () => dispatch => { //Fetch Partners

    dispatch(partnersLoading());

    return fetch(baseUrl + 'partners')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(partners => dispatch(addPartners(partners)))
        .catch(error => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({ //Partners Loading
    type: ActionTypes.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({  //Partners Failed
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
});

export const addPartners = partners => ({ //Add Partners
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
});







//Post Feedback


export const postFeedback = (feedback) => {
    

    return fetch(baseUrl + 'feedback', { 
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => { throw error; }
    )
    .then(response => response.json())
    .then(alert("Thank you for yor feedback\n" + JSON.stringify(feedback)))
    .catch(error => {
    console.log('post comment', error.message);
    alert('Your comment could not be posted\nError: ' + error.message);
});
};