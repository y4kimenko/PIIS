// Создаем объект personalMovieDB
const personalMovieDB = {
    privat: false,  //указывает, явл бд приватной true или открытой false
    movies: {       //объект содержащий фильмы и их рейтинги
        "Мажор": 5,  
        "Пёс": 4,  
        "Кухня": 3   
    }
};

// Функция для вывода объекта movies в виде таблицы
function displayMovies() { 
    if (!personalMovieDB.privat) { //проверка свойства privat если false открыто продолжаем
        const table = document.createElement('table'); //создаем элемент таблицы
        table.style.borderCollapse = 'collapse'; //границы ячеек будут сливаться
        
        const headerRow = document.createElement('tr'); //создаем строку для заголовков таблицы
        const headerMovie = document.createElement('th'); //создаем заголовок 
        const headerRating = document.createElement('th'); //создаем заголовок 
        
        headerMovie.innerText = 'Название фильма'; // устанавливаем текст заголовка Название фильма
        headerRating.innerText = 'Оценка'; 
        
        headerMovie.style.border = '1px solid black'; //устанавливаем стиль границы для заголовка 
        headerRating.style.border = '1px solid black'; 
        
        headerRow.appendChild(headerMovie); // Добавляем заголовок 'Название фильма' в строку заголовков
        headerRow.appendChild(headerRating); 
        table.appendChild(headerRow); // Добавляем строку заголовков в таблицу

        // Проходим по всем фильмам в объекте movies
        for (let movie in personalMovieDB.movies) { 
            const row = document.createElement('tr'); // Создаем новую строку для каждого фильма
            const cellMovie = document.createElement('td'); // Создаем ячейку для названия 
            const cellRating = document.createElement('td'); 
            
            cellMovie.innerText = movie; // Устанавливаем текст ячейки с названием 
            cellRating.innerText = personalMovieDB.movies[movie]; 
            
            cellMovie.style.border = '1px solid black'; 
            cellRating.style.border = '1px solid black'; 
            
            row.appendChild(cellMovie); // Добавляем ячейку с названием фильма в строку.
            row.appendChild(cellRating); // Добавляем ячейку с оценкой фильма в строку.
            table.appendChild(row); // Добавляем строку с данными о фильме в таблицу.
        }

        document.getElementById('movies-table').appendChild(table); //Добавляем таблицу в элемент с id 'movies-table'
    }
}

// Вызов функции для отображения фильмов
displayMovies(); 