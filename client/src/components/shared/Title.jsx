import { Description } from '@mui/icons-material'
import React from 'react'   
import {Helmet}    from 'react-helmet-async' // Assuming you have react-helmet-async installed for managing the document head

const Title = ({title="chat",
    description="This is a chat application",
}) => {
  return (
   <Helmet>
      <title>{title}</title>
        <meta name="description" content={description} />          
    </Helmet>
  )
}

export default Title