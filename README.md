# Pin Drop with Remarks Application

This application allows users to interact with a map by dropping pins, adding remarks, and saving the pin's details. The pins are displayed in a sidebar, where users can navigate to any pin and highlight its location on the map. Optionally, the app can fetch the address of the pin's location using an open API.

## Features

- **Interactive Map**: Users can click anywhere on the map to drop a pin.
- **Pin Details**: A popup form appears after dropping the pin, allowing users to add remarks.
- **Address Fetching**: Automatically fetch the address of the dropped pin's latitude and longitude (optional).
- **Pin List Sidebar**: All saved pins are displayed in a sidebar, showing remarks and fetched addresses.
- **Pin Navigation**: Clicking on any pin from the sidebar navigates the map to the location of the selected pin and highlights it.
- **Local Storage**: Persist pins, remarks, and fetched addresses across sessions using local storage.

## Technologies Used

- **React**: Frontend framework to manage the application state and UI.
- **Leaflet**: A powerful open-source JavaScript library for interactive maps.
- **React-Leaflet**: React bindings for Leaflet for easy map manipulation.
- **OpenStreetMap Tile Layer**: Used for map tiles.

## How I Built It

### 1. Initial Setup
I started by bootstrapping a React application using `create-react-app`. Then, I installed necessary dependencies like `react-leaflet` and `leaflet` for integrating the map functionality.

```bash
npx create-react-app pin-drop-map
cd pin-drop-map
npm install react-leaflet leaflet
