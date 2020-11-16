import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
import './index.less'

class Index extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

  

  render() {
    return <div className='index-text'>
      index
    </div>
  }
}

ReactDom.render(
  <Index />,
  document.getElementById('root')
)