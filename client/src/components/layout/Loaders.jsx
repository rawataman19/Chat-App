import { Grid , Skeleton, Stack} from '@mui/material'
import React from 'react'

export const LayoutLoader = () =>{
    return <Grid container height="calc(100vh - 4rem)" spacing={"1rem" }>
          <Grid item  
            xs={4}
            md={3}
            height={'100%'}
          sx={{ width: '20rem', display:{ xs: 'none', sm: 'block' } }}>
            <Skeleton variant='rectangular' height={"100vh"}/>
          </Grid>
          <Grid item xs={12} sm={8} lg={6} sx={{ flexGrow: 1 }}>
              <Stack  spacing={"1rem "}>
                {
                 Array.from({length: 10}).map((_,index) => (
                    <Skeleton key={index} variant='rounded'  height={"5rem"} />
                 ))     
                }
                </Stack>
         <Skeleton variant='rectangular'/>    
          </Grid>
          <Grid item   md={4} lg={3}  sx={{ width: '20rem', 
           display:{ xs: 'none', sm: 'block' } ,

        }}>
        <Skeleton variant='rectangular' height={"100vh"}/>         
         </Grid>
        </Grid>
}