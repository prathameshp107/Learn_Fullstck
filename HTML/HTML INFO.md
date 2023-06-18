# Table of Contents

- [HTML Notes](#html-notes)
  - [HTML explanation](#html-explanation)
  
    - [1. HTML Introduction](#1-html-introduction)
    - [2. HTML Document Structure](#2-html-document-structure)
    - [3. HTML Elements](#3-html-elements)
    - [4. Headings and Paragraphs](#4-headings-and-paragraphs)
    - [5. Links](#5-links)
    - [6. Images](#6-images)
    - [7. Lists](#7-lists)
    - [8. Tables](#8-tables)
    - [9. Forms](#9-forms)
    - [10. HTML Semantic Elements](#10-html-semantic-elements)
    - [11. HTML5 Features](#11-html5-features)
    - [12. HTML Entities](#12-html-entities)
  - [Table of tags ](#table-of-tags)


# HTML Notes

HTML (Hypertext Markup Language) is the standard markup language used for creating web pages. It provides the structure and content of a webpage, defining elements such as headings, paragraphs, links, images, tables, and more.

HTML uses tags to define the structure and presentation of the content. Tags are enclosed in angle brackets (`< >`) and are usually paired with opening and closing tags. Opening tags begin with the tag name, followed by optional attributes, while closing tags have a forward slash before the tag name.


HTML documents generally consist of three main parts:

1. Version Information:
   - The HTML document starts with a declaration that specifies the version of HTML being used.
   - It is indicated by the `<!DOCTYPE>` declaration, followed by the HTML version.
   - For example, `<!DOCTYPE html>` indicates the use of HTML5, which is the latest version of HTML.
   - The version information ensures compatibility and helps browsers understand how to interpret and render the HTML code.

2. Head Section:
   - The `<head>` section of an HTML document contains metadata and other information about the webpage.
   - It does not represent the visible content of the webpage but rather provides instructions and data for the browser and search engines.
   - Some common elements found in the `<head>` section include:
     - `<title>`: Sets the title of the webpage, which appears in the browser's title bar or tab.
     - `<meta>`: Specifies metadata about the document, such as character encoding, description, keywords, and viewport settings.
     - `<link>`: Specifies external CSS stylesheets or other external resources used by the webpage.
     - `<script>`: Defines JavaScript code or includes external JavaScript files.
     - Other elements for SEO optimization, social media integration, and more.

3. Body Section:
   - The `<body>` section of an HTML document contains the visible content of the webpage.
   - It includes elements like headings, paragraphs, images, links, lists, tables, forms, and more.
   - This section defines the structure and presentation of the webpage that is rendered in the browser.
   - All the content that users see and interact with on the webpage resides within the `<body>` tags.



## HTML explanation

## 1. HTML Introduction
- HTML (Hypertext Markup Language) is the standard language used to create web pages.
- It uses a markup structure with tags to define the structure and content of a webpage.
- HTML files are plain text files with a .html extension and are interpreted by web browsers to display the content.

## 2. HTML Document Structure
- The basic structure of an HTML document consists of the following elements:
  - `<html>`: The root element that wraps the entire HTML document.
  - `<head>`: Contains meta-information about the document, such as the title, character encoding, stylesheets, and scripts. It doesn't display any visible content on the webpage.
  - `<body>`: Contains the visible content of the webpage, including text, images, links, and other HTML elements.

## 3. HTML Elements
- HTML elements are defined by tags, which are written in angle brackets.
- Tags are paired with an opening tag (`<tagname>`) and a closing tag (`</tagname>`).
- The content of the element is placed between the opening and closing tags.
- Example: `<tagname>Content goes here</tagname>`

## 4. Headings and Paragraphs
- Headings (`<h1>` to `<h6>`) are used to define different levels of headings on a webpage. `<h1>` represents the highest level, and `<h6>` represents the lowest.
- Headings provide structure and hierarchy to the content.
- Example: `<h1>Main Heading</h1>`

- Paragraphs (`<p>`) are used to enclose blocks of text. They represent a unit of content or a paragraph of information.
- Example: `<p>This is a paragraph.</p>`

## 5. Links
- Links are created using the `<a>` (anchor) tag.
- The `href` attribute specifies the URL or destination that the link points to.
- Example: `<a href="https://www.example.com">Link Text</a>`
- Links can be both external, pointing to other websites, or internal, pointing to other pages within the same website.

- Additional attributes for links:
  - `target`: Specifies how the link should open. For example, `_blank` opens the link in a new tab or window.
  - `rel`: Specifies the relationship between the current document and the linked document, such as `nofollow` to indicate that search engines should not follow the link.
  - Example: `<a href="https://www.example.com" target="_blank" rel="nofollow">Link Text</a>`
  - Links can also be created as anchor links to specific sections within the same page using the `#` symbol followed by the ID of the target element.

## 6. Images
- Images are inserted using the `<img>` tag.
- The `src` attribute specifies the source (URL or file path) of the image.
- The `alt` attribute provides alternative text that describes the image. It is used when the image cannot be displayed or for accessibility purposes.
- Example: `<img src="image.jpg" alt="Description of the image">`

- Additional attributes for images:
  - `width` and `height`: Specify the width and height of the image in pixels.
  - `title`: Provides a tooltip text when the user hovers over the image.
  - Example: `<img src="image.jpg" alt="Description of the image" width="300" height="200" title="Image Title">`
  - Images can also be used as links by wrapping the `<img>` tag with an `<a>` tag.

## 7. Lists
- Unordered lists (`<ul>`) are used to create bulleted lists.
- List items (`<li>`) are used within the `<ul>` tag to define individual list items.
- Example: 
  ```
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  ```

- Ordered lists (`<ol>`) are used to create numbered lists.
- Example - 
    ```
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
    </ol>
    ```
## 8. Tables
- Tables are created using the `<table>` tag.
- Rows are defined using the `<tr>` (table row) tag.
- Cells are defined using the `<td>` (table data) tag, which represents a data cell within a table row.
- Table headers can be defined using `<th>` (table header) tags within the `<tr>` tag.
- Example:
  ```
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </table>
  ```
## 9. Forms
- HTML provides form elements to collect user input.
- Forms are created using the <form> tag.
- Form controls such as text fields, checkboxes, radio buttons, dropdown menus, and buttons are used to gather input from users.
Example:
```
<form>
  <input type="text" name="name" placeholder="Enter your name">
  <input type="submit" value="Submit">
</form>
```


## 10. HTML Semantic Elements
- Semantic elements provide meaning and structure to the content.
- Examples of semantic elements include  `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, etc.
- They help search engines and assistive technologies better understand the content and improve accessibility.

## 11. HTML5 Features
- HTML5 introduced several new features and elements:
    - `<video>` and `<audio>`: Used to embed video and audio content in webpages.
    - `<canvas>`: Provides a drawing area for graphics and animations.
    - `<svg>`: Used to create scalable vector graphics.
    - `<datalist>`: Defines a list of predefined options for input fields.
    - `<details>` and `<summary>`: Used to create collapsible content sections.
    - `<article>` and `<section>`: Used to define standalone sections of content.
    - `<nav>`: Indicates a navigation section within a webpage.
    - `<header>` and `<footer>`: Represent the header and footer sections of a webpage, respectively.

## 12. HTML Entities
- HTML entities are special characters that are represented using entity names or codes to ensure proper rendering in the browser.
- For example, &lt; represents the less-than symbol <, and &amp; represents the ampersand &.
- HTML entities are used when the character has a special meaning in HTML, such as <, >, &, etc.



## Table of tags 
Below is a table listing some of the most widely used and important HTML tags, along with their uses, code, and brief explanations:

| Tag              | Use                                                              | Code                                    |
|------------------|------------------------------------------------------------------|-----------------------------------------|
| `<html>`         | Defines the root of an HTML document                               | `<html></html>`                         |
| `<head>`         | Contains metadata about the HTML document                           | `<head></head>`                         |
| `<title>`        | Sets the title of the webpage                                      | `<title>Page Title</title>`              |
| `<body>`         | Defines the document's body                                        | `<body></body>`                         |
| `<h1>` to `<h6>` | Defines headings of different levels                               | `<h1>Heading 1</h1>`                     |
| `<p>`            | Defines a paragraph                                                | `<p>Paragraph text</p>`                  |
| `<ul>`           | Defines an unordered list                                          | `<ul></ul>`                              |
| `<ol>`           | Defines an ordered list                                            | `<ol></ol>`                              |
| `<li>`           | Defines a list item                                                | `<li>List item</li>`                     |
| `<a>`            | Defines a hyperlink                                                | `<a href="url">Link</a>`                 |
| `<img>`          | Defines an image                                                   | `<img src="image.jpg" alt="Image">`      |
| `<div>`          | Defines a division or a container                                  | `<div></div>`                            |
| `<span>`         | Defines a small section of text                                    | `<span></span>`                          |
| `<form>`         | Defines an HTML form                                               | `<form></form>`                          |
| `<input>`        | Defines an input control                                           | `<input type="text" name="fname">`       |
| `<select>`       | Defines a dropdown list                                            | `<select></select>`                      |
| `<textarea>`     | Defines a multiline input control                                   | `<textarea></textarea>`                  |
| `<button>`       | Defines a clickable button                                         | `<button>Click me</button>`               |
| `<table>`        | Defines an HTML table                                              | `<table></table>`                        |
| `<tr>`           | Defines a table row                                                | `<tr></tr>`                              |
| `<th>`           | Defines a header cell within a table                               | `<th>Header</th>`                        |
| `<td>`           | Defines a standard cell within a table                             | `<td>Data</td>`                          |
| `<thead>`        | Groups the header content in a table                               | `<thead></thead>`                        |
| `<tbody>`        | Groups the body content in a table                                 | `<tbody></tbody>`                        |
| `<tfoot>`        | Groups the footer content in a table                               | `<tfoot></tfoot>`                        |
| `<iframe>`       | Defines an inline frame                                            | `<iframe src="page.html"></iframe>`       |
| `<audio>`        | Defines a sound or audio stream                                    | `<audio src="audio.mp3"></audio>`         |
| `<video>`        | Defines a video or movie                                           | `<video src="video.mp4"></video>`         |
| `<header>`       | Defines a container for introductory content                       | `<header></header>`                       |
| `<nav>`          | Defines a container for navigation links                           | `<nav></nav>`                            |
| `<article>`      | Defines an independent article                                     | `<article></article>`                     |
| `<section>`      | Defines a section in a document                                    | `<section></section>`                     |
| `<footer>`       | Defines a footer for a document or section                         | `<footer></footer>`                       |
| `<strong>`       | Defines strong emphasis                                            | `<strong>Important</strong>`              |
| `<em>`           | Defines emphasized text                                            | `<em>Emphasized</em>`                     |
| `<code>`         | Defines a piece of computer code                                   | `<code>code snippet</code>`               |
| `<pre>`          | Defines preformatted text                                          | `<pre>Text</pre>`                         |
| `<blockquote>`   | Defines a section that is quoted from another source                | `<blockquote>Quote</blockquote>`          |
| `<hr>`           | Defines a horizontal rule                                          | `<hr>`                                   |
| `<br>`           | Defines a line break                                               | `<br>`                                   |





# Inline and Block Elements

Inline and block elements are two types of display properties used in HTML and CSS to define the behavior and layout of elements on a web page.

## Inline Elements

Inline elements are displayed on the same line as neighboring elements, and they do not start on a new line. They only occupy the space they need, and their width and height are determined by their content. Some common examples of inline elements are `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, and `<input>`.

Characteristics of inline elements:

- They do not create line breaks before or after themselves.
- They do not have a width or height property.
- Margins and paddings only affect the left and right sides, not the top and bottom.
- They can be nested within block-level elements.


Inline Elements Examples:
1. `<span>`: Used for styling specific parts of text.
2. `<a>`: Creates hyperlinks to other web pages or resources.
3. `<strong>`: Represents strong emphasis or importance.
4. `<em>`: Indicates emphasis or stress on text.
5. `<img>`: Inserts an image into the document.
6. `<input>`: Creates various types of input fields, such as text input, checkboxes, and radio buttons.

---

## Block Elements

Block elements create blocks on the web page and start on a new line. They take up the entire available width by default, and their height is determined by the content or specified properties. Common examples of block elements include `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<li>`, `<section>`, and `<footer>`.

Characteristics of block elements:

- They start on a new line and create line breaks before and after themselves.
- They occupy the full available width by default.
- They can have width and height properties.
- Margins, paddings, and borders affect all four sides.
- They can contain both inline and block-level elements.

It's important to note that the display property of an element can be modified using CSS. For example, an inline element can be changed to a block element and vice versa by setting the `display` property to `block` or `inline`, respectively.

Understanding the distinction between inline and block elements helps in controlling the layout, positioning, and behavior of elements on a web page.

----



Block Elements Examples:
1. `<div>`: A container element used for grouping and styling other elements.
2. `<p>`: Represents a paragraph of text.
3. `<h1>` to `<h6>`: Heading elements with different levels of importance.
4. `<ul>`: Unordered list, used for creating bullet-pointed lists.
5. `<li>`: List item within an unordered or ordered list.
6. `<section>`: Represents a standalone section of content.
7. `<footer>`: Defines the footer section of a document or a section.

Keep in mind that the classification of elements as inline or block is the default behavior, but it can be modified using CSS. For instance, you can use CSS to change a block element like `<div>` to behave like an inline element by setting the `display` property to `inline`.



 ---

 # HTML Forms

HTML forms provide a way to collect user input and send it to a server for processing. They consist of various form elements such as input fields, checkboxes, radio buttons, dropdown menus, and buttons. Let's explore the details and examples of HTML forms.

1. Form Structure:
   - The `<form>` element is used to create a form.
   - It has an `action` attribute that specifies where to send the form data.
   - The `method` attribute determines the HTTP method to use for submitting the form.
   - Example: `<form action="/submit" method="post">`

2. Input Fields:
   - The `<input>` element is used to create input fields within a form.
   - It has a `type` attribute that determines the behavior and appearance of the input field.
   - Example: `<input type="text" name="firstName" placeholder="Enter your first name">`

3. Labels:
   - The `<label>` element is used to associate a text label with a form element.
   - It improves accessibility and usability by providing a clickable label for the associated input field.
   - Example: `<label for="firstName">First Name:</label>`

4. Checkboxes:
   - The `<input type="checkbox">` element represents a checkbox.
   - It allows users to select one or more options from a set of choices.
   - Example:
     ```html
     <input type="checkbox" id="option1" name="option" value="option1">
     <label for="option1">Option 1</label>
     ```

5. Radio Buttons:
   - The `<input type="radio">` element represents a radio button.
   - It allows users to choose one option from a group of mutually exclusive options.
   - Example:
     ```html
     <input type="radio" id="option1" name="option" value="option1">
     <label for="option1">Option 1</label>
     ```

6. Dropdown Menus:
   - The `<select>` element is used to create a dropdown menu.
   - It contains one or more `<option>` elements that represent the available choices.
   - Example:
     ```html
     <select name="colors">
       <option value="red">Red</option>
       <option value="green">Green</option>
       <option value="blue">Blue</option>
     </select>
     ```

7. Buttons:
   - The `<button>` element creates a button within a form.
   - It can be used for form submission (`type="submit"`) or performing custom actions (`type="button"`).
   - Example: `<button type="submit">Submit</button>`

8. Input Field Types:
   - The `<input>` element has various types that determine the behavior and appearance of the input field.
   - Examples:
     - `<input type="text" name="firstName" placeholder="Enter your first name">`
     - `<input type="password" name="password" placeholder="Enter your password">`
     - `<input type="checkbox" name="option" value="option1"> Option 1`
     - `<input type="radio" name="option" value="option1"> Option 1`
     - `<input type="submit" value="Submit">`
     - `<input type="reset" value="Reset">`
     - `<input type="file" name="file">`
     - `<input type="email" name="email" required>`
     - `<input type="number" name="quantity" min="1" max="100">`

9. Placeholder Text:
   - The `placeholder` attribute specifies a short hint that describes the expected value of an input field.
   - It is displayed in the input field before the user enters any value.
   - Example: `<input type="text" placeholder="Enter your email address">`

10. Required Fields:
    - The `required` attribute makes an input field mandatory.
    - Users must fill in the required fields before submitting the form.
    - Example: `<input type="text" name="username" required>`

11. Field Validation:
    - HTML5 introduces various attributes for input field validation, such as `min`, `max`, `pattern`, etc.
    - They ensure that the user's input meets specific criteria, like a minimum or maximum value, a specific pattern, etc.
    - Example: `<input type="number" name="age" min="18" max="99">`

12. Field Grouping:
    - The `<fieldset>` element groups related form elements together.
    - It is useful for semantic grouping and styling purposes.
    - Example:
      ```html
      <fieldset>
        <legend>Shipping Address</legend>
        <!-- Form elements for shipping address -->
      </fieldset>
      ```

13. Form Submission:
    - When the user submits a form, the form data is sent to the server for processing.
    - The `action` attribute of the `<form>` element specifies where the data should be sent.
    - The `method` attribute determines the HTTP method to use, such as `GET` or `POST`.
    - Example: `<form action="/submit" method="post">`

14. HTTP Methods:
    - The two commonly used HTTP methods for form submission are `GET` and `POST`.
    - The `GET` method appends the form data to the URL, visible in the address bar.
    - The `POST` method sends the form data in the body of the HTTP request, making it more secure and suitable for sensitive data.
    - Example: `<form action="/submit" method="post">`

15. Form Example:
    - Here's an example of a simple login form:
      ```html
      <form action="/login" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Login</button>
      </form>
      ```

These examples demonstrate various aspects of HTML forms. HTML forms provide a powerful mechanism for collecting user input, validating it, and processing it on the server-side.
