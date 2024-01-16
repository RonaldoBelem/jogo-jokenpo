


function pontoCpu() {
     const pontosCpu=document.querySelector('.pontosCpu')
     
}

function cpu() {
     
     const x = Math.round(Math.random()*2)
     console.log(x)
     return x
}
function pedraj(x) { 
     const pontosPlay=document.querySelector('.pontosPlay')
     const escolha2 = document.querySelector(".resultadopc")
     const escolha1 = document.querySelector(".resultadoplay")
     escolha1.textContent='✊';  
     cpu()       
     const score = document.querySelector("#vencedor") 
     switch (cpu()) {
          case 0:
          score.textContent = "VOCÊ EMPATOU"
          escolha2.textContent='✊';
          break;
          case 1:
           score.textContent = "VOCÊ PERDEU"
           escolha2.textContent='✋';
           break;
           case 2:
                score.textContent = "VOCÊ GANHOU"
                escolha2.textContent='✌️';                         
                break;                         
                
                default:
           break;
          }
              
      }

     
      function papelj(x) {
          const escolha2 = document.querySelector(".resultadopc")
          const escolha1 = document.querySelector(".resultadoplay")
          escolha1.textContent='✋';  
          cpu()       
          const score = document.querySelector("#vencedor") 
          switch (cpu()) {
          case 0:
               score.textContent = "VOCÊ GANHOU"
               escolha2.textContent='✊';
                break;
          case 1:  
               score.textContent = "VOCÊ EMPATOU"
               escolha2.textContent='✋';
                     break;
          case 2:
               score.textContent = "VOCÊ PERDEU"
               escolha2.textContent='✌️';
                    break;                         

               default:
                    break;
          }
      }
      function tesouraj(x) {
          const escolha2 = document.querySelector(".resultadopc")
          const escolha1 = document.querySelector(".resultadoplay")
          escolha1.textContent='✌️';  
          cpu()       
          const score = document.querySelector("#vencedor") 
          switch (cpu()) {
          case 0:
               score.textContent = "VOCÊ PERDEU"
               escolha2.textContent='✊';
                break;
          case 1:
               score.textContent = "VOCÊ GANHOU"
               escolha2.textContent='✋';
               break;
          case 2:
               score.textContent = "VOCÊ EMPATOU"
               escolha2.textContent='✌️';
               break;                         

               default:
                    break;
          }
      }
