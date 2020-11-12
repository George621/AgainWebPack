import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
import './search.less'
import logo from './images/invoice_has_check.svg'

class Search extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      Text: null
    }
  }

  loadComponent (){
    import('./text.js').then((data) => {
      console.log(data)
      this.setState({
        Text: data
      })
    });
  }

  render() {
    const { Text } = this.state
    return <div className='search-text'>
      {Text ? <Text /> : ''}
      <img src={logo} onClick={this.loadComponent.bind(this)} alt="" />
    </div>
  }
}

ReactDom.render(
  <Search />,
  document.getElementById('root')
)