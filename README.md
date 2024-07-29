!Pokedex Banner images/Screenshot 2024-07-29 142051.png

# Pokedex

Welcome to your first generation Pokedex! This project is a React application that fetches and displays information about the first 151 Pokémon from the PokéAPI. Users can see each Pokémon's name and their first ability.

## Features

- Fetches data from the PokéAPI.
- Displays a list of the first 151 Pokémon.
- Shows each Pokémon's name and their first ability.
- Personalized greeting for the user.

## Technologies Used

- React
- Axios
- CSS

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/notAnotherAverageJoe/pokedex-react.git
   cd pokedex
   ```

Install the dependencies:
npm install

Running the Application
To start the application, run:

npm start

This will start the development server and open the application in your default web browser.

Project Structure
pokedex/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Pokemon.js
│ │ ├── Intro.js
│ │ └── ...
│ ├── App.js
│ ├── Pokedex.js
│ ├── Pokedex.css
│ └── index.js
├── package.json
└── README.md

Components
Pokedex: The main component that fetches and displays Pokémon data.
Pokemon: A component that displays individual Pokémon details.
UserPrompt: A component that prompts the user to enter their name.
API
This project uses the PokéAPI to fetch Pokémon data.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
PokéAPI for providing the Pokémon data.
The Pokémon Company for creating such an amazing universe.
Enjoy your journey to becoming a Pokémon Master! 🏆
