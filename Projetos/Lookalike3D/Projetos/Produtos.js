
var imagensProjetos3d = document.getElementsByClassName('imagensProjetos3d');

var menu = document.getElementsByClassName('menu');

var imagemDeFundo01 = document.getElementById('imagemDeFundo01');

var cabecalho = document.getElementById('cabecalho');

var secaoImagens = document.getElementById('secaoImagens');

var rodape = document.getElementById('rodape');

var htmlPrincipal = document.getElementById('htmlPrincipal');

var secaoTemas = document.getElementById('secaoTemas');

var botaoMenu = document.getElementById('botaoMenu');

var statusSistema = document.getElementById('statusSistema');

var linkCompraAtual01;
var linkCompraAtual02;
var linkCompraAtual03;
var linkCompraAtual04;
var linkCompraAtual05;

var fx1 = document.getElementById('fx1');

var fx2 = document.getElementById('fx2');

var secaoItemsHome = document.getElementById('secaoItemsHome');
var secaoItemsProducts = document.getElementById('secaoItemsProducts');
var secaoItemsCollections = document.getElementById('secaoItemsCollections');
var secaoItemsHome = document.getElementById('secaoItemsHome');

var imagemBotaoMenu = document.getElementById('imagemBotaoMenu');
var home = document.getElementById('home');
var products = document.getElementById('products');
var collections = document.getElementById('collections');
var options = document.getElementById('options');
var contact = document.getElementById('contact');
var itemContact = document.getElementById('itemContact');

var divCadeiras = document.getElementById('divCadeiras');
var divMesas = document.getElementById('divMesas');
var divArmarios = document.getElementById('divArmarios');
var divCama = document.getElementById('divCama');
var divComodas = document.getElementById('divComodas');
var divTelevisao = document.getElementById('divTelevisao');
var divRack = document.getElementById('divRack');
var divSofa = document.getElementById('divSofa');
var divBancos = document.getElementById('divBancos');
var divChicaras = document.getElementById('divChicaras');
var divTacas = document.getElementById('divTacas');

var divSala = document.getElementById('divSala');
var divQuarto = document.getElementById('divQuarto');
var divCozinha = document.getElementById('divCozinha');
var divBanheiro = document.getElementById('divBanheiro');
var divEscritorio = document.getElementById('divEscritorio');
var divQuarto = document.getElementById('divQuarto');
var divGaragem = document.getElementById('divGaragem');
var divJardim = document.getElementById('divJardim');
var divExternalArea = document.getElementById('divExternalArea');
var divSotao = document.getElementById('divSotao');
var divPorao = document.getElementById('divPorao');

var botaoComprar01 = document.getElementById('botaoComprar01');
var botaoComprar02 = document.getElementById('botaoComprar02');
var botaoComprar03 = document.getElementById('botaoComprar03');
var botaoComprar04 = document.getElementById('botaoComprar04');
var botaoComprar05 = document.getElementById('botaoComprar05');

var imagemBotaoComprar01 = document.getElementById('imagemBotaoComprar01');
var imagemBotaoComprar02 = document.getElementById('imagemBotaoComprar02');
var imagemBotaoComprar03 = document.getElementById('imagemBotaoComprar03');
var imagemBotaoComprar04 = document.getElementById('imagemBotaoComprar04');
var imagemBotaoComprar05 = document.getElementById('imagemBotaoComprar05');

var botaoComprar = document.getElementById('botaoComprar');

var secaoOpcoesCompra = document.getElementById('secaoOpcoesCompra');

var secaoBotaoComprar = document.getElementById('secaoBotaoComprar');
var botaoComprar = document.getElementById('botaoComprar');
var imagemBotaoComprar = document.getElementById('imagemBotaoComprar');

var botoesCabecalho = document.getElementById('botoesCabecalho');

var relogio = document.getElementById('relogio');

var secaoImagemDeFundo = document.getElementById('secaoImagemDeFundo');

var bloco = document.getElementById('bloco');

var secaoOptions = document.getElementById('secaoOptions');

var imagemDeFundo = document.getElementById('imagemDeFundo');

var imagemInstagram = document.getElementById('imagemInstagram');

var imagemFacebook = document.getElementById('imagemFacebook');

var imagemSkype = document.getElementById('imagemSkype');

var imagemTwitter = document.getElementById('imagemTwitter');

var imagemBotaoGaleriaStoolHigh001 = document.getElementById('imagemBotaoGaleriaStoolHigh001');

