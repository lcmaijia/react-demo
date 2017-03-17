import './demo.less';
import React, {Component} from 'react';
import CircleTimer from './circle_timer';

export default class Demo extends Component{
    constructor(props){
      super(props);
      this.state = {
          reload:false
      }
    }

    getProps(){
        let props={
            width:100,
            height:100,
            radius:20,
            time:5*1000,
            ringColor:'#999',
            defaultColor:'#333' ,
            lineWidth: 5,
        }
        return props;
    }

    getFullProps(){
        let props={
            width:100,
            height:100,
            radius:15,
            time:5*1000,
            ringColor:'#999',
            defaultColor:'#333' ,
            lineWidth: 30,
        }
        return props;
    }

    reload(){
       this.setState({reload:true});
    }

    render(){
        console.log('demo render')
       return <div className='app-circle'>
                <div className='demo-container'>
                    <div className='demo'>
                        <CircleTimer {...this.getProps()}/>
                    </div>
                    <div className='demo'>
                        <CircleTimer {...this.getFullProps()}/>
                    </div>
                    <button className='button' onClick={this.reload.bind(this)}>reload</button>
                </div>
                <div className='demo-container'>

                </div>
           </div>
    }
}