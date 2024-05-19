document.addEventListener("DOMContentLoaded", function() {
    fetch('/menu/menu.json')
        .then(response => response.json())
        .then(data => {
            renderMenu(data.baslangic, 'baslangic-list');
            renderMenu(data.anaYemekler, 'ana-yemekler-list');
            renderMenu(data.tatlilar, 'tatlilar-list');
            renderMenu(data.icecekler, 'icecekler-list');
        });
});

function renderMenu(items, elementId) {
    const list = document.getElementById(elementId);
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} TL`;
        list.appendChild(listItem);
    });
}
