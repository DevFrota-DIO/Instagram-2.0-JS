function func() {
    let input = document.querySelector('#pass'); //Variavel "input" recebe o input com id=pass


    if (input.getAttribute('type') == 'password') { //Se o tipo for igual "password"
        input.setAttribute('type', 'text'); //Troca tipo para texto
        document.getElementById("bot").value = "Ocultar"; //E muda o value do input com id=bot
    } else {
        input.setAttribute('type', 'password'); //Senão o tipo do input "pass" para password novamente
        document.getElementById("bot").value = "Mostrar"; //E Troca novamente o value
    }

}