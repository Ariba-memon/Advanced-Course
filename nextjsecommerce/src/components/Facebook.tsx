'use client'
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const Facebook = () => {
  return (
    <div>
        
       <FacebookProvider appId="1686542562170774" chatSupport>
        <CustomChat pageId="100779622682887" minimized={true}/>
      </FacebookProvider>    
    </div>
  )
}

export default Facebook
