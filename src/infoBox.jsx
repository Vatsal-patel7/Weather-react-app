import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css"

export default function InfoBox({info}) {

  const INIT_image ="https://plus.unsplash.com/premium_photo-1673240845240-2fce9077a6e9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  return (
    <div className='infoBox'>
      <div className='infoContent'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image= {INIT_image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {info.city}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature: {info.temp}</p>
            <p>Humidity: {info.humidity}</p>
            <p>Min Temp: {info.min}</p>
            <p>Max Temp: {info.max}</p>
            <p>The weather can be described as {info.weather} and the Temperature feels like {info.feelsLike}&deg;C</p>

          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}   