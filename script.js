function openTab(evt, tabName) {
    // Esconde todas as abas
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os botões de abas
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    // Exibe a aba ativa
    document.getElementById(tabName).style.display = "block";

    // Adiciona a classe "active" ao botão da aba clicada
    evt.currentTarget.className += " active";
}

// Mostra a aba de Engenharia por padrão ao carregar a página
document.getElementsByClassName("tab-button")[0].click();
