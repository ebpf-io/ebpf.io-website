import React from 'react'
import { Redirect } from '@reach/router'

const SummitPage = () => <>
  <div style={{display: 'grid', placeItems: 'center', height: '100vh', fontSize: '1.5rem'}}>
    <div style={{textAlign: 'center'}}>
      Redirecting to <a href="https://ebpf.io/summit-2021" style={{color: '#4385F5'}}>https://ebpf.io/summit-2021</a>…
    </div>
  </div>

  <Redirect noThrow to={`/summit-2021`} />
</>

export default SummitPage