var imagemBotaoGaleriaComoda001 = document.getElementById('imagemBotaoGaleriaComoda001');

var imagemBotaoGaleriaRack001 = document.getElementById('imagemBotaoGaleriaRack001');

var imagemBotaoGaleriaRack002 = document.getElementById('imagemBotaoGaleriaRack002');

var imagemBotaoGaleriaGuardaRoupa001 = document.getElementById('imagemBotaoGaleriaGuardaRoupa001');

var imagemBotaoGaleriaMesaDeCentro001 = document.getElementById('imagemBotaoGaleriaMesaDeCentro001');


var menuCommodes = document.getElementById('menuCommodes');

var menuStoolHigh = document.getElementById('menuStoolHigh');

var menuRack01 = document.getElementById('menuRack01');

var menuRack02 = document.getElementById('menuRack02');

var menuCloset = document.getElementById('menuCloset');

var menuCenterTable = document.getElementById('menuCenterTable');

var botaoPassarImagens01 = document.getElementById('botaoPassarImagens01');

var botaoPassarImagens02 = document.getElementById('botaoPassarImagens02');

var titulosMenu = document.getElementsByClassName('titulosMenu');

var coordenadas = {};

var propriedadeCoordenada = {};

var distanciaImagens;

var menuAberto = false;

var ultimaDirecaoScroll = 0;

var primeiraImagem = 0;

var posicaoImagens;

var statusSistema2 = document.getElementById('statusSistema2');

var tempoIntervalo = 100;

var larguraJanela = window.outerWidth;
var alturaJanela = window.outerHeight;

var larguraTela = screen.width;
var alturaTela = screen.height;

var cartao = document.getElementById('cartao');

cartao.addEventListener('mouseenter', () => { cartao.classList.toggle('virar') }, false);

//

function abrirPagina(link, target)
{
    window.open(link, target);
}

function tamanhoJanela()
{

    for (let index = 0; index < imagensProjetos3d.length; index++)
    {
        imagensProjetos3d[ index ].style.borderStyle = "solid";

        imagensProjetos3d[ index ].style.borderColor = "rgba(0,0,0,0)";

        imagensProjetos3d[ index ].style.opacity = 1;

        imagensProjetos3d[ index ].style.borderWidth = alturaJanela / 2 + "px 0px " + alturaJanela / 2 + "px 0px";

        imagensProjetos3d[ index ].style.width = "100%";

        imagensProjetos3d[ index ].style.height = "auto";
    }
};

//

function iconeTamanho(icone)
{
    icone.style.width = "55px";
    icone.style.height = "55px";
}

function iconeTamanhoMenor(icone)
{
    icone.style.width = "50px";
    icone.style.height = "50px";
}

function iconeOpacidade(icone)
{
    icone.style.opacity = "1";
    icone.style.backgroundColor = "rgba(200,200,200,.5)";
}

function iconeOpacidadeMenor(icone)
{
    icone.style.opacity = ".5";
    icone.style.backgroundColor = "rgba(200,200,200,0)";
}

function iconeTamanhoLink(imagem, botao)
{
    imagem.style.opacity = ".9";
    botao.style.opacity = ".9";
}

function iconeTamanhoLinkMenor(imagem, botao)
{
    imagem.style.opacity = "1";
    botao.style.opacity = "1";
}

function iconeBackgroundColor(icone, cor)
{
    icone.style.backgroundColor = cor;
}

function iconeBackgroundColorOriginal(icone, cor)
{
    icone.style.backgroundColor = cor;
}

function scrollImagens()
{

};

//

function mostrarBotaoComprar(statusBotaoComprar)
{
    if (imagemDeFundo.src.endsWith('00.png') == true)
    {
        secaoBotaoComprar.style.display = "none";
        secaoBotaoComprar.style.visibility = "hidden";

        secoesBotoesVoltarAvancar.style.display = "none";
        secoesBotoesVoltarAvancar.style.visibility = "hidden";

    } else
    {

        secaoBotaoComprar.style.display = "flex";
        secaoBotaoComprar.style.visibility = "visible";
        secoesBotoesVoltarAvancar.style.display = "flex";
        secoesBotoesVoltarAvancar.style.visibility = "visible";

        if (statusBotaoComprar == true)
        {
            secaoBotaoComprar.style.display = "flex";
            secaoBotaoComprar.style.visibility = "visible";

        } else 
        {
            secaoBotaoComprar.style.visibility = "hidden";
            secaoBotaoComprar.style.display = "none";
        }

    }

}

