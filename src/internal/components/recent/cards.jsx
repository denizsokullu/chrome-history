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
  handleCheckChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleClickChange = () => {
    this.setState({clicked:!this.state.clicked});
    let distFromTop = this.refs.card.offsetTop - 64 - 48;
    //top nav 64 - padding 48 - text -
  }
  triggerOverlay(arg){
    this.setState({overlayVisible:arg})
  }
  render(){
    const { classes } = this.props;
    return(
      <div className={`card-wrapper-recents ${this.state.clicked ? 'selected' : ''}`} ref='card' onMouseEnter={()=>{this.triggerOverlay(true)}} onMouseLeave={()=>{this.triggerOverlay(false)}} onClick={this.handleClickChange.bind(this)}>
        {/* Overlay */}
        {
          this.state.overlayVisible
          ?
          <div className='card-overlay'>
            <div className='checkbox'>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckChange('checked')}
                value="checked"/>
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
            <div style={{width:'60%',height:'100%'}}>
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
