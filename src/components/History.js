import React from 'react';
import ReactDOM from 'react-dom';
import CodesShow from './CodesShow';


class History extends React.Component {
  constructor(props){
    super(props);
  }

    render() {

      const codeStorage = localStorage.getItem("recents");

      if (!codeStorage) {
          return null;
      }

      const codeHistory = codeStorage.split(',').map((code_id) =>
          <li>
              <a className="history-container" href={`/icd-10/codes/${code_id}`}>{code_id}</a>
          </li>
      );

      return(
        <div className="main-code-container history">
          <h1>Hey history</h1>
          {codeStorage ? codeHistory : "nothing to show "}
        </div>
      )
    }
}
export default History;
