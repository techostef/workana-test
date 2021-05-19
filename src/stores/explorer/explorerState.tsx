import { ExplorerActionTypeEnum } from '../../enums/ActionTypeEnum';
import ExplorerListEnum from '../../enums/ExplorerListEnum';

export const initialDataExplorer = {
    pageIndex: 1,
    pageSize: 5,
};

let initialState = {};
// initial data to initialState variable
Object.values(ExplorerListEnum).map(
    (value: any) => {
        initialState = { ...initialState, [value]: initialDataExplorer };
        return initialState;
    },
);

export default function explorerState(state: any = initialState, action: any) {
    switch (action.type) {
        case ExplorerActionTypeEnum.ADD_EXPLORER_STATE:
            return { ...state, [action.name]: action.state };
        case ExplorerActionTypeEnum.UPDATE_EXPLORER_STATE_BY_KEY:
            return { 
                ...state,
                [action.name]: { 
                    ...state[action.name], 
                    [action.key]: action.value
                } 
            };
        case ExplorerActionTypeEnum.REMOVE_EXPLORER_STATE:
            return { ...state, [action.name]: null };
        case ExplorerActionTypeEnum.RESET_EXPLORER_STATE:
            return initialState;
        default:
            return state;
    }
}
