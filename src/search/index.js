import React,{PureComponent} from 'react'
import ReactDom from 'react-dom'
import './search.less'
import logo from './images/invoice_has_check.svg'

class Search extends PureComponent{

  render() {
    return <div className='search-text'>
      Search text  
      <img src={logo} alt=""/>
    </div>
  }
}

ReactDom.render(
  <Search />,
  document.getElementById('root')
)