import React from 'react'
import User from './user'

export default class List extends React.Component {
  split(data, n) {
    let result = [],
        set = []

    data.forEach((item) => {
      if (set.length === n) {
        result.push(set)
        set = []
      }

      set.push(item)
    })

    if (set.length) {
      result.push(set)
    }

    return result
  }
  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data || this.props.placement !== nextProps.placement || this.props.arrow !== nextProps.arrow
  }
  getList() {
    let list = []
    this.split(this.props.data, 4).forEach((set, i) => {
      list.push(<div className="row" style={{marginBottom: 20}} key={i}>
        {set.map((user, key) => (<User className="col-lg-3" {...user} key={key} placement={this.props.placement} arrow={this.props.arrow} group={this.props.group}/>))}
      </div>)
    })

    return list
  }
  render() {
    return <div>{this.getList()}</div>
  }
}
