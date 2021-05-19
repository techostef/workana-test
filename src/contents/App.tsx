import React, { useMemo, useState } from "react";
import * as employesBusinessActionImp from "../stores/employes/employesBusinessAction";
import Table from '../components/Table/Table'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IStateList } from "../interface";
import "./App.scss";
// props
// hooks
// render props

const mapStateToProps = (state: IStateList) => {
  return {
    employesState: state.employesState,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    employesBusinessAction: bindActionCreators(employesBusinessActionImp, dispatch),
  }
}

interface IApp {
  employesBusinessAction: any,
  employesState: any,
}

const App: React.FC<IApp> = ({
  employesBusinessAction,
  employesState,
}) => {
  const [counter, setCounter] = useState(0)
  const [paginationConf, setPaginationConf] = useState({
    pageIndex: 1,
    pageSize: 5,
    pageOptionSize: [5, 10, 20]
  })
  useMemo(() => {
    employesBusinessAction.getFetchData();
  }, [])

  const columnData = useMemo(() => {
    return [
      {
        icon: 'i',
        key: 'name',
        label: 'Name',
        hidden: false,
      },
      {
        icon: '@',
        key: 'email',
        label: 'Email',
        hidden: false,
      },
      {
        icon: '@',
        key: 'position',
        label: 'Position',
        hidden: false,
      },
    ]
  }, [])

  const onClickNew = () => {
    employesBusinessAction.addItem({
      name: `name add ${counter}`,
      email: `email${counter}@gmail.com`,
      position: `head position ${counter}`,
    })
    setCounter(counter + 1)
  }

  const resetCounter = () => {
    setCounter(0);
  }

  const onChangePageIndex = (pageIndex: number) => {
    setPaginationConf({
      ...paginationConf,
      pageIndex,
    })
  }

  return (
    <div className="app-container">
      <div className="reset-counter">
        <div className="info">
          Counter: {counter}
        </div>
        <button
          onClick={resetCounter}
        >
          Reset Counter
        </button>
      </div>
      <Table 
        columnData={columnData}
        data={employesState?.toJS()}
        onClickNew={onClickNew}
        onChangePageIndex={onChangePageIndex}
        paginationConf={paginationConf}
        usePagination={true}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
