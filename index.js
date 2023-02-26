
let city = ``;
const input = document.querySelector('.searchbar');
input.addEventListener('keyup',()=>{
    city = input.value;
    // console.log(input.value)
    list(input.value)
})
const list= async(getCity) => {
    console.log(getCity)
    
    const rse = await fetch('http://localhost:3000/weaths');
    const result = await rse.json()
    // console.log(res);
    let content = ``;

    if(getCity)
    {
       const newResult = result.filter(item => item.city === getCity)


       newResult.forEach(e => {
        content += `
        <h2 class="city">${e.city}</h2>
        <div class="temperature"> ${e.temps}</div>
        <div class="description">${e.description}</div>
        <div class="humidity">${e.humidity}</div>
        <div class="wind">${e.wind}</div>
        `
    });
    const post = document.querySelector('.weather');
    post.innerHTML = content;
        return
    }
    else{
        result.forEach(e => {
            content += `
            <h2 class="city">${e.city}</h2>
            <div class="temperature"> ${e.temps}</div>
            <div class="description">${e.description}</div>
            <div class="humidity">${e.humidity}</div>
            <div class="wind">${e.wind}</div>
            `
        });
        const post = document.querySelector('.weather');
        post.innerHTML = content;
    }
    
    
}
 list(city)










































//  let weather = {
//      "apikey": "a051f7ea2d000e8c78b5bf6a6968592e",
//     fetchweather: function(city){
//          fetch(
//              "https://api.openweathermap.org/data/2.5/weather?q= " 
//              + city 
//              + "&units=metric&appid=" 
//              + this.appKey

//         )
//         .then((response) => response.json())
//         .then((data) => this.displayweather(data));
//     },
//     displayweather: function(data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { tempureture, humidity} = data.main;
//     const { speed } = data.wind;
//     document.querySelector(".city").innerText = "Weather in " + name;
//     // document.querySelector(".icon").src = 
//     }
// };




























// weatherAPIKey = 'a051f7ea2d000e8c78b5bf6a6968592e';
// weatherBaseEndpoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' +weatherAPIKey;

// let getweatherByCityName = async(city) => {
//     let endpoint = weatherBaseEndpoint + '&q=' + city;
//     let response = await fetch(endpoint);
//     let weather = await response.json();
//     console.log(weather);
// }
// getweatherByCityName('New york');