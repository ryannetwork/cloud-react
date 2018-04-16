import React from 'react';
import ReactDOM from 'react-dom';
import CodesShow from './CodesShow';
import SmallSearchForm from './SmallSearchForm';


class History extends React.Component {
  constructor(props){
    super(props);
  }

    render() {

      const codeStorage = localStorage.getItem("recents");

      if (!codeStorage) {
          return null;
      }

      const codeHistory = codeStorage.split(',').map((code_id, index) =>
          <li className="list-item" key={index}>
              <a className="history-container" href={`/icd-10/codes/${code_id}`}>{code_id}</a>
          </li>
      );

      return(
        <div className="main-code-container history">
          <h1 className="icd">ICD-10 Medical Coding Reference</h1>
          <SmallSearchForm />
          <h2>Recent codes</h2>
          <ul className="list">
              {codeStorage ? codeHistory : "nothing to show "}
          </ul>
        </div>
      )
    }
}
export default History;
