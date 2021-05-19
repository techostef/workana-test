import { EmployesActionTypeEnum } from '../../enums/ActionTypeEnum';
import { List } from 'immutable';

let initialState = List([]);

export interface IDataEmployes {
    id?: any,
    name: any,
    email: any,
    position: any,
} 
const dataEmployes: IDataEmployes = {
    id: 0,
    name: '',
    email: '',
    position: '',
}

export default function employesState(state: any = initialState, action: any) {
    let index;
    let newState;
    switch (action.type) {
        case EmployesActionTypeEnum.ADD_ITEM:
            return state.push(Object.assign({}, action.item));
        case EmployesActionTypeEnum.SET_ITEM:
            index = state.findIndex((item: IDataEmployes) => item.id === action.id);
            if (index === -1) return state;
            newState = state.update(index, () => action.data);
            return newState;

        case EmployesActionTypeEnum.SET_ITEM_BY_KEY:
            index = state.findIndex((item: IDataEmployes) => item.id === action.id);
            if (index === -1) return state;
            newState = state.update(index, (item: IDataEmployes) => ({
                ...item,
                [action.data.key]: action.data.value,
            }));
            return newState;

        case EmployesActionTypeEnum.RESET:
            return initialState;
        case EmployesActionTypeEnum.RESTORE:
            return List(action.data);
        default:
            return state;
    }
}
