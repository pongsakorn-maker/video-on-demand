import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom';
import {Link as Mlink} from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export type VideoDescriptionProps = {
  title: string;
  chanel: string;
  watched: number;
  url: string;
  imgsrc: string;
  src: string;
};

function VideoCard({ title, chanel, watched, url,src,imgsrc }: VideoDescriptionProps) {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <Grid item xs={12} md={3}>
      <Link to={{pathname: `/${url}`}}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={imgsrc}
              title="video-title"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h1">
                {title}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                <Mlink color="inherit" href="#" onClick={preventDefault}>
                  {chanel}
                </Mlink>
              </Typography>
              <Typography gutterBottom variant="caption" component="h3">
                {'การดู'} {watched} {'ครั้ง'}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default VideoCard;
