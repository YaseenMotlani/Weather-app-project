import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({ info }) {
    const HOT_URL = "https://media.nfuonline.com/uploaded_files/_media/13/eb84e56e-8646-447f-8d39-7b35d5670cb5_800.jpg?ratio=1.875&width=800&scale=1";
    const COLD_URL = "https://media.istockphoto.com/id/853844276/photo/blue-ice-and-cracks-on-the-surface-of-the-ice-frozen-lake-under-a-blue-sky-in-the-winter-the.jpg?s=612x612&w=0&k=20&c=gtWZP3TFa9ALn597BTe5atl3GkEsafs6B8bedSo6tvU=";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    // const CLOUD_URL = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29";

    const BG_SUNNY = "https://clipart-library.com/2024/sunny-weather-picture/sunny-weather-picture-8.jpg";
    // const BG_SUNNY = "https://img.lovepik.com/photo/60235/2734.jpg_wh860.jpg"
    const BG_RAINY = "https://www.shutterstock.com/image-photo/rain-nature-background-monsoon-260nw-2320165225.jpg";
    const BG_COLD  = "https://images.unsplash.com/photo-1519681393784-d120267933ba";
    const BG_CLOUDY = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29";


    // const getImage = () => {
    //     // Check temperature first
    //     if (info.temp > 15) return HOT_URL;
    //     if (info.temp <= 15) return COLD_URL;
    //     if (info.humidity > 70) return RAIN_URL;

    //     // Then handle other conditions
    //     if (info.humidity > 70) return RAIN_URL;

    //     // Fallback in case none of the above are true
    //     return COLD_URL; 
    // };

        const getImage = () => {
            let isHot = info.temp > 15;
            let isCold = info.temp <= 15;
            let isHumid = info.humidity > 80;

            if (isHumid && isHot) return RAIN_URL;      // Hot & rainy
            if (isHumid && isCold) return COLD_URL;     // Cold & rainy
            if (isHumid && isHot) return HOT_URL;
            return COLD_URL; // fallback
        };


    const getBackground = () => {
        // const weatherLower = info.weather.toLowerCase();

        // if (weatherLower.includes("rain")) return BG_RAINY;
        // if (weatherLower.includes("cloud")) return BG_CLOUDY;
        // if (info.temp < 15) return BG_COLD;
        // return BG_SUNNY;
        if (info.humidity > 70) return BG_RAINY;
        if (info.temp > 15) return BG_SUNNY;
        return BG_COLD;
    };


    return (
        <div className="InfoBox" style={{ backgroundImage: `URL(${getBackground()})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", padding:"20px", transition: "background-image 0.5s"}} >
            <div className='cardContainer'> 
                <Card sx={{ maxWidth: 345, boxShadow: 10, borderRadius: 5 }}>
                    <CardMedia
                        sx={{ height: 160 }}
                        image={getImage()}
                        // image={info.humidity > 80? RAIN_URL: info.temp > 15? HOT_URL: COLD_URL    }
                        title={`Weather in ${info.city}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontWeight:'bold' }} >
                        {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p> 🌡️ Temperature = {info.temp}&deg;C</p>
                            <p> 💧 Humidity = {info.humidity}%</p>
                            <p> ⬇ Min Temp = {info.tempMin}&deg;C</p>
                            <p> ⬆ Max Temp = {info.tempMax}&deg;C</p>
                            <p>🌤️ The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div> 
        </div>
    );
}