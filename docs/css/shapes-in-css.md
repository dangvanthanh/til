---
sidebar: auto
---

# Shapes in CSS

## Triangle

<css-shapes-Triangle />

```css
.triangle-top {
  display: block;
  height: 0;
  width: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #1abc9c;
}

.triangle-right {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 40px solid #2ecc71;
}

.triangle-bottom {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid #3498db;
  border-right: 40px solid transparent;
  border-left: 40px solid transparent;
}

.triangle-left {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid transparent;
  border-right: 40px solid #9b59b6;
  border-bottom: 40px solid transparent;
}

.triangle-top-right {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid #95a5a6;
  border-right: 40px solid transparent;
}

.triangle-top-left {
  display: block;
  height: 0;
  width: 0;
  border-top: 40px solid #f1c40f;
  border-left: 40px solid transparent;
}

.triangle-bottom-right {
  display: block;
  height: 0;
  width: 0;
  border-bottom: 40px solid #e67e22;
  border-right: 40px solid transparent;
}

.triangle-bottom-left {
  display: block;
  height: 0;
  width: 0;
  border-bottom: 40px solid #e74c3c;
  border-left: 40px solid transparent;
}
```

## Circle

<css-shapes-Circle />

```css
.circle {
  background-color: #3498db;
  width: 80px;
  height: 80px;
  border-radius: 100%;
}
```

## Pie

<css-shapes-Pie />

```css
.pie {
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 2px solid #247ba0;
  border-radius: 50%;
  position: relative;
  text-align: center;
  line-height: 80px;
}

.pie::before,
.pie::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
}

.pie::before {
  width: 100%;
  height: 100%;
  z-index: -2;
}

.pie:after {
  width: 0;
  height: 0;
  border: 40px solid #247ba0;
  transform: rotate(45deg);
  z-index: -1;
}

.pie--0::after {
  border-color: transparent;
}

.pie--25::after {
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.pie--50::after {
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.pie--75::after {
  border-left-color: transparent;
}
```
