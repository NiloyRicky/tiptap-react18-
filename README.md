# React + Custom Extension+ Tiptap

 React App with Tiptap Editor

This project is a React-based web application using Vite and Tiptap, a headless rich text editor. It includes custom extensions such as chemical arrows for writing chemical reactions and a custom image generator that allows users to insert images via URL, with a drag feature to reposition the images within the editor.

Features

Chemical Arrow Extension: Helps users easily insert chemical arrows (→, ⇌, ←) to write chemical reactions.

Custom Image Generator: Insert images using URLs, with the ability to drag the image to a desired position within the editor.

Drag Feature: Allow users to click and drag images within the editor to move them around.

Setup

To get started with this project, follow the steps below:

Clone the Repository

Clone the repository using the following command:

git clone <repository-url>
cd react18tiptap

Install Dependencies

Install the necessary dependencies using npm or yarn:

npm install

or if you're using yarn:

yarn install

Run the Development Server

Start the development server to run the app locally:

npm run dev

Once the server is running, open your browser and navigate to http://localhost:3000 (or the provided URL ) to see the app in action.


Custom Extensions

1. Chemical Arrow Extension

This extension allows you to insert arrows commonly used in chemical reactions, such as:

→ (forward arrow)

⇌ (reversible arrow)

← (backward arrow)


You can trigger these arrows using custom toolbar buttons in the editor. When clicked, the corresponding arrow is inserted at the current cursor position.

How It Works:

The ChemicalArrow extension is added to the Tiptap editor.

Each arrow has a corresponding button in the toolbar.

Clicking any button inserts the arrow symbol directly into the editor's content.


2. Custom Image Generator with Drag Feature

The CustomImage extension allows users to insert an image using a URL. The image is displayed within the editor, and users can click and drag it to reposition it within the content.

How It Works:

Users input the image URL and an optional caption in the provided fields.

Upon clicking Insert Custom Image, the image is inserted into the editor, with the URL and caption attached as attributes.

The image is draggable within the editor, allowing users to position it freely by clicking and dragging.


Drag Feature:

When an image is inserted, users can click and drag the image to a new position in the editor.

The image will stay at the new position as long as it is not removed.


3. Image Deletion

The Delete button allows users to remove images from the editor. This feature ensures that the image is completely deleted when the button is clicked.


---

Directory Structure

The project follows a simple directory structure:

/src
  /components
    TiptapEditor.jsx       # Contains the editor setup with extensions
  /extensions
    CustomImage.js         # Custom extension for handling images
    ChemicalArrow.js       # Custom extension for chemical arrows
  App.jsx                  # Main app component
  main.jsx                 # Entry point for the app
  /assets                  # Folder for static assets (e.g., icons, images)
  index.css                # Global styles for the app


---

Usage

Using Chemical Arrows:

Click on any of the arrow buttons in the toolbar.

The selected arrow (→, ⇌, ←) will be inserted at the current cursor position in the editor.


Inserting Custom Images:

1. Enter a valid image URL in the Image URL input field.


2. Optionally, add a caption for the image.


3. Click Insert Custom Image to insert the image into the editor.


4. Once inserted, the image can be dragged and repositioned by clicking and dragging.



Deleting Images:

When an image is inserted, the Delete button will appear.

Clicking the Delete button will remove the image from the editor.



---