mostrarBotaoComprar(false);

function linkComprar(link)
{
    abrirPagina(link, '_blank');
}

//

var botoes = document.getElementsByName("tema");

for (let index = 0; index < botoes.length; index++)
{
    botoes[ index ].addEventListener('change', checar, false);
}

function checar()
{
    let i = 0;
    for (i in botoes)
        if (botoes[ i ].checked)
        {
            switch (botoes[ i ].value)
            {
                case "A":
                    htmlPrincipal.style.backgroundColor = "rgba(0, 0, 0, 0)";

                    rodape.style.backgroundColor = "rgb(111, 0, 255);";

                    rodape.style.color = "rgb(111, 0, 255);";
                    break;

                case "B":
                    htmlPrincipal.style.backgroundColor = "rgba(0, 0, 0, 0)";

                    rodape.style.backgroundColor = "rgb(111, 0, 255);";

                    rodape.style.color = "rgb(111, 0, 255);";
                    break;

                default:
                    statusSistema2.innerHTML = "THEME ERRO";
            }
        } else
        {

        }
};

function coordenada(elemento, propriedade)
{
    coordenadas = elemento.getBoundingClientRect();

    propriedadeCoordenada = coordenadas[ propriedade ];

    return parseInt(propriedadeCoordenada);
}

// RELOGIO

//setInterval(showTime, 1000);

function showTime()
{
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    let currentTime = hour + ":"
        + min + ":" + sec + "s || 3D™";

    relogio.innerHTML = "Lookalike® || " + "\n" + currentTime;
}

showTime();

//////////////////////////////////////////

tamanhoJanela();

window.addEventListener('scroll', scrollImagens, false);

window.addEventListener('resize', function ()
{
    tamanhoJanela();
}, false);

/////////////

function abrirFecharMenu()
{
    var estiloCabecalho = window.getComputedStyle(cabecalho);
    var propriedadeCabecalho = estiloCabecalho.getPropertyValue('height');

    if (propriedadeCabecalho == "70px")
    {
        menuAberto = true;
        abrirMenu();
    } else 
    {
        menuAberto = false;
        fecharMenu();
    }
}

function abrindoFechandoMenu()
{
    if (menuAberto)
    {
        cabecalho.style.visibility = "visible";
        cabecalho.style.opacity = 1;
        cabecalho.style.height = "120px";
        cabecalho.style.alignItems = "flex-start";

        //secaoTemas.style.visibility = "visible";
        relogio.style.display = "none";

        for (let i = 0; i < menu.length; i++) 
        {
            menu[ i ].style.visibility = "visible";
        }

        secaoItemsContact.style.visibility = "visible";

    } else
    {
        cabecalho.style.height = "70px"
        cabecalho.style.opacity = "1";
        cabecalho.style.alignItems = "flex-start";

        relogio.style.display = "flex";

        //secaoTemas.style.visibility = "hidden"

        for (let i = 0; i < menu.length; i++) 
        {
            menu[ i ].style.visibility = "hidden";
        }

        secaoItemsContact.style.visibility = "hidden";
    }
}

function playImagens() 
{
    htmlPrincipal.classList.toggle('playImagens');
}

function abrirMenuImagemIcone() 
{
    imagemBotaoMenu.classList.toggle('abrirMenuImagemIcone');
}

function abrirMenu() 
{
    cabecalho.classList.remove('abrirMenu');
    cabecalho.classList.add('abrirMenu');
    relogio.classList.remove('opacidade10')
    relogio.classList.add('opacidade10')
}

function fecharMenu() 
{
    cabecalho.classList.remove('fecharMenu');
    cabecalho.classList.add('fecharMenu');
}

function abrirOptions()
{
    secaoOptions.classList.remove('abrirItemMenu');
    secaoOptions.classList.add('abrirItemMenu');
}

function abrirOpcoesCompra()
{
    var estiloCabecalho = window.getComputedStyle(secaoOpcoesCompra);
    var propriedadeCabecalho = estiloCabecalho.getPropertyValue('display');

    if (propriedadeCabecalho == "none")
    {
        secaoOpcoesCompra.style.display = "flex";
        botaoComprar.style.display = "none";

    } else
    {
        secaoOpcoesCompra.style.display = "none";
        botaoComprar.style.display = "flex";
    }

    secaoBotaoComprar.style.backgroundImage = "url('../../../imagens/gif/carrinho.gif')";
}

