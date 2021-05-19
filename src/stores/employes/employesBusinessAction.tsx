import EmployesApi from "../../api/Employes/EmployesApi";
import * as employesAction from './employesAction';
import ExplorerListEnum from "../../enums/ExplorerListEnum";
import { IApiResult } from "../../interface";
import { IDataEmployes } from "./employesState";

export const getExplorerData = () => (dispatch: any, getState: any) => {
    const state = getState();
    const { explorerState } = state;
    return explorerState[ExplorerListEnum.employesState];
};

export const getFetchData = () => async (dispatch: any) => {
    const body = dispatch(getExplorerData());
    const result: IApiResult = await EmployesApi.getDataAll();
    if (result?.data) {
        const { data } = result;
        dispatch(employesAction.restoreData(data));
    }
    // employesAction.restoreData();
};

export const addItem = (payload: IDataEmployes = {
    name: '',
    email: '',
    position: '',
}) => async (dispatch: any, getState: any) => {
    /* dispatch(startLoading()) */
    const result: IApiResult = await EmployesApi.postItem({
        data: payload,
    })  
    if (result?.data) {
        const { data } = result;
        dispatch(employesAction.addItem(data));
    }  
};