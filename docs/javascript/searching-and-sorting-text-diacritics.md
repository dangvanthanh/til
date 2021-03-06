# Searching and Sorting Text Diacritics in JavaScript

```javascript
const brands = [
  { label: 'Côte et Ciel', value: 1532 },
  { label: 'Études', value: 17 },
  { label: 'AllSaints', value: 2501 },
  { label: 'Samsøe & Samsøe', value: 1571 },
  { label: 'Ben Sherman', value: 2124 },
  { label: 'Drôle de Monsieur', value: 137 },
  { label: '!Solid', value: 668 }
];
```

## Seaching

```javascript
brands.filter(brand => {
  return brand.label.indexOf('Cote') > -1;
});
```

```javascript
brands.filter(brand => {
  const decomposedLabel = brand.label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  return brand.label.indexOf('Cote') > -1;
});
```

## Sorting

```javascript
brands.sort((a, b) => {
  return a.label > b.label;
});
```

```javascript
brands.sort((a, b) => {
  return a.label.localeCompare(b.label);
});
```
