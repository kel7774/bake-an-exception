import React from 'react'
import { Card, CardContent } from '@material-ui/core'

function ProductCard () {
  return (
    <div className='card'>
      <Card styles={{ height: '100px', width: '100px' }}>
        <CardContent>Card Content</CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
