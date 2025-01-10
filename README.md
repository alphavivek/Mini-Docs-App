# Mini Docs App

A React-based project that implements a draggable card interface with motion effects and a responsive design for desktop, tablet, and mobile screens. The cards are scrollable and movable within the viewport, making it a versatile and interactive UI component.

## Features

- **Draggable Cards**: Users can move the cards anywhere within the viewport.
- **Motion Effects**: Smooth drag transitions with bounce and scaling effects.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Dynamic Card Data**: Cards are rendered dynamically based on a data array.
- **Customizable Tags**: Cards include customizable tags with color-coding and statuses.
- **Scroll Support**: Cards are scrollable on smaller screens.

---

## Components

### 1. `App.js`
The main application wrapper. Combines the background and foreground layers.

- Imports:
  - `Main_Page_BackGround`: Renders a static background layer with a title.
  - `ForeGround`: Handles the dynamic, draggable cards layer.

---

### 2. `Main_Page_BackGround.js`
Renders the static background of the application.

- Displays the title "Docs." with a subtle visual effect.
- Fixed positioning ensures it always stays in the background.

---

### 3. `ForeGround.js`
Handles the dynamic cards layer.

- Contains:
  - A `data` array with information for each card.
  - The `Card` component, which is rendered for each entry in the data.
- Features:
  - Uses the `useRef` hook for drag constraints.
  - Dynamically maps the `data` array to render cards.
  - Adds responsiveness for tablets and mobile screens using Tailwind CSS classes.

---

### 4. `Card.js`
Defines the draggable card component.

- Features:
  - Uses the `motion.div` component from the `motion/react` library for draggable functionality.
  - Dynamic styles for tags using a `colorMap` object.
  - Props:
    - `data`: Contains card-specific details like description, filesize, and tag information.
    - `reference`: Provides drag constraints to limit movement within the viewport.
  - Displays an icon and a dynamic tag with customizable colors and text.

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/alphavivek/Mini-Docs-App.git
   cd Mini-Docs-App
    ```

2. **Install Dependencies Ensure you have Node.js installed, then run:**
   ```bash
   npm install
    ```
3. **Run the Application Start the development server:**
   ```bash
   npm run dev
    ```
4. **Open your browser and navigate to:**
   ```bash
   http://localhost:5173
    ```

## Project Structure

The project is structured as follows:

```bash
├── src
│   ├── components
│   │   ├── Card.js              # Draggable card component
│   │   ├── ForeGround.js        # Foreground layer with card logic
│   │   └── Main_Page_BackGround.js # Static background component
│   ├── App.js                   # Main application wrapper
│   └── index.js                 # Entry point of the app
├── public
│   └── index.html               # HTML template
└── package.json                 # Project configuration

```

## Dependencies

- React: Frontend library.
- motion/react: For drag-and-drop functionality with animations.
- Tailwind CSS: For responsive design and styling.
- React Icons: For adding file and action icons.

# Screenshot of the Application

![Screenshot of the Application](./src/assets/Screenshot%20(189).png "App Screenshot")

