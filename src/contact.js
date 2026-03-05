export function renderContact(content) {
    content.textContent = '';

    const heading = document.createElement('h2');
    heading.id = 'heading';


    // make a div with the restaurants contact info and that's it :)
    const contact = document.createElement('div');
    contact.classList.add('contact')

    const label = document.createElement('div');
    label.classList.add('label');

    const phone = document.createElement('div');
    phone.classList.add('phone');

    const email = document.createElement('div');
    email.classList.add('email');

    heading.textContent = 'Contact Us';

    label.textContent = 'Our Office:';

    phone.textContent = '999-999-9999';

    email.textContent = 'aVeryRealEmail@100%real.com';

    contact.append(label, phone, email);
    content.append(heading, contact);

};