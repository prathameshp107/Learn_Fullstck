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

Feel free to use these notes as a reference for HTML tags and their usage. You can copy the table and add it to your own note file for future use.
