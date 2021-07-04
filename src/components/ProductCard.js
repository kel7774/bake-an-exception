import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 350
  }
})

function ProductCard () {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image='../assets/photos/Fruit.png'
        title='Fruit Cake'
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          Sample Cake
        </Typography>
        <Typography variant='body2'>
          Description about Cake, ect.
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Buy</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
