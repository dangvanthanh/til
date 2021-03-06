# 15 HTML Element Methods

## Table

```javascript
const tableEl = document.createElement('table');

const headerRow = tableEl.createTHead().insertRow();
headerRow.insertCell().textContent = 'Make';
headerRow.insertCell().textContent = 'Model';
headerRow.insertCell().textContent = 'Color';

const newRow = tableEl.insertRow();
newRow.insertCell().textContent = 'Yes';
newRow.insertCell().textContent = 'No';
newRow.insertCell().textContent = 'Thank you';
```

## scrollIntoView()

```javascript
document.querySelector(document.location.hash).scrollIntoView();
```

## hidden

```javascript
element.style.display = 'none';

// or

element.hidden = true;
```

## toggle()

```javascript
element.classList.toggle('some-class');

// or

element.classList.toggle('some-class', isGreen === 'green');
```

## querySelector

```javascript
const body = document.querySelector(document.body);
```

## closest

```javascript
element.closest('article').querySelector('h1');
```

## getBoundingClientRect()

```
{
  x: 600,
  y: 200,
  width: 200,
  height: 400,
  top: 1000,
  right: 1400,
  bottom: 1000,
  left: 600
}
```

## matches()

```javascript
// Maximum complexity
if (element.className.indexOf('some-class') > -1) {
}

// Better
if (element.className.includes('some-class')) {
}

// Best
if (element.matches('.some-class')) {
}
```

## insertAdjacentElement()

```javascript
parentElement.insertAdjacentElement('beforeend', newElement);

// the same

parentElement.appendChild(newElement);
```

## contains()

```javascript
const handlerClick = e => {
  if (!modalElement.contains(e.target)) {
    modalElement.hidden = true;
  }
};
```

## getAttribute()

```javascript
element.getAttribute('href');
```

## dialog element

```html
<dialog class="dialog">
  <p>Grettings</p>
  <button class="js-dialog-update">Update</button>
  <button class="js-dialog-cancel">Cancel</button>
</dialog>

<script>
const dialog = document.querySelector('.dialog');
const dialogUpdate = document.querySelector('.js-dialog-update');
const dialogCancel = document.querySelector('.js-dialog-cancel');

dialogUpdate.addEventListener('click', function () {
  dialog.showModal();
}, false);

dialogCancel.addEventListener('click', function () {
  dialog.close();
});
</script>
```

## forEach()

```javascript
document.getElementsByTagName('a').forEach(el => {
  console.log(el.href);
});

// or

document.querySelectorAll('a').forEach(el => {
  console.log(el.href);
});

// chain
Array.from(document.querySelectorAll('a'))
  .map(el => el.origin)
  .filter(origin => origin !== document.origin)
  .filter(Boolean);
```

## Forms

## select()
