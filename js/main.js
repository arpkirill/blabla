// Инициализация скрипта
function initialization()
{
   create();
   window.addEventListener('keydown', keyboardEvent, false);
   document.getElementById('new').onclick = newGame;
   newGame();
}

// Генерация классов координат xNyN
function getXY(i)
{
   return 'x' + (((i - 1) % 4) + 1) + 'y' + Math.ceil((i) / 4);
}

// Генерация блоков
function create()
{
   for (var i = 1; i <= 15; i++)
   {
      $('#board').append('<div class="block block-' + i + ' ' + getXY(i) + '">' + i + '</div>');
   }
}

// Управление с помощью btn
$("#up").on('click', function(){
   key('up');
})

$("#down").on('click', function(){
   key('down');
})

$("#left").on('click', function(){
   key('left');
})

$("#right").on('click', function(){
   key('right');
})

// Обработка клавиш клавиатуры
function keyboardEvent(e)
{
   switch (e.keyCode)
   {
      case 38:
         key('up');
         break;
      case 40:
         key('down');
         break;
      case 37:
         key('left');
         break;
      case 39:
         key('right');
         break;
   }
   checkWin();
}

function selectKey(type)
{
   $("#" + type).addClass('press');
   setTimeout(hideKey, 1000, type); // Иллюстрация setTimeout отличается от setInterval тем что вызвается единожды
}

function hideKey(type)
{
   $("#" + type).removeClass('press');
}

// Сдвиг up/down/left/right
function key(type)
{
   selectKey(type);

   $('.block').removeClass('active');
   for (var a = 1; a <= 4; a++)
      for (var b = 1; b <= 3; b++)
      {
         switch (type)
         {
            case 'up':
               var from = 'x' + a + 'y' + (b + 1);
               var to = 'x' + a + 'y' + b;
               break;
            case 'down':
               var from = 'x' + a + 'y' + (4 - b);
               var to = 'x' + a + 'y' + (5 - b);
               break;
            case 'left':
               var from = 'x' + (b + 1) + 'y' + a;
               var to = 'x' + b + 'y' + a;
               break;
            case 'right':
               var from = 'x' + (4 - b) + 'y' + a;
               var to = 'x' + (5 - b) + 'y' + a;
               break;
         }
         if (!$('.' + to).length)
         {
            $('.' + from).removeClass(from).addClass(to).addClass('active');
            return
         }
      }
}

// Генерация случайного числа от min до max
function getRandomInt(min, max)
{
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Псведослучайное расположение блоков на доске
function newGame()
{
   for (var a = 1; a <= 10; a++)
   {
      switch (getRandomInt(1, 4))
      {
         case 1:
            key('up');
            break;
         case 2:
            key('down');
            break;
         case 3:
            key('left');
            break;
         case 4:
            key('right');
            break;
      }
   }
   $('.block').removeClass('active');
}

// Проверка, что набрано 15 очков.
function checkWin()
{
   var good = 0;
   for (var i = 1; i <= 15; i++)
   {
      if ($('.block-' + i).hasClass(getXY(i)))
         good++;
   }
   if (good == 15)
      alert('Поздравляем! Вы победили!');
}

// Инициализируем
initialization();

let element = document.getElementById('board');

console.log(element.innerHTML);
console.log(element.innerText );