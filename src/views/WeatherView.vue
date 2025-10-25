<template>
  <div class="weather-view">
    <h1>Weather App</h1>
    <div class="search-bar">
      <input type="text" v-model="city" placeholder="Enter city name" @keyup.enter="searchByCity" />
      <button @click="searchByCity">Search</button>
    </div>

    <div v-if="loading" class="loading">Loading weather data...</div>

    <div v-if="error" class="error-message">{{ error }}</div>

    <div v-if="weatherData" class="weather-info">
      <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
      <div class="weather-main">
        <img :src="iconUrl" alt="Weather icon" />
        <p class="temperature">{{ temperature }} &deg;C</p>
      </div>
      <p class="description">{{ weatherData.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WeatherView',
  data() {
    return {
      city: '',
      weatherData: null,
      loading: true,
      error: null,
      apiKey: import.meta.env.VITE_WEATHER_KEY
    };
  },
  computed: {
    temperature() {
      return this.weatherData ? Math.round(this.weatherData.main.temp) : null;
    },
    iconUrl() {
      return this.weatherData ? `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png` : '';
    }
  },
  mounted() {
    if (!this.apiKey) {
      this.error = "Weather API key is not configured. Please set VITE_WEATHER_KEY in your environment variables.";
      this.loading = false;
      return;
    }
    this.fetchCurrentLocationWeather();
  },
  methods: {
    async fetchWeatherData(url) {
      this.loading = true;
      this.error = null;
      this.weatherData = null;
      try {
        const res = await axios.get(url);
        this.weatherData = res.data;
      } catch (e) {
        console.error('Error fetching weather data:', e);
        this.error = 'Failed to fetch weather data. Please check the city name or your network connection.';
      } finally {
        this.loading = false;
      }
    },
    fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;
            await this.fetchWeatherData(url);
          },
          (error) => {
            console.error('Geolocation error:', error);
            this.error = 'Could not get your location. Please search for a city manually.';
            this.loading = false;
          }
        );
      } else {
        this.error = 'Geolocation is not supported by your browser. Please search for a city.';
        this.loading = false;
      }
    },
    searchByCity() {
      if (!this.city) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;
      this.fetchWeatherData(url);
    }
  }
};
</script>

<style scoped>
.weather-view {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.search-bar {
  display: flex;
  margin-bottom: 20px;
}
.search-bar input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}
.search-bar button {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-left: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
}
.loading, .error-message {
  text-align: center;
  margin-top: 20px;
  color: #888;
}
.error-message {
  color: red;
}
.weather-info {
  text-align: center;
}
.weather-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.temperature {
  font-size: 3em;
  margin-left: 10px;
}
.description {
  text-transform: capitalize;
}
</style>