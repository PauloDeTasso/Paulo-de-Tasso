var imagem = document.getElementById('start')

var numeroAleatorioFraseInterno;

var frase0 = "0";
var frase1 = "1";
var frase2 = "2";
var frase3 = "3";
var frase4 = "4"
var frase5 = "5"

var frases = new Array(frase0, frase1, frase2, frase3, frase4, frase5);

function numeroAleatorioFrase(min, max)
{
    numeroAleatorioFraseInterno = Math.floor(Math.random() * (max - min) + min);
}

function alterarImagem()
{
    numeroAleatorioFrase(0, 5);
    imagem.setAttribute('src', '/imagens/start' + numeroAleatorioFraseInterno + '.png')
}

function retornarImagem()
{
    imagem.setAttribute('src', '/imagens/start0.png')
}

function contagemRegresiva()
{
    var t = setTimeout("alterarImagem()", 1000);
    var t = setTimeout("alterarImagem()", 2000);
    var t = setTimeout("alterarImagem()", 3000);
    var t = setTimeout("alterarImagem()", 4000);
    var t = setTimeout("alterarImagem()", 5000);
    var t = setTimeout("alterarImagem()", 6000);
}

