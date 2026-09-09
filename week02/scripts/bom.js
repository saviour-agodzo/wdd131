const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');
const message = document.querySelector('#message');

const books = [
    '1 Nephi',
    '2 Nephi',
    'Jacob',
    'Enos',
    'Jarom',
    'Omni',
    'Words of Mormon',
    'Mosiah',
    'Alma',
    'Helaman',
    '3 Nephi',
    '4 Nephi',
    'Mormon',
    'Ether',
    'Moroni'
];

function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}

function formatChapter(value) {
    const cleanValue = value.trim().replace(/\s+/g, ' ');
    const match = cleanValue.match(/^(.+?)\s+(\d+)$/);

    if (!match) {
        return null;
    }

    const enteredBook = match[1].toLowerCase();
    const chapter = match[2];

    const book = books.find(function (bookName) {
        return bookName.toLowerCase() === enteredBook;
    });

    if (!book) {
        return null;
    }

    return `${book} ${chapter}`;
}

function updateButton() {
    button.disabled = list.children.length >= 10;
}

button.addEventListener('click', function () {
    const chapter = formatChapter(input.value);

    if (!chapter) {
        showMessage('Enter a valid Book of Mormon book and chapter, such as Alma 5.', 'error');
        input.focus();
        return;
    }

    const existingChapters = Array.from(list.children).map(function (item) {
        return item.firstChild.textContent;
    });

    if (existingChapters.includes(chapter)) {
        showMessage(`${chapter} is already in your list.`, 'error');
        input.focus();
        return;
    }

    if (list.children.length >= 10) {
        showMessage('Your Top 10 list is full.', 'error');
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.append(chapter);

    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

    deleteButton.addEventListener('click', function () {
        li.remove();
        showMessage(`${chapter} was removed.`, 'success');
        updateButton();
        input.focus();
    });

    li.append(deleteButton);
    list.append(li);

    input.value = '';
    showMessage(`${chapter} was added to your Top 10 list.`, 'success');
    updateButton();
    input.focus();
});

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        button.click();
    }
});

updateButton();