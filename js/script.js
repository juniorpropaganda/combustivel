function combustivel() {
    let gasolina = document.getElementById('gasolina').value;
    let etanol = document.getElementById('etanol').value;
    let resultado = document.getElementById('resultado');

    gasolina = gasolina.replace(',', '.');
    etanol = etanol.replace(',', '.');

    let maisbarato = etanol / gasolina;

    if (gasolina != '' && etanol != '') {
     if (maisbarato < 0.7) {
        resultado.innerHTML = "Etanol é mais barato";
    } else {
        resultado.innerHTML = "Gasolina é mais barato";
    } 
    } else {
        alert('Preencha todos os campos');
    }
}

function verificarInput(event) {
    let x = event.key;
    
    if (x != 0 && x != 1 && x != 2 && x != 3 && x != 4 && x != 5 && x != 6 && x != 7 && x != 8 && x != 9 && x != '.' && x != ',' && x != 'Backspace' && x != 'Delete' && x != 'ArrowLeft' && x != 'ArrowRight') {
        alert('Digite apenas números');
        document.getElementById('gasolina').value = '';
        document.getElementById('etanol').value = '';
        
    }
    
}