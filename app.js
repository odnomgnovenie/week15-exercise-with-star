let numbers = [];

// Заполнение массива numbers целыми числами от -10 до 10
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}

// Удаление всех отрицательных чисел из массива
numbers = numbers.filter(num => num >= 0);

// Возведение каждого числа в квадрат
numbers = numbers.map(num => num * num);

// Сортировка чисел в порядке убывания
numbers.sort((a, b) => b - a);

// Вывод полученного массива numbers в консоль
console.log(numbers);

