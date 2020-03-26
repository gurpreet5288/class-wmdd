btnWeather.addEventListener("click", () => {
    //alert("Button Pressed");
    const weatherUrl = `http://localhost:3000/_w?location=${inpWeather.value}`;
    fetch(weatherUrl).then((res) =>{
        res.json().then((data) => {
            if(data.error){
                forecast.innerHTML = data.error;
            }else{
                forecast.innerHTML = data.data;
            }
        })
    })
})