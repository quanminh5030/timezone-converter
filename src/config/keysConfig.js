export const googleCalendarAPI = {
    CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    API_KEY: process.env.REACT_APP_GOOGLEAPI_KEY,
    DISCOVERY_DOCS: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
    SCOPES: "https://www.googleapis.com/auth/calendar.events"
}

export const keysAPI = {
    keyTimeZone: process.env.REACT_APP_GOOGLEAPI_KEY,
    keyWeather: process.env.REACT_APP_WEATHER_KEY
}