function abrirFecharItemMenu(elemento, acao, event)
{
    event = event || window.event;

    var i;

    switch (elemento)
    {
        case secaoItemsHome:

            i = 0;

            if (event.type == "click" || event.type == "touchstart")
            {
                open("../../Lookalike3D/Lookalike3d.html", "_self")
            } else
            {

            }

            break;

        case secaoItemsProducts:
            i = 1;
            break;

        case secaoItemsCollections:
            i = 2;
            break;

        case secaoItemsOptions:
            i = 3;
            break;

        case secaoItemsContact:
            i = 4;
            break;

        default:
            i = 0;
    }

    if (acao)
    {
        elemento.style.visibility = "visible";

        titulosMenu[ i ].style.color = "rgb(255,255,255)";

    } else
    {
        elemento.style.visibility = "hidden";

        titulosMenu[ i ].style.color = "rgb(35, 240, 255)";
    }
}

function itemMenuAnimacaoFinalizada()
{

    for (let i = 0; i < secaoTemas.length; i++) 
    {
        secaoTemas[ i ].style.visibility = "visible";
        secaoTemas[ i ].style.opacity = 1;
    }
}

var imagemBotaoPassarImagens01 = document.getElementById('imagemBotaoPassarImagens01');

var imagemBotaoPassarImagens02 = document.getElementById('imagemBotaoPassarImagens02');

var imagensAtuaisGaleriaArray = [];

var produtoAtual;

var arrayAtual = 0;

