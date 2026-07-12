# 🎬 MovieFlix

A React movie collection app with routing, filtering, and embedded trailers.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![React Router](https://img.shields.io/badge/React_Router-6-red?logo=react-router)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🎞️ **Browse Movies** — Grid layout with posters, ratings, and descriptions
- 🔍 **Filter by Title** — Real-time search through your collection
- ⭐ **Filter by Rating** — Interactive star rating filter
- ➕ **Add New Movies** — Modal form with validation
- 🗑️ **Delete Movies** — Remove movies from your collection
- 📄 **Movie Details Page** — Full description, info badges, and embedded YouTube trailer
- 🔙 **Back Navigation** — Return to home from any detail page

---

## 🚀 Demo

Click any movie card to view its details and trailer!

| Home Page | Detail Page |
|-----------|-------------|
| Movie grid with filters | Full description + embedded trailer |

---

## 🛠️ Tech Stack

- **React 18** — UI library
- **React Router v6** — Client-side routing
- **CSS3** — Custom styling with gradients and animations
- **Local State** — `useState`, `useMemo` hooks

---

## 📁 Project Structure

src/
├── components/
│   ├── AddMovieModal.jsx    # Modal form to add movies
│   ├── Filter.jsx           # Title + rating filters
│   ├── MovieCard.jsx        # Individual movie card
│   ├── MovieList.jsx        # Grid of movie cards
│   └── StarRating.jsx       # Reusable star rating component
├── App.js                   # Main app with routing
├── App.css                  # All styles
├── Movie.js                 # Initial movie data
└── index.js                 # Entry point



---

## 🏃 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Khalloufi992/movieflix.git

# Navigate to project
cd movieflix

# Install dependencies
npm install

# Install React Router
npm install react-router-dom

# Start development server
npm start




