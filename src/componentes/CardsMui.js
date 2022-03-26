import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import bici from  '../componentes/Cards/bici.jpg';
import { AddShoppingCart } from '@mui/icons-material';
import { makeStyles } from '@mui/material';
import { Rotate90DegreesCcw } from '@mui/icons-material';
import accounting from "accounting";
import './cardsMui.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardsMui() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        action={
     <Typography
     
     variant='h5'
     color='textSecondary'
     >
       {accounting.formatMoney(50, "€")}
     </Typography>
        }
        title="Notebook"
        subheader="En stock"
      />
      <CardMedia
        component="img"
        height="250"
        image={bici}
        alt="Notebook"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Notebook dell
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick>
          <AddShoppingCart  fontSize='large'/>
        </IconButton>
       {Array(4)
       .fill()
       .map((_, i) =>(
         <p>&#11088;</p>
       ))}
      
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
Descripcion          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}