
document.addEventListener("DOMContentLoaded", function() {
    let currentNode = document.documentElement;
    function navigateDOM(node, callback) {
        const children = Array.from(node.children);
        const content = node.textContent.trim().split("\n")[0].slice(0, 30) + "...";
        let message = `Ви знаходитесь у вузлі: <${node.tagName.toLowerCase()}> ${content}\n`;
        if (children.length > 0) { message += "Йти далі (вниз) чи завершити?"; }
        else { message += "Це останній вузол. Повернутись назад або завершити?"; }
        const action = prompt(message, "вниз / назад / завершити");
        if (action === "вниз" && children.length > 0) { callback(children[0], navigateDOM); }
        else if (action === "назад" && node.parentElement) { callback(node.parentElement, navigateDOM); }
        else if (action === "завершити") { alert("Навігація завершена."); }
        else { alert("Недопустима команда. Спробуйте ще раз."); navigateDOM(node, callback); }
    }
    const navButton = document.createElement('button');
    navButton.textContent = 'Почати навігацію по DOM';
    navButton.style.position = 'fixed';
    navButton.style.top = '10px';
    navButton.style.right = '10px';
    navButton.style.padding = '10px';
    navButton.style.backgroundColor = '#4CAF50';
    navButton.style.color = '#fff';
    navButton.style.border = 'none';
    navButton.style.cursor = 'pointer';
    document.body.appendChild(navButton);
    navButton.addEventListener('click', function() { navigateDOM(currentNode, navigateDOM); });
});
