import React from 'react';
import ReactDOM from 'react-dom';
import CodesShow from './CodesShow';


class History extends React.Component {
  constructor(props){
    super(props);
  }

    render() {

        return(
          <div>
            {localStorage.getItem('recents').split(',').map((code_id) => {
              return(
                <li>
                  <a className="history-container" href={`/icd-10/codes/${code_id}`}>{code_id}</a>
                </li>
              )
            })}
          </div>
        )
    }
}
export default History;
