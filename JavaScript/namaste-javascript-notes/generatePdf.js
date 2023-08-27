const prettyMdPdf = require("pretty-markdown-pdf")

prettyMdPdf.convertMd({ markdownFilePath: "../../../namaste-javascript-notes/notes/lecture-1.md", outputFilePath: "./dist/jss-notes.pdf" })