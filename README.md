# NUTS-LOGO
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
   container: "nuts" //default "#nuts";
   color: #000 //default "#fff";
   hover: #fff //default "#ffad00";
   transition: 2 //default 1;
   lettersAnimation: true //default false;
});
```





 
