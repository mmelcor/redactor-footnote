# redactor-footnote
Footnote plugin for Imperavi Redactor

## Installation
Place the footnote folder into your Redactor plugins folder. In your implementation of the Redactor widget add `'footnote'` to the plugins being called like so:

```javascript
$(function()
{
    $('#redactor').redactor({
        plugins: ['footnote']
    });
});
```
## Useage
This plugin supports deleting footnotes with automatic re-indexing. In order to delete a footnote, delete the footnote from the bottom and then delete the superscript in the body of the text.

>This is some text with a footnote<sup>1</sup>.
><hr>
>1. The footnote.

