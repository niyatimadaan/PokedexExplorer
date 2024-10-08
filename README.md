# Pokedex Explorer

**Pokedex Explorer** is a full-stack web application designed to manage and display Pokémon data. Built using modern technologies such as Next.js, Prisma, tRPC, React Query, and Material UI, this application provides features for fetching individual and multiple Pokémon, adding new entries to the database, and filtering Pokémon by type.

## Features

- **Fetch Single Pokémon**: Retrieve details of a single Pokémon by name, including ID, types, and sprite image.
- **Fetch Multiple Pokémon**: Get data for multiple Pokémon at once using a comma-separated list of names.
- **Add New Pokémon**: Insert new Pokémon into the database through a user-friendly form.
- **Filter Pokémon by Type**: Display Pokémon based on selected types using an interactive filter.
- **Responsive Design**: Enjoy a mobile-friendly and visually appealing interface thanks to Material UI.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **Prisma**: ORM for database management and data fetching.
- **tRPC**: End-to-end type-safe APIs for querying and mutating data.
- **React Query**: Data fetching and state management library.
- **Material UI**: React component library for responsive design and UI components.

## Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or Yarn

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/niyatimadaan/pokedex-explorer.git
   cd pokedex-explorer
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add your database URL:

   ```
   DATABASE_URL=your-database-url
   ```

4. **Run Database Migrations**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Generate Prisma Client**

   ```bash
   npx prisma generate
   ```

6. **Start the Development Server**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` in your browser to see the application in action.

## Usage

- **Home Page**: Navigate to the home page to access the main features of the app.
- **Pokedex**: Use the form to input multiple Pokémon names and view them in a table.
- **Add Pokémon**: Access the form to add new Pokémon to the database.
- **Filter by Type**: Use the filter to view Pokémon by their type.
