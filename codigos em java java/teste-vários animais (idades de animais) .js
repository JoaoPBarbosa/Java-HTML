<script>

function calcularIdadePet1(nome, idade, taxa){
    var nome = prompt("qual o nome do seu petzinho?");
    var idade = prompt("qual a idade do seu pet?:");
    var especie = prompt("qual a espécie do seu pet? cachorro? canguru? ou baleia?")
    var idadefinal = idade * taxa;
    

    alert( nome + "tem" + idadefinal + "em anos de verdade!!"+ "Um cachorro tem uma relação de" + taxa + "anos de cachorro para cada 1 ano humano")
}

calcularIdadePet1(0 , 0 , 7)


function calcularIdadePet2(nome, idade, taxa2){
    var nome2 = prompt("qual o nome do seu petzinho?");
    var idade2 = prompt("qual a idade do seu pet?:");
    var especie2 = prompt("qual a espécie do seu pet? cachorro? canguru? ou baleia?")
    var idadefinal2 = idade2 * taxa2;
    

    alert( nome2 + "tem" + idadefinal2 + "em anos de verdade!!"+ "Um canguru tem uma relação de" + taxa2 + "anos de cachorro para cada 1 ano humano")
}
calcularIdadePet2(0 , 0 , 5)
     //colocar 0 quando não tiver um valor certo 
     //tem que ser os valores em sequencia iguais a das declaradas lá em cima 
     //tmj meu eu do futuro sei que vc vai rever esse arquivo pra relembrar como usa isso

function calcularIdadePet3(nome, idade, taxa3){
    var nome3 = prompt("qual o nome do seu petzinho?");
    var idade3 = prompt("qual a idade do seu pet?:");
    var especie3 = prompt("qual a espécie do seu pet? cachorro? canguru? ou baleia?")
    var idadefinal3 = idade3 * taxa3;
    

    alert( nome3 + "tem" + idadefinal3 + "em anos de verdade!!"+ "Um(a) baleia tem uma relação de" + taxa3 + "anos de cachorro para cada 1 ano humano")
}
calcularIdadePet3(0 , 0 , 20)
</script>