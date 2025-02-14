VueLab
Overview

VueLab is a project developed with Vue 3 and TypeScript using Vite. It serves as a laboratory for experimenting with Vue.js, showcasing various components and features.
Table of Contents

    Overview
    Project Setup
    Available Scripts
    Project Structure
    Components
    License

Project Setup

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 <script setup> SFCs, check out the script setup docs.

Learn more about the recommended Project Setup and IDE Support in the Vue Docs TypeScript Guide.
Prerequisites

    Node.js (v14 or higher)
    npm or yarn

Installation

Clone the repository and install the dependencies:
bash

git clone https://github.com/Jordan007p/VueLab.git
cd VueLab
npm install

Available Scripts

In the project directory, you can run the following scripts:
npm run dev

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
npm run build

Builds the app for production to the dist folder.
npm run preview

Preview the production build locally.
Project Structure

The project has the following structure:
Code

VueLab/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Blogs.vue
│   ├── composables/
│   ├── views/
│   ├── App.vue
│   ├── main.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json

Key Files and Directories

    public/: Contains static assets.
    src/: Contains the main source code for the application.
        components/: Contains Vue components.
        composables/: Contains reusable logic (composables).
        views/: Contains view components.
        App.vue: The root component.
        main.ts: The entry point of the application.

Components
Blogs.vue

The Blogs.vue component is designed to display a list of blog posts with search and filter functionality.
Template Section

    Displays a loading message, error message, or the list of blogs.
    Contains an input field for searching blogs and checkboxes for filtering by title or description.
    Lists blogs with title, image, publish date, description, and a remove button.

Script Section

    Imports necessary modules and defines the Blogs component.
    Uses toRefs and useSearch for reactive references and search functionality.

Style Section

    Scoped styles for the Blogs component, including layout and button styles.
``
