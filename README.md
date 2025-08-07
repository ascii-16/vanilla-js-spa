# Vanilla JS SPA

A simple Single Page Application (SPA) template built using only vanilla JavaScript, HTML, and CSS—no frameworks or build tools required. This project demonstrates how to implement basic client-side routing and page rendering with minimal setup.

---

## Description

Vanilla JS SPA is a lightweight, educational project that provides the foundation for building single-page web applications in pure JavaScript. It features hash-based routing, dynamic page loading, and support for per-route CSS, all without external dependencies.

---

## Features

- **Client-side routing** using the URL hash (`#`) to switch between pages.
- **Dynamic page loading**: HTML and CSS for each route are loaded on demand.
- **404 fallback**: Displays a custom message if the route is not found.
- **Separation of concerns**: Each page has its own HTML, JS, and optional CSS.
- **Minimal boilerplate**: No build step, no frameworks, just modern JavaScript modules.

---

## Getting Started

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/ascii-16/vanilla-js-spa.git
    cd vanilla-js-spa
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Server

Start the development server using the npm script:

```sh
npm start
```

This will serve the project locally.

**Alternatively, you can also use a simple local server (e.g., with VS Code's Live Server, Python, or Node):**
```sh
# Python 3.x
python3 -m http.server

# or with Node.js
npx serve .
```

---

### Usage

- Click the navigation links or change the URL path (e.g., `/home`, `/about`) to navigate.
- The content of the `<div id="app"></div>` will update without a full page reload.
- Add new pages by creating a folder in `pages/`, an HTML file, and a JS config.

---

## License

MIT

---

## Author

[ascii-16](https://github.com/ascii-16)
