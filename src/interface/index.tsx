export interface IDataItemKey {
    id: number | string,
    key: string,
    value: any,
}

export interface IApiResult {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: any,
    statusText?: any,
}

export interface IStateList {
    employesState: any,
    explorerState: any,
}