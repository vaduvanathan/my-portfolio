# Components

This is a static HTML portfolio. It has no imported component library; reusable DOM patterns are rendered by functions in `script.js`.

## createElement
- Source: `script.js`
- Description: Small DOM factory used by all page renderers.

```js
const createElement = (tag, classes = '', content = '') => {
    const el = document.createElement(tag);
    if (classes) el.className = classes;
    if (content) el.innerHTML = content;
    return el;
};
```
