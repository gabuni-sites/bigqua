//IA
function enviar() {
    let pkramdom = Math.floor(Math.random() * 6);
if (pkramdom == 0) {
    document.getElementById("txtresposta").innerText = "Hehehe, " + document.getElementById("input3").value ;
} else if(pkramdom == 1) {
     document.getElementById("txtresposta").innerText = "O " + document.getElementById("input1").value + " não parece." ;
} else if(pkramdom == 2) {
    document.getElementById("txtresposta").innerText = "Meu deus, " + document.getElementById("input1").value + "." ;
} else if (pkramdom == 3) {
     document.getElementById("txtresposta").innerText = "EBAAAAAA " + document.getElementById("input4").value + " kkkkkkkkkkkkkkkkkkk" ;
} else if (pkramdom == 4) {
    document.getElementById("txtresposta").innerText = "O  " + document.getElementById("input4").value + " NÃO NÉ!" ;
} else if (pkramdom == 5) {
    document.getElementById("txtresposta").innerText = "O  " + document.getElementById("input2").value + " Falta porque "  + document.getElementById("input1").value + " Não" ;
}

}

//celular

const celular = /Android|iPhone|iPad|iPod|Mobile/i.test(
    navigator.userAgent
);

if (celular) {
    document.open();
    document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>BIGQUA - Indisponível</title>
            <style>
                body {
                    background: #792828;
                    color: white;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px 20px;
                }
            </style>
        </head>
        <body>
            <h1>ATENÇÃO!</h1>
            <p>BIGQUA só está disponível em computadores.</p>
            <p>Tente novamente usando seu laptop ou computador.</p>
        </body>
        </html>
    `);
    document.close();
}
