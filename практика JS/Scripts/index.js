
const title ='MegaSite';

const navItems = ['Пункт 1', 'Пункт 2', 'Пункт 3' ];

const bgcolor = 'DarkCyan';

const fontcolor = 'white';

function generateFooter (title, navItems, bgcolor, fontcolor) {

    let result = ''
    for (let i in navItems) {
        result += `<button class="nav-item">${navItems[i]}</button>`;
    }
        
    document.write(
        `<div class="footer" style="background-color:${bgcolor}">`+
        `<h1 id="title" style="color: ${fontcolor}">${title}</h1>`+
        `${result}`+ `<div class="line-copyright"><pre>© ${title.toLowerCase()}, ${new Date().getFullYear() + 3}</pre></div>` +
       `</div>`)
    }

generateFooter(title, navItems, bgcolor, fontcolor)