function imagensAtuaisGaleria(produto)
{
    switch (produto)
    {
        case menuStoolHigh:

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/STOOL HIGH/STOOLHIGH001/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/STOOL HIGH/STOOLHIGH001/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/STOOL HIGH/STOOLHIGH001/03.png";

            imagensAtuaisGaleriaArray[ 3 ] = "../../../imagens/Projetos3d/STOOL HIGH/STOOLHIGH001/04.png";

            imagensAtuaisGaleriaArray[ 4 ] = "../../../imagens/Projetos3d/STOOL HIGH/STOOLHIGH001/05.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuStoolHigh;

            linkCompraAtual01 = "https://www.artstation.com/a/21126644";

            linkCompraAtual02 = "https://www.cgtrader.com/3d-models/architectural/decoration/leather-stool-high-lux";

            linkCompraAtual03 = "https://www.turbosquid.com/3d-models/3d-leather-stool-high-lux-1973774";

            linkCompraAtual04 = "https://blendermarket.com/products/leather-stool-high---lux";

            linkCompraAtual05 = "http://cbr.sh/jskh0f";

            break;

        case menuCommodes:

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/COMODAS/COMODA001/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/COMODAS/COMODA001/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/COMODAS/COMODA001/03.png";

            imagensAtuaisGaleriaArray[ 3 ] = "../../../imagens/Projetos3d/COMODAS/COMODA001/04.png";

            imagensAtuaisGaleriaArray[ 4 ] = "../../../imagens/Projetos3d/COMODAS/COMODA001/05.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuCommodes;

            //

            linkCompraAtual01 = "https://www.artstation.com/a/20807260";

            linkCompraAtual02 = "https://www.cgtrader.com/3d-models/furniture/cabinet/modern-commode-912d3fb8-4c0c-4fbf-9284-52ba21f05ff0";

            linkCompraAtual03 = "https://www.turbosquid.com/FullPreview/1969846";

            linkCompraAtual04 = "https://blendermarket.com/products/modern-commode";

            linkCompraAtual05 = "http://cbr.sh/lowa6j";

            break;

        case menuRack01:

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/RACKS/Rack001/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/RACKS/Rack001/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/RACKS/Rack001/03.png";

            imagensAtuaisGaleriaArray[ 3 ] = "../../../imagens/Projetos3d/RACKS/Rack001/04.png";

            imagensAtuaisGaleriaArray[ 4 ] = "../../../imagens/Projetos3d/RACKS/Rack001/05.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuRack01;

            linkCompraAtual01 = "https://www.artstation.com/a/20806538";

            linkCompraAtual02 = "https://www.cgtrader.com/3d-models/architectural/decoration/rack-retro-8dbe52e5-d8a6-42b9-99ae-2802815a2d9c";

            linkCompraAtual03 = "https://www.turbosquid.com/FullPreview/1969828";

            linkCompraAtual04 = "https://blendermarket.com/products/rack-retro";

            linkCompraAtual05 = "http://cbr.sh/6fejjz";

            break;

        case menuRack02:

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/RACKS/Rack002/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/RACKS/Rack002/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/RACKS/Rack002/03.png";

            imagensAtuaisGaleriaArray[ 3 ] = "../../../imagens/Projetos3d/RACKS/Rack002/04.png";

            imagensAtuaisGaleriaArray[ 4 ] = "../../../imagens/Projetos3d/RACKS/Rack002/05.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuRack02;

            linkCompraAtual01 = "https://www.artstation.com/a/20806773";

            linkCompraAtual02 = "https://www.cgtrader.com/3d-models/furniture/cabinet/rack-bistro";

            linkCompraAtual03 = "https://www.turbosquid.com/FullPreview/1969844";

            linkCompraAtual04 = "https://blendermarket.com/products/rack-bistro";

            linkCompraAtual05 = "http://cbr.sh/gb0tmf";

            break;

        case menuCloset:

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/GUARDA ROUPAS/GUARDAROUPA001/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/GUARDA ROUPAS/GUARDAROUPA001/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/GUARDA ROUPAS/GUARDAROUPA001/03.png";

            imagensAtuaisGaleriaArray[ 3 ] = "../../../imagens/Projetos3d/GUARDA ROUPAS/GUARDAROUPA001/04.png";

            imagensAtuaisGaleriaArray[ 4 ] = "../../../imagens/Projetos3d/GUARDA ROUPAS/GUARDAROUPA001/05.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuCloset;

            linkCompraAtual01 = "https://www.artstation.com/a/20807373";

            linkCompraAtual02 = "https://www.cgtrader.com/3d-models/furniture/cabinet/clear-glass-wardrobe";

            linkCompraAtual03 = "https://www.turbosquid.com/FullPreview/1969849";

            linkCompraAtual04 = "https://blendermarket.com/products/clear-glass-wardrobe";

            linkCompraAtual05 = "http://cbr.sh/jcbcue";

            break;

        case menuCenterTable:

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/01.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/02.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/03.png";

            imagensAtuaisGaleriaArray[ 3 ] = "../../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/04.png";

            imagensAtuaisGaleriaArray[ 4 ] = "../../../imagens/Projetos3d/MESAS DE CENTRO/MESADECENTRO001/05.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = menuCenterTable;

            linkCompraAtual01 = "https://www.artstation.com/a/20807541";

            linkCompraAtual02 = "https://www.cgtrader.com/3d-models/furniture/table/exotic-coffee-table-72553640-0af0-4ec7-8ec8-2786f45390c8";

            linkCompraAtual03 = "https://www.turbosquid.com/FullPreview/1969851";

            linkCompraAtual04 = "https://blendermarket.com/products/exotic-coffee-table";

            linkCompraAtual05 = "http://cbr.sh/z9x597";

            break;

        default:

            imagensAtuaisGaleriaArray[ 0 ] = "../../../imagens/Projetos3d/LOGO/LOGO04.png";

            imagensAtuaisGaleriaArray[ 1 ] = "../../../imagens/Projetos3d/LOGO04.png";

            imagensAtuaisGaleriaArray[ 2 ] = "../../../imagens/Projetos3d/LOGO04.png";

            imagensAtuaisGaleriaArray[ 3 ] = "../../../imagens/Projetos3d/LOGO04.png";

            imagensAtuaisGaleriaArray[ 4 ] = "../../../imagens/Projetos3d/LOGO04.png";

            //

            arrayAtual = 0;

            imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            //

            produtoAtual = produtoAtual;

            linkCompraAtual01 = "";
            linkCompraAtual02 = "";
            linkCompraAtual03 = "";
            linkCompraAtual04 = "";
            linkCompraAtual05 = "";

            break;
    }

    imagemBotaoPassarImagens01.style.visibility = "hidden";
    imagemBotaoPassarImagens02.style.visibility = "visible";

    //

    secaoOpcoesCompra.style.display = "none";
    botaoComprar.style.display = "flex";

    mostrarBotaoComprar(true);

    secaoBotaoComprar.style.backgroundImage = "url('../../../imagens/gif/shopnow01.gif')";

    imagemBotaoPassarImagens01.style.opacity = "1";
    imagemBotaoPassarImagens02.style.opacity = "1";

    imagemDeFundo.classList.toggle('opacidade01');

};

