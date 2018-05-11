import React from 'react';
import Card from './cards';
import historyData from '../../data/Recent.js';
import Checkbox from 'material-ui/Checkbox';


export default class Row extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    Object.keys(historyData).map(val=>{
      this.state[val] = false;
    })
  }
  handleCheckChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  renderDate(dateString){
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateArr = dateString.split('-').reverse();
    let datePrint = new Date(dateArr[0],dateArr[2],dateArr[1]);
    return datePrint.toLocaleDateString("en-US",options)
  }
  render(){

    return(
      <div className='card-row-wrapper'>
        {
          Object.keys(historyData).map(date=>{
            return(
              <React.Fragment>
                <div className='card-row-title'>
                  <div className='checkbox'>
                    <Checkbox
                      checked={this.state.checked}
                      onChange={this.handleCheckChange(date)}
                      value="checked"/>
                  </div>
                  <div>
                    {this.renderDate(date)}
                  </div>
                </div>
                <div className='card-row'>
                {
                  historyData[date].map(entry=>{
                    return(
                      <Card {...entry}/>
                    )
                  })
                }
                </div>
              </React.Fragment>
            )
          })
        }
    </div>
    )
  }
}
