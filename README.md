<img src="./weather-app-demo.gif" alt="demo-video" width = "332">

# Weather Me

Weather Me is a simple web application that allows users to search for current weather information by city name. It fetches data from the OpenWeatherMap API and displays the city's name, temperature, weather description, and additional weather details like humidity and pressure.

## Features

- Search for the weather by city name
- Displays the city's current temperature and weather conditions
- Shows additional weather information including humidity and pressure
- User-friendly interface

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/samuadda/weather-forecast-me.git
```

2. Navigate to the project directory:
```bash
cd weather-forecast-me.git
```
3.Open index.html in your preferred web browser.

## Usage
1. Enter the name of the city you want to check the weather for in the search bar.
2. Click the search button or press Enter.
3. The application will display the current weather information for the specified city.

## API Key
To use the OpenWeatherMap API, [sign up for an API key](https://home.openweathermap.org/users/sign_up) on the OpenWeatherMap website. Replace the placeholder in your `app.js` file:
 ```JavaScript
let apiKey = "YOUR_API_KEY";
```

## File Structure
```bash
weather-me/
│
├── index.html         # Main HTML file
├── styles/            # Contains CSS files
│   └── style.css      # Styles for the application
├── scripts/           # Contains JavaScript files
│   └── app.js         # Main JavaScript file
└── assets/            # Contains images and icons
    ├── cloud-angled-rain-stroke-rounded.svg
    ├── humidity-stroke-rounded.svg
    ├── moon-angled-rain-zap-stroke-rounded.svg
    └── search-01-stroke-rounded.svg
```

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License
This open-source project is available under the [MIT License](https://opensource.org/license/mit).

## Acknowledgements
- [OpenWeatherMap](https://opensource.org/license/mit) for providing the weather data.
- 
