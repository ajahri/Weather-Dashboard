# ■■ Weather Analytics Dashboard
A modern, fully responsive **Weather Analytics Dashboard** built using **React**, **Redux
Toolkit**, **Recharts**, and the **WeatherAPI**.
It allows users to search for any city, view detailed weather information, track favorite locations, and
visualize temperature trends.
---
## ■ Features
-  Search weather by city name in real time.
-  7-day forecast visualization using **Recharts**.
-  Add or remove **favorite cities** (persisted via `localStorage`).
-  Switch between **Celsius and Fahrenheit** units.
-  Optimized state management with **Redux Toolkit**.
-  Smart caching for faster reloads.
-  Responsive UI with a clean, minimal design.
---
## ■ Project Structure
src/
|- api/
|   - weatherAPI.js # Handles API requests to WeatherAPI
|- app/
|  - store.js # Redux store configuration
|components/
|  - CityCard.jsx
|- FavoritesList.jsx
|  - SearchBar.jsx
|  - SettingsMenu.jsx
|  - WeatherChart.jsx
|  - config.js # API key and base URL
|- features/
|  - weatherSlice.js
|  - favoritesSlice.js
|  - settingsSlice.js
|- hooks/
|  - useFetchWeather.js
| - pages/
| -  Dashboard.jsx
| -  CityDetails.jsx
| - utils/
| - cache.js
| -  formatData.js
| - App.jsx
|  - index.js
---
## ■ Tech Stack
| Category | Technology |
|-----------|-------------|
| Frontend Framework | React 19 |
| State Management | Redux Toolkit |
| Visualization | Recharts |
| API Integration | Axios, WeatherAPI |
| Styling | Tailwind CSS |
| Caching | LocalStorage |
| Deployment | GitHub Pages / Vercel |
---
## ■ API Setup
1. Go to [WeatherAPI.com](https://www.weatherapi.com/)
2. Create a free account and generate an API key.
3. Open the file `src/config.js` and replace:
export const API_KEY = "YOUR_API_KEY_HERE";
with your actual API key.
---
## ■■ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
2. Install dependencies
npm install
3. Run the app locally
npm start
4. Build for production
npm run build
5. Deploy to GitHub Pages (Optional)
npm install gh-pages --save-dev
npm run deploy
---
## ■ Available Scripts
| Command | Description |
|----------|-------------|
| npm start | Runs the app in development mode |
| npm run build | Builds the app for production |
| npm run deploy | Deploys the app to GitHub Pages |
| npm test | Launches the test runner (if tests added) |
---
## ■ Key Components Overview
- SearchBar → Handles city input and triggers weather fetch action.
- CityCard → Displays city name, temperature, condition, and icon.
- FavoritesList → Stores favorite cities in local storage for quick access.
- SettingsMenu → Toggles temperature unit between Celsius and Fahrenheit.
- WeatherChart → Shows hourly temperature data in a line chart using Recharts.
---
## ■■■ Author
**Ajay Shrivas**
Full Stack Java Developer
India
LinkedIn: [https://linkedin.com/in/your-link]
Email: ajayshrivas@example.com
---
## ■ License
This project is licensed under the MIT License.
You're free to use, modify, and distribute it with proper attribution.
> “Forecast your day with data — stay informed, stay ahead.” ■■
