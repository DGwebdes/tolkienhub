# Tolkien Fan Repository

A **React + Vite** web application designed for fans of J.R.R. Tolkien. This platform serves as a repository of Tolkien-related facts, curiosities, and resources, offering a dynamic and immersive experience for enthusiasts of Middle-earth.
It's an application made from a fan to fans. It is under work and is one of my first works in react.

---

## Table of Contents

- [Tolkien Fan Repository](#tolkien-fan-repository)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Future Enhancements](#future-enhancements)
  - [Contributing](#contributing)
  - [License](#license)

---

## Features

- **Interactive Navigation:** Hover effects that dynamically update the background imagery for an immersive Tolkien experience.  
- **Curated Pages:** Explore distinct sections for:
  - **Books:** A comprehensive list of Tolkien's literary works sourced from a utility file.
  - **Movies:** Insights and details about movie adaptations.
  - **Tolkien:** Facts and curiosities about the man behind Middle-earth.
  - **Appendix:** Maps and additional lore resources.
- **User Authentication:** A login page for personalized user interactions.  

---

## Tech Stack

- **Frontend Framework:** React  
- **Module Bundler:** Vite  
- **Routing:** React Router  
- **Styling:** CSS (custom styles integrated for a Tolkien-inspired theme)  

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DGwebdes/tolkienhub.git
   cd tolkien-fan-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser:

   ```
   http://localhost:5173
   ```

---

## Usage

1. Launch the application and navigate through various sections using the header.
2. Hover over the navigation links to see the dynamic background updates.
3. Explore the **Books** section, populated with data from the `utils/bookList.js` file, to read summaries of Tolkien's works.
4. Dive into Tolkien's world by exploring **Movies**, **Appendix**, and more.

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   └── Main.jsx
├── pages/
│   ├── Books.jsx
│   ├── Movies.jsx
│   ├── Tolkien.jsx
│   ├── Appendix.jsx
│   └── Login/
│       └── Login.jsx
├── utils/
│   ├── movieList.js
│   ├── tolkien.js
│   ├── appendix.js
│   └── bookList.js
├── App.jsx
├── main.jsx
├── assets/
│   ├── bg-lotr.png
│   ├── bookz.jpg
│   ├── movies.jpg
│   ├── tolkin.jpg
│   ├── map.jpg
├── styles/  (optional custom styles directory)
```

---

## Future Enhancements

- **Search Functionality:** Allow users to search for specific Tolkien-related content.
- **Favorites Feature:** Enable users to bookmark their favorite books, movies, or lore.
- **Dark Mode:** Provide a toggle for dark/light themes.
- **API Integration:** Fetch additional Tolkien-related data from external APIs.
- **Expanded Book Data:** Use the `/utils` folder to include richer data, such as publication dates and character highlights.

---

## Contributing

We welcome contributions to make this repository even better! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
