import React from 'react';

import LongMenu from './LongMenu'

import Send from 'material-ui-icons/Send';
import OpenTab from 'material-ui-icons/ExitToApp'

class DataCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='data-card wrapper'>
        <div className='data-card-title'>
          <div>
            {this.props.title}
          </div>
          <LongMenu/>
        </div>
        {
          this.props.data.map((row,index)=>{
            return(
              <React.Fragment>
                <div className='data-card-row'>
                  <img src={`/img${row.icon}`}/>
                  <div className='content-col'>
                    <p>{row.title}</p>
                    <p>{row.url}</p>
                  </div>
                  <span>
                    <div>{row.time}</div>
                    <div className='icons'>
                      <Send/>
                      <OpenTab/>
                    </div>
                  </span>
                </div>
                {
                  this.props.data.length - 1 > index
                  ?
                  <div className='split-line'></div>
                  :
                  null
                }
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}

export default DataCard
