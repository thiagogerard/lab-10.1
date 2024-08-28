// Initial contacts data
let contacts = [
    { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
    { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" }
];

// Function to display all contacts on the screen
const displayContacts = () => {
    const contactListDiv = document.getElementById('contact-list');
    contactListDiv.innerHTML = ''; // Clear the current list

    contacts.forEach((contact, index) => {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'contact';
        contactDiv.innerHTML = `
            <h3>${contact.name}</h3>
            <p>Phone: ${contact.phone}</p>
            <p>Email: ${contact.email}</p>
        `;
        contactListDiv.appendChild(contactDiv);
    });
};

// Function to add a new contact
const addContact = () => {
    let name = prompt("Enter contact name:");
    let phone = prompt("Enter contact phone:");
    let email = prompt("Enter contact email:");
    if (name && phone && email) {
        contacts.push({ name, phone, email });
        displayContacts(); // Update the displayed contacts
        alert("Contact added successfully.");
    }
};

// Recursive function to find a contact by name
const findContact = (name, index = 0) => {
    if (index >= contacts.length) {
        alert("Contact not found.");
        return;
    }
    if (contacts[index].name.toLowerCase() === name.toLowerCase()) {
        alert(`Found Contact:\n\nName: ${contacts[index].name}\nPhone: ${contacts[index].phone}\nEmail: ${contacts[index].email}`);
        return;
    }
    findContact(name, index + 1);
};

// Function to log contact count
const logContactCount = () => {
    console.log(`Total contacts: ${contacts.length}`);
};

// Periodically log the contact count
setInterval(logContactCount, 5000);

// Change background color every 5 seconds
setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}, 5000);

// Event listener for "Add Contact" button
document.getElementById('add-contact-btn').addEventListener('click', addContact);

// Event listener for "Find Contact" button
document.getElementById('find-contact-btn').addEventListener('click', () => {
    let name = prompt("Enter the name of the contact you want to find:");
    findContact(name);
});

// Initial display of contacts
displayContacts();
