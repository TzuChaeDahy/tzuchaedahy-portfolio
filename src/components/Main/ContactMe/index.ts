export interface FormInfo {
    name: string;
    email: string;
    description: string;
}

export enum ReducerActionType {
    NAME = "name",
    EMAIL = "email",
    DESCRIPTION = "description",
}

export interface ReducerAction {
    type: ReducerActionType;
    payload: FormInfo;
}

export function formReducer(state: FormInfo, action: ReducerAction) {
    switch (action.type) {
        case ReducerActionType.NAME:
            return {
                ...state,
                name: action.payload.name,
            };

        case ReducerActionType.EMAIL:
            return {
                ...state,
                email: action.payload.email,
            };

        case ReducerActionType.DESCRIPTION:
            return {
                ...state,
                description: action.payload.description,
            };

        default:
            return state;
    }
}
