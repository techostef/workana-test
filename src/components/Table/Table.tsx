import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './Table.scss'

interface IColumnData {
    icon: string,
    key: string,
    label: string,
    hidden: boolean,
}

interface IPaginationConf {
    pageIndex: number,
    pageSize: number,
    pageOptionSize: number[],
}

interface ITable {
    columnData: IColumnData[],
    data: any,
    onClickNew?: Function | any,
    onChangePageIndex?: Function | any,
    paginationConf?: IPaginationConf,
    usePagination?: boolean,
}

const Table: React.FC<ITable> = (props) => {
    const {
        columnData,
        data,
        onClickNew,
        onChangePageIndex,
        paginationConf,
        usePagination,
    } = props;

    const columnDataVisible = useMemo(() => {
        return columnData.filter((item) => item?.hidden !== true)
    }, [columnData])

    const pageIndex = useMemo(() => {
        return paginationConf?.pageIndex ?? 1
    }, [paginationConf?.pageIndex])

    const pageSize = useMemo(() => {
        return paginationConf?.pageSize ?? 5
    }, [paginationConf?.pageSize])

    const gridStyleLocal = useMemo(() => {
        let style = '';
        const lengthVisible = columnDataVisible
        for(let i = 0; i < lengthVisible.length; i ++) {
            style += 'auto ';
        }
        return style;
    }, [columnData.length])

    const renderHeader = () => {
        const result = (
            columnDataVisible.map((item, idx) => (
                <div 
                    className="table-header-item"
                    key={`table-header-item-${idx}`}
                >
                    <div className="icon">{item?.icon}</div>
                    <div className="text">{item?.label}</div>
                </div>
            ))
        )
        return result;
    }

    const renderItem = (itemContent: any, idxParent: any) => {
        let listShowItem: any = columnDataVisible;
        const result = listShowItem.map((item: any, idx: any) => (
            <div 
                className="table-item" 
                key={`table-item-${idx}`}
                style={{
                    borderLeft: idx === 0 ? '0px solid' : '',
                }}
            >
                <div className="content">{itemContent[item?.key]}</div>
            </div>
        ))
        return result;
    }

    const renderBody = () => {
        let newData = [...data];
        if (usePagination) {
            const start = ((pageIndex - 1) * pageSize) + 1;
            const max = start + (pageSize - 1);
            newData = newData.filter((item, idx) => {
                idx = idx + 1;
                if (idx >= start && idx <= max) return true;
                return false;
            })
        }
        return newData.map((item: any, idx: any) => renderItem(item, idx));
    }

    const renderButtonNew = () => {
        return (
            <div 
                className="table-new-button" 
                onClick={onClickNew}
                style={{
                    borderLeft: '0',
                }}
            >
                <div className="content">+ New</div>
            </div>
        );
    }

    const renderPagination = () => {
        let countPagination: any = data.length / pageSize;
        countPagination = Math.ceil(countPagination);
        let itemPaginations = []
        for(let i = 0; i < countPagination; i ++) itemPaginations.push((
            <div className="item-paginations" onClick={() => onChangePageIndex(i + 1)}>
                {i + 1}
            </div>
        ))
        return (
            <div className="container-pagination">
                <div className="content-pagination">
                    {itemPaginations.map((item) => item)}
                </div>
            </div>
        )
    }

    return (
        <>
            <div 
                className="table"
                style={{
                    gridTemplateColumns: gridStyleLocal,
                }}
            >
                {renderHeader()}
                {renderBody()}
            </div>
            {renderButtonNew()}
            {usePagination && renderPagination()}
        </>
    );
};

Table.defaultProps = {
    columnData: [],
    data: [],
    onClickNew: () => {},
    onChangePageIndex: () => {},
};

Table.propTypes = {
    columnData: PropTypes.any,
    data: PropTypes.any,
    onClickNew: PropTypes.func,
    onChangePageIndex: PropTypes.func,
};

export default React.memo(Table);
