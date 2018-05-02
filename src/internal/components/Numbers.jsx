import React from 'react';
import { Chart } from 'react-google-charts';

import TimeSpent from '../data/TimeSpent';
import Categories from '../data/Categories';
import Discoveries from '../data/Discoveries';
import TotalSearches from '../data/TotalSearches';

import {  Ripple } from 'rmwc/Ripple';

export default class Numbers extends React.Component{
  constructor(props) {

    super(props);

    this.state = {
      selections:{
        timeSpent:false,
        categories:false,
        discoveries:false,
        totalSearches:false,
      },
      timeSelected:this.props.timeSelected,
      selectedChart:this.props.selectedChart,
      charts:{
        timeSpent:{
          title:'Time Spent',
          id:'timeSpent',
          type:'Line',
          data: new TimeSpent()
        },
        categories:{
          title:'Browsing Categories',
          id:'categories',
          type:'Sankey',
          data: new Categories()
        },
        discoveries:{
          title:'New Sites Discovered',
          id:'discoveries',
          type:'Line',
          data: new Discoveries()
        },
        totalSearches:{
          title:'Total Searches',
          id:'totalSearches',
          type:'Line',
          data: new TotalSearches()
        }
      }
    }

    this.selectChart = this.selectChart.bind(this);
    this.setChart();
  }

  componentWillReceiveProps(nextProps){
    this.setState({timeSelected:nextProps.timeSelected})
  }

  getSelectedTimeData(data){
    if(this.state.timeSelected === 'last24'){
      return data.last24();
    }
    else if(this.state.timeSelected === 'last7'){
      return data.last7();
    }
    else if(this.state.timeSelected === 'last30'){
      return data.last30();
    }
    if(this.state.timeSelected === 'last12'){
      return data.last12();
    }
    else{
      return data.allTime();
    }
  }

  selectChart(e){
    let newSelections = {...this.state.selections};
    newSelections[this.state.selectedChart] = false;
    newSelections[e.currentTarget.id] = true;
    this.setState({selectedChart:e.currentTarget.id, selections:newSelections});
    this.props.chartChange(e.currentTarget.id);
  }

  setChart(){

    let newSelections = {...this.state.selections};
    newSelections[this.props.selectedChart] = true;
    this.state.selectedChart = this.props.selectedChart;
    this.state.selections = newSelections;
  }

  loadBreakdown(){
    let chart = this.state.charts[this.state.selectedChart];
    if(chart.data.breakdownData){
      let data = chart.data.breakdownData[this.state.timeSelected];
      return (
        <React.Fragment>
        <div className='page-container-title'>
          Breakdown
        </div>
        <div className={'page-container '+this.state.selectedChart}>
          {
            data.map(d=>{
              return (
                <div className='breakdown-block'>
                  { d }
                </div>
              )
            })
          }
        </div>
      </React.Fragment>
      )
    }
    return null
  }

  render() {

    let chart = this.state.charts[this.state.selectedChart];
    let data = this.getSelectedTimeData(chart.data);
    console.log(this.state.charts)
    return (
      <React.Fragment>
      <div className='page-container-title'>
        Browsing Overview
      </div>
      <div id='numbers' className='page-container'>
        <div className='chart-selection'>
          {
            Object.keys(this.state.charts).map(chartType=>{
              let summary = this.getSelectedTimeData(this.state.charts[chartType].data).summary
              return(
                <Ripple>
                  <div
                    className={`chart-selection-box ${this.state.selections[chartType] ? 'selected' : ''}`}
                    id={chartType}
                    onClick={this.selectChart}
                  >
                    <p className='title'>{summary.title} {summary.measure ? `(${summary.measure})` : ``}</p>
                    <p className='number'>{summary.number}</p>
                    {summary.change ?
                      <p className={`change ${summary.change.type}`}>{summary.change.change}</p>
                    :
                      null
                    }
                    </div>
                </Ripple>
              )
            })
          }
        </div>
        <div className={`chart-container`} id={'chart' + chart.id}>
          <Chart
            chartType={chart.type}
            rows={data.rows}
            columns={data.cols}
            options={data.options}
            graph_id={'chart'}
          />
        </div>
    </div>
    {/* <div className='page-container-title'>
      Details
    </div>
    <div className='page-container'>
      <div className='chart-selection'>
        <div
          className={`chart-selection-box`}
          id='timeSpent'
        >
          <p className='title'>Time Spent (minutes)</p>
          <p className='number'>438</p>
          <p className='change positive'>4%</p>
        </div>
      </div>
    </div> */}
    {
      this.loadBreakdown()
    }
    </React.Fragment>
    )

  }
}
