export function renderHome(content) {
    content.textContent = '';

    const heading = document.createElement('h2');
    heading.id = 'heading';

    const whoWeAre = document.createElement('div');
    whoWeAre.classList.add('whoWeAre');

    const whatWereAbout = document.createElement('div');
    whatWereAbout.classList.add('whatWereAbout');

    heading.textContent = 'Home';

    whoWeAre.textContent = 'Just some general info about the history of the definitely not fake and 100% family owned business. They also serve 100% "real" food.';

    whatWereAbout.textContent = 'Some more text about what this company, family, and restaurant stand for. Some 100% real testimonials and whatnot could probably go here. Definitely no overexagerating going on in this section, no sir.'
    
    const familyPic = document.createElement('img');
    familyPic.id = 'familyPic';
    familyPic.src = "https://img.freepik.com/free-photo/medium-shot-happy-family-indoors_23-2148880377.jpg";
    familyPic.alt = 'The restaurants founding family';
    
    content.append(heading, familyPic, whoWeAre, whatWereAbout);
};