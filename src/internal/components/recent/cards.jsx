import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import LongMenu from './longMenu';

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      overlayVisible: false,
      checked:false,
      clicked:false,
    }
    this.triggerOverlay = this.triggerOverlay.bind(this);
  }

  handleCheckChange =  () => {
    this.setState({ checked:!this.state.checked });
  };

  handleClickChange = () => {
    let distFromTop = this.refs.card.offsetTop - 24;
    this.props.scrollTop(distFromTop,!this.state.clicked);
    this.setState({clicked:!this.state.clicked});
    //top nav 64 - padding 48 - text -
  }
  triggerOverlay(arg){
    this.setState({overlayVisible:arg})
  }
  render(){
    const { classes } = this.props;
    return(
      <div className={`card-wrapper-recents ${this.state.clicked ? 'selected' : ''}`} ref='card' onMouseEnter={()=>{this.triggerOverlay(true)}} onMouseLeave={()=>{
        !this.state.checked ?
        this.triggerOverlay(false) : null
      }} onClick={this.handleClickChange.bind(this)}>
        {/* Overlay */}
        {
          this.state.overlayVisible
          ?
          <div className='card-overlay'>
            <div className='checkbox'>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckChange.bind(this)}
                onClick={(e)=>{e.preventDefault();e.stopPropagation()}}/>
            </div>
            <div className='menu'>
              <LongMenu />
            </div>
          </div>
          :
          null

        }
        <div className='card-content'>
          {/* image */}
          <div className='card-image'>
            <img src={`/img${this.props.img}`}/>
          </div>
          {/* Content */}
          <div className='card-title'>
            <div style={{width:'60%'}}>
              <div className='title'>
                <span className='icon'>
                  <img src={`/img${this.props.icon}`}/>
                </span>
                <span className='text'>{this.props.title}</span>
              </div>
              <div className='url'>
                {this.props.url}
              </div>
            </div>
            <div style={{width:'40%'}} className='date'>
              {this.props.date}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Card
