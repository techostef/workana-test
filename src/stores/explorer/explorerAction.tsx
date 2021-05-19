import { ExplorerActionTypeEnum } from '../../enums/ActionTypeEnum';

export const addExplorerState = (name = '', state = null) => (
    { type: ExplorerActionTypeEnum.ADD_EXPLORER_STATE, name, state }
);

export const updateExplorerStateByKey = (name = '', key = '', value = '') => (
    { type: ExplorerActionTypeEnum.UPDATE_EXPLORER_STATE, name, key, value }
);

export const removeExplorerState = (name = '') => (
    { type: ExplorerActionTypeEnum.REMOVE_EXPLORER_STATE, name }
);
