import {IS_REGISTRATION, IS_LOGIN, IS_MAIN} from "../actionNames";

const initialState = [
    {
        isRegistration: false,
        isLogInPage: false,
        isMain: false
    }
];

export default function linkToggleReducer(state = initialState, action = {}) {
    switch (action.type) {
        case IS_REGISTRATION:
            return [
                ...state,
                {
                    isRegistration: true
                }
            ];
        case IS_MAIN:
            return [
                ...state,
                {
                    isMain: true
                }];
        default:
            return state;
    }
}