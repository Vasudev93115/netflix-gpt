# 🎬 MoviQs (AI Movie Recommendation Platform)

MoviQs is a modern, responsive, Netflix-inspired movie streaming interface enhanced with **AI-powered movie recommendations**. The application integrates GPT-based natural language understanding with real-time movie data from TMDB, allowing users to discover movies intelligently using simple prompts.

This project demonstrates real-world frontend engineering practices, API integration, authentication, state management, and AI usage.

---

## 🚀 Live Demo

> https://moviqs-2e707.web.app/

---

## 🛠️ Tech Stack

### Frontend

* React.js (Functional Components & Hooks)
* Redux Toolkit (Global State Management)
* Tailwind CSS (Responsive UI)

### Backend / Services

* Firebase Authentication (Sign In / Sign Up)
* TMDB API (Movie Data)
* GPT API (AI Movie Recommendations)

### Tools

* JavaScript (ES6+)
* Git & GitHub

---

## ✨ Features

### 🔐 Authentication

* User Sign In / Sign Up using Firebase
* Secure session handling

### 🎥 Movie Browsing

* Now Playing Movies
* Popular Movies
* Top Rated Movies
* Upcoming Movies

### 🤖 AI-Powered Search (GPT)

* Natural language movie search
* GPT suggests relevant movies
* Results mapped with TMDB for posters & details
* Multi-language GPT search support

### 📱 UI / UX

* Netflix-style hero section with trailer background
* Horizontal scrollable movie rows
* Fully responsive (Mobile, Tablet, Desktop)
* Clean and modern Tailwind UI

---

## 🧠 How AI Search Works

1. User enters a natural language query (e.g., *"movies like Inception"*)
2. GPT returns a clean list of movie names
3. Movie names are sanitized and searched on TMDB
4. TMDB results are displayed as movie cards

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Login.js
│   ├── Browse.js
│   ├── MainContainer.js
│   ├── SecondaryContainer.js
│   ├── MovieList.js
│   ├── MovieCard.js
│   ├── GPTSearch.js
│   ├── GptSearchBar.js
│   └── GptMovieSuggestion.js
│
├── hooks/
│   ├── useNowPlayingMovies.js
│   ├── usePopularMovies.js
│   ├── useTopRatedMovies.js
│   ├── useUpcomingMovies.js
│   └── useMovieTrailer.js
│
├── utils/
│   ├── firebase.js
│   ├── constants.js
│   ├── validate.js
│   └── openai.js
│
├── redux/
│   ├── store.js
│   ├── userSlice.js
│   ├── movieSlice.js
│   └── GPTSlice.js
│
└── App.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_TMDB_KEY=your_tmdb_v4_token
REACT_APP_OPENAI_KEY=your_gpt_api_key
```

> ⚠️ Never commit `.env` to GitHub. Add it to `.gitignore`.

---

## ▶️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/moviqs.git

# Navigate to project
cd moviqs

# Install dependencies
npm install

# Start development server
npm start
```

---

## 📸 Screenshots

> *(Add screenshots here – Desktop & Mobile views)*

---

## 🧪 Future Enhancements

* Skeleton loaders
* Debounced GPT search
* Rate-limiting GPT calls
* Accessibility improvements (ARIA)
* Performance optimization (Lighthouse)

---

## 👨‍💻 Author

**Vasudev Giri**
B.Tech CSE (AI) | Frontend Developer

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it motivates continuous improvement!

---

## 📜 License

This project is for educational and portfolio purposes.
