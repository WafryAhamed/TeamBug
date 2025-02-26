
## Flixify - The Movie Explorer Website.
![image](https://github.com/user-attachments/assets/bd4fdbea-f88f-4831-9759-b849b8449760)
![image](https://github.com/user-attachments/assets/125dd7cd-0b2c-4ecc-9a03-7146193fbd48)


**Flixify** is a frontend web application designed to give users a dynamic and seamless experience while exploring popular movies and TV shows. Built with **React.js** and powered by **Vite**, this project leverages the **Movie Database API** to provide real-time data on the latest and trending content. With features such as dynamic category switching, a responsive UI, and smooth navigation, this app is built to deliver a rich user experience.

## Features ✨
- 🔥 Browse popular **Movies & TV Shows** in an interactive interface
- 🌍 Language options for English, Sinhala, Tamil, Spanish, French, and German
- 🔑 Sign-in with Google, Apple, and Facebook for personalized experience
- 🎭 Switch between **Movies & TV Shows** dynamically with an intuitive layout
- 🎬 Detailed pages for each movie or TV show with ratings and genres
- ⭐ Rating and Genre Highlights for quick content discovery
- ✅ Filter by genre, release date, and rating to refine search results
- 🌙 Dark Mode for enhanced user experience
- ⚡ Optimized performance with Vite for faster load times

## Technologies Used 🛠️
- **React.js** – For building the frontend UI and components
- **Vite** – Fast build tool for modern web development and optimized performance
- **React Router** – For handling navigation between different pages
- **Redux** – For managing state and ensuring consistent data across components
- **Day.js** – For date formatting and handling release dates
- **SCSS** – For styling and making the UI more user-friendly
- **Movie Database API** – For fetching data about popular movies and TV shows

## Basic Software Requirements 💻
- **Visual Studio Code (VS Code)** – Recommended IDE for development
- **Node.js (v16+)** – Required for running React and Vite
- **Git** – For version control and collaboration

## Installation Instructions ⚙️
1. **Clone the Repository**
2.**Navigate to the Project Folder:**
   ```sh
  
   cd TeamBug-main
   ```
or
 ```sh
  
   cd TeamBug
   ```

3. **Install Dependencies**
   ```sh
   npm install
   ```

4. **Run the Development Server**
   ```sh
   npm run dev
   ```

5. **Open the App in Browser**
   - Visit: `http://localhost:5173/`  


## How the Website Works 🎥
- Users can browse through a **popular movies and TV shows** with easy-to-navigate categories.
- Each movie or show has its detailed page, which includes information like ratings, genres, and release dates.
- The app uses **lazy loading** to ensure fast performance by loading images and content only when needed.
- Users can **filter content** by genre, rating, or release year to find exactly what they’re looking for.

## Key Highlights 🌟
- **Dynamic Content Loading** – Fetches live, real-time data from the Movie Database API to ensure up-to-date results.
- **Responsive UI** – Works seamlessly across desktop and mobile devices for users on any platform.
- **Optimized Performance** – **Vite** ensures faster builds and a smooth, lag-free experience.
- **Redux Integration** – Simplifies state management across the app, making it scalable and efficient.

## Acknowledgments 🙌
Special thanks to:
- **Movie Database API** for providing the movie and TV show data.
- The **open-source community** for the React libraries that made this project possible.
- All my **teammates** who worked tirelessly to enhance the world of frontend development!


## Future Work 🔮
- Add more **advanced filtering options** such as language, runtime, etc.
- Enhance UI with more **interactive animations** for a more engaging experience.
- Introduce a **search feature** for users to quickly find their favorite movies or TV shows.


---

## Error Fixing & Auditing 🛠️
To ensure all dependencies and packages are up-to-date and free from vulnerabilities, follow these steps:

1. **Audit for vulnerabilities:** This scans all the installed packages listed in your `package.json` for known security vulnerabilities.

   ```sh
   npm audit
   ```

2. **Fix audit issues:**
   ```sh
   npm audit fix
   ```

3. **Force fix all issues (if necessary):**
   ```sh
   npm audit fix --force
   ```

4. **Update all packages to the latest versions:**
   ```sh
   npm update
   ```


