import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

import useStyles from './styles'

function Products () {
  const classes = useStyles()
  const products = [
    {
      id: 1,
      name: 'Shoes',
      description: 'Running shoes',
      price: '$25'
    },
    {
      id: 2,
      name: 'Macbook',
      description: 'Apple macbook',
      price: '$100'
    }
  ]
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
