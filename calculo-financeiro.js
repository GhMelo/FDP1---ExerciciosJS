CalculoFinanceiro = function(tipo){
        this.tipo = tipo;
    }
    juntadorNome =function(){
    }
    CalculoFinanceiro.prototype.CalculoJuros =function(){  
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    n3 = n1*n2/100;

    window.alert("N1 por N2 fica: " + n3);    

    }
   CalculoFinanceiro.prototype.calculoSalario =function(){
       salario = document.getElementById("salario").value;
       valeTrans = document.getElementById("valeTrans").value;
       ticket = document.getElementById("ticket").value;
       soma = parseInt(salario) + parseInt(valeTrans) + parseInt(ticket);
       window.alert("A soma dos indicados é: " + soma)

   }
   CalculoFinanceiro.prototype.calculoMedia =function(){
       salario1 = document.getElementById("salario1").value;
       salario2 =document.getElementById("salario2").value;
       media = ((parseInt(salario1)+parseInt(salario2))/2);
       window.alert("A media dos Salarios é: " + media);
   }
   //Concatenador = Juntador
   juntadorNome.prototype.juntadeiro=function(){
       nome1 = document.getElementById("nome1").value;
       nome2 =document.getElementById("nome2").value;
       nomejuntado = nome1+nome2;
       window.alert("A junção dos nomes é: "+ nomejuntado);
   }
    C1 = new CalculoFinanceiro("tipo1");
    J1 = new juntadorNome;