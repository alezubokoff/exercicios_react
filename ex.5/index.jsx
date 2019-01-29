import React from 'react'
import ReactDOM from 'react-dom'
import Member from './member'
import Family from './family'

ReactDOM.render(
   <Family lastName="Zubokoff">
      <Member name="Alexandre" />
      <Member name="Thayane" />
      <Member name="Sara" />
   </Family> 
   , 
    document.getElementById('app'))