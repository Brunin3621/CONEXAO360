// Data do evento para o qual estamos fazendo a contagem regressiva
const eventDate = new Date("2025-02-15T00:00:00").getTime();

// Atualiza a contagem regressiva a cada 1 segundo
const countdownFunction = setInterval(function() {

    // Data e hora atuais
    const now = new Date().getTime();
    
    // Diferença entre a data do evento e o momento atual
    const distance = eventDate - now;
    
    // Calcula dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Exibe a contagem regressiva no HTML
    document.getElementById("countdown").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // Se o evento acontecer, mostrar mensagem e parar a contagem
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "O evento aconteceu!";
    }
}, 1000);
