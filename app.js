let quantidade_de_numeros;
let do_numero;
let ate_o_numero;
let numeros_sorteados = [];

function sortear()
{
    quantidade_de_numeros = parseInt(document.getElementById('quantidade').value);  
    do_numero = parseInt(document.getElementById('de').value); 
    ate_o_numero = parseInt(document.getElementById('ate').value); 

    if(quantidade_de_numeros <= 0 || do_numero <= 0 || ate_o_numero <= 0){
        exibir_texto('resultado',`Entrada inválida, digite um número maior que 0.`);
    }else{
        if(do_numero >= ate_o_numero){
            exibir_texto('resultado',`Entrada inválida, o campo "Do numero" deve ser menor que o campo "Até o numero".`);
        }else{
            if((ate_o_numero-do_numero) < quantidade_de_numeros){
                exibir_texto('resultado',`Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!".`);
            }else{
                for(let i = 0; i < quantidade_de_numeros; i++){
                    let numero = gerar_numeros_aleatorios(do_numero, ate_o_numero);
                    
                    while(numeros_sorteados.includes(numero)){
                        numero = gerar_numeros_aleatorios(do_numero, ate_o_numero);
                    }
                    
                    numeros_sorteados.push(numero);              
                    
                }
            
                if(quantidade_de_numeros == 1){
                    exibir_texto('resultado',`O numero sorteado foi: ${numeros_sorteados}`);
                }else{
                    exibir_texto('resultado',`Os numeros sorteados foram: ${numeros_sorteados}`);
                }
            }
        }
    }

    alterarStatusbotao();
}

function gerar_numeros_aleatorios(minimo,maximo){
    return parseInt(Math.random()*(maximo-minimo+1)+minimo);
}

function exibir_texto(tag,texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function limpar_campo(a){
    let i = document.getElementById(a);
    i.value = '';
}

function alterarStatusbotao(){
    let botaoSortear = document.getElementById('btn-sortear');
    if(botaoSortear.classList.contains('container__botao')){
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
        document.getElementById('btn-sortear').setAttribute('disabled',true)
    }else{
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
        document.getElementById('btn-sortear').removeAttribute('disabled');
    }

    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao')){
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
        document.getElementById('btn-reiniciar').setAttribute('disabled',true)
    }else{
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
        document.getElementById('btn-reiniciar').removeAttribute('disabled');
    }
}

function reiniciar(){
    limpar_campo('quantidade');
    limpar_campo('de');
    limpar_campo('ate');
    numeros_sorteados = [];
    alterarStatusbotao();

    exibir_texto('resultado','Números sorteados:  nenhum até agora');
}