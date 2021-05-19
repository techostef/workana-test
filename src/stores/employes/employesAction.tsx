import { EmployesActionTypeEnum } from '../../enums/ActionTypeEnum';
import { IDataItemKey } from '../../interface';
import { IDataEmployes } from './employesState';

export const addItem = (item: IDataEmployes) => ({
    type: EmployesActionTypeEnum.ADD_ITEM, item,
});

export const setItem = (Id = 0, data = {}) => ({
    type: EmployesActionTypeEnum.SET_ITEM, Id, data,
});

export const setItemByKey = (data: IDataItemKey = { id: 0, key: '', value: '' }) => ({
    type: EmployesActionTypeEnum.SET_ITEM_BY_KEY, id: data.id, data,
});

export const restoreData = (data = {}) => ({
    type: EmployesActionTypeEnum.RESTORE, data,
});
