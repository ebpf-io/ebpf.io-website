import React, { useEffect } from 'react'

const SummitPage = () => {
  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.location.href = 'https://cilium.herokuapp.com/'
    }
  },

    [],
  )

  return <>
    <div style={{display: 'grid', placeItems: 'center', height: '100vh', fontSize: '1.5rem'}}>
      <div style={{textAlign: 'center'}}>
        Redirecting to <a href="https://cilium.herokuapp.com/" style={{color: '#4385F5'}}>Slack</a>…
      </div>
    </div>
  </>
}

export default SummitPage