function acaoBotaoImagensAtuaisGaleria(direcao)
{
    switch (direcao)
    {
        case 'esquerda':

            //imagemDeFundo.classList.toggle('opacidade01');

            if (arrayAtual <= 0)
            {
                imagemBotaoPassarImagens01.style.visibility = "hidden";
                imagemBotaoPassarImagens02.style.visibility = "visible";

                arrayAtual = 0;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            } else if (arrayAtual >= imagensAtuaisGaleriaArray.length - 1)
            {
                imagemBotaoPassarImagens01.style.visibility = "visible";
                imagemBotaoPassarImagens02.style.visibility = "visible";

                arrayAtual = imagensAtuaisGaleriaArray.length - 1;

                --arrayAtual;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            } else
            {
                --arrayAtual;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

                if (arrayAtual <= 0)
                {
                    imagemBotaoPassarImagens01.style.visibility = "hidden";
                    imagemBotaoPassarImagens02.style.visibility = "visible";
                } else
                {
                    imagemBotaoPassarImagens01.style.visibility = "visible";
                    imagemBotaoPassarImagens02.style.visibility = "visible";
                }
            }

            break;

        case 'direita':

            //imagemDeFundo.classList.toggle('opacidade01');

            if (arrayAtual <= 0)
            {
                imagemBotaoPassarImagens01.style.visibility = "visible";
                imagemBotaoPassarImagens02.style.visibility = "visible";

                arrayAtual = 0;

                arrayAtual++;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            } else if (arrayAtual >= imagensAtuaisGaleriaArray.length - 1)
            {

                imagemBotaoPassarImagens01.style.visibility = "visible";
                imagemBotaoPassarImagens02.style.visibility = "hidden";

                arrayAtual = imagensAtuaisGaleriaArray.length - 1;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

            } else
            {
                arrayAtual++;

                imagemDeFundo.src = imagensAtuaisGaleriaArray[ arrayAtual ];

                if (arrayAtual >= imagensAtuaisGaleriaArray.length - 1)
                {
                    imagemBotaoPassarImagens01.style.visibility = "visible";
                    imagemBotaoPassarImagens02.style.visibility = "hidden";
                } else
                {
                    imagemBotaoPassarImagens01.style.visibility = "visible";
                    imagemBotaoPassarImagens02.style.visibility = "visible";
                }
            }

            break;

        default:

            break;
    }

    /*imagemDeFundo.style.animation = "none";
    setTimeout(function ()
    {
        imagemDeFundo.style.animation = "";
    }, 100);
*/
}

function fecharCompra()
{
    secaoBotaoComprar.style.visibility = "hidden";
}

imagemBotaoGaleriaStoolHigh001.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuStoolHigh)
}, false);

imagemBotaoGaleriaComoda001.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuCommodes)
}, false);

imagemBotaoGaleriaRack001.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuRack01)
}, false);

imagemBotaoGaleriaRack002.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuRack02)
}, false);

imagemBotaoGaleriaGuardaRoupa001.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuCloset)
}, false);

imagemBotaoGaleriaMesaDeCentro001.addEventListener('click', () =>
{
    imagensAtuaisGaleria(menuCenterTable)
}, false);

cabecalho.addEventListener('animationend', abrindoFechandoMenu, false);

secaoOptions.addEventListener('animationend', itemMenuAnimacaoFinalizada, false);

imagemBotaoPassarImagens01.addEventListener('click', () =>
{
    acaoBotaoImagensAtuaisGaleria('esquerda')
}, false);

imagemBotaoPassarImagens02.addEventListener('click', () =>
{
    acaoBotaoImagensAtuaisGaleria('direita')
}, false);

/*
botaoPassarImagens01.addEventListener('click', () =>
{
    acaoBotaoImagensAtuaisGaleria('esquerda')
}, false);

botaoPassarImagens02.addEventListener('click', () =>
{
    acaoBotaoImagensAtuaisGaleria('direita')
}, false);
*/

var numero = 0;

var contadorOpacidade = 0;

//fx1.play();

function imagemAtual()
{
    /*
        if (fx1.ended)
        {
            fx2.play();
        }
    */
    if (numero < 10)
    {
        numero = numero + 1;
        contadorOpacidade = Math.round(numero);
        htmlPrincipal.style.opacity = contadorOpacidade / 10;
        setTimeout(() =>
        {
            imagemAtual()
        }, 300);
    } else
    {
        //alert('Seja bem vindo!);
    }
}

imagemAtual();