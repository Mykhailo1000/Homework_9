//! Task 1

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.style.textDecoration = task.completed ? 'line-through' : 'none';
        li.addEventListener('click', () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

addTaskButton.addEventListener('click', () => {
    if (taskInput.value) {
        tasks.push({ text: taskInput.value, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        renderTasks();
    }
});

renderTasks();

//! Task 2

const dataForm = document.getElementById('dataForm');

dataForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('user', JSON.stringify({ username, password }));
});

window.onload = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
        document.getElementById('username').value = userData.username;
        document.getElementById('password').value = userData.password;
    }
};

//! Task 3

const bookmarkInput = document.getElementById('bookmarkInput');
const addBookmarkButton = document.getElementById('addBookmark');
const bookmarkList = document.getElementById('bookmarkList');

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

function renderBookmarks() {
    bookmarkList.innerHTML = '';
    bookmarks.forEach((url, index) => {
        const li = document.createElement('li');
        li.textContent = url;
        li.addEventListener('click', () => deleteBookmark(index));
        bookmarkList.appendChild(li);
    });
}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
}

addBookmarkButton.addEventListener('click', () => {
    if (bookmarkInput.value) {
        bookmarks.push(bookmarkInput.value);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        bookmarkInput.value = '';
        renderBookmarks();
    }
});

renderBookmarks();

//! Task 4 

const contactNameInput = document.getElementById('contactName');
const contactPhoneInput = document.getElementById('contactPhone');
const contactEmailInput = document.getElementById('contactEmail');
const addContactButton = document.getElementById('addContact');
const contactList = document.getElementById('contactList');

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function renderContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `${contact.name} - ${contact.phone} - ${contact.email}`;
        li.addEventListener('click', () => deleteContact(index));
        contactList.appendChild(li);
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts();
}

addContactButton.addEventListener('click', () => {
    const name = contactNameInput.value;
    const phone = contactPhoneInput.value;
    const email = contactEmailInput.value;

    if (name && phone && email) {
        contacts.push({ name, phone, email });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        contactNameInput.value = '';
        contactPhoneInput.value = '';
        contactEmailInput.value = '';
        renderContacts();
    }
});

renderContacts();

