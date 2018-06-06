import React from 'react';

import LongMenu from './LongMenu'

import Send from 'material-ui-icons/Send';
import OpenTab from 'material-ui-icons/ExitToApp';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';


class DataCardCollapsible extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed:true,
      collapsedInner:false,
      tabsAppear:true,
    }
  }

  triggerCollapse(){
    //Handling the animation between collapsed <-> not collapsed content
    // this.setState({collapsedInner:!this.state.collapsedInner}, ()=>{
    if(!this.state.collapsed){
      this.setState({collapsedInner:!this.state.collapsedInner});
      this.setState({tabsAppear:!this.state.tabsAppear});
      this.setState({collapsed:!this.state.collapsed});
      setTimeout(()=>{
        this.setState({collapsedInner:!this.state.collapsedInner});
      },300);
    }
    else{
      this.setState({collapsed:!this.state.collapsed});
      this.setState({tabsAppear:!this.state.tabsAppear});
    }


    // });

  }

  renderTitle(){
    return(
      <div className='data-card-title'>
        {this.state.collapsed ?
          <div>
            {this.props.title}
            <div className='time'>9:44 AM</div>
          </div>
         :
         <div>{ this.props.title }</div>
        }
        <div>
          {this.state.collapsed ? <span className='counter'>{ this.props.data.length }</span> : null}
          <LongMenu/>
        </div>
      </div>
    )
  }

  renderExpanded(){
    return(
      <React.Fragment>
            { this.renderTitle() }
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
        </React.Fragment>
      )
  }

  renderCollapsed(){
    return(
      <div className='data-card collapsed'>
        { this.renderTitle() }
        <img src='/img/recent-data/screenshot/flights.png'/>
      </div>
    )
  }

  render(){
    //This is constant that represents the stack of rects behind the main window
    const tabCount = 3;
    //the offset to push the rects down.
    const offsetAmount = 6;
    return(
        <div className={`data-card wrapper ${this.state.collapsed ? 'collapsed' : ''}`}>
          {
            new Array(tabCount).fill(0).map((row,index)=>{
              return(
                <div className={`filler-blocks ${this.state.tabsAppear ? 'collapsed' : ''}`} style={{top:`${(offsetAmount * index ) + 7}px`}}></div>
              )
            })
          }
          <div className={`animated-content ${this.state.collapsedInner ? 'animate' : ''}`}>
          {
            this.state.collapsed ? this.renderCollapsed() : this.renderExpanded()
          }
          </div>
        <div className='actions-row'>
          {
            this.state.collapsed
            ?
            <ExpandMore onClick={this.triggerCollapse.bind(this)}/>
            :
            <ExpandLess onClick={this.triggerCollapse.bind(this)}/>
          }
          <OpenTab/>
        </div>
      </div>
    )
  }
}

export default DataCardCollapsible
