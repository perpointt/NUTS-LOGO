# NUTS-LOGO
[demo](https://perpointt.github.io/NUTS-LOGO/)
## Установка

Добавить в HTML:
```html
...
<div class="nuts"></div>
...

<script src="nuts.js"></script>
</body>

```

Добавить в JS:
```javascript
const nuts = new Nuts()
```
## Опции
* container(String) - блок в который помещаем логотип,
* color(String) - основной цвет логотипа,
* hover(String) - цвет при наведении,
* transition(Int) - длительность анимации,
* lettersAnimation(Boolean) - анимировать текст.

## Полный функционал
```javascript
const nuts = new Nuts({
   container: "#nuts", //default
   color: "#fff", //default
   hover: "#ffad00", //default
   transition: 1, //default
   lettersAnimation: false //default
});
```





 
