function criaCalculadora(){
    return{
         display: document.querySelector('.display'),
         btnClear: document.querySelector('.btn-clear'),
        
        cliqueBotoes(){
         document.addEventListener('click', e =>{
          const el = e.target

          if(el.classList.contains('btn-num')){
            this.btnParaDisplay(el.innerText)
          }

          if(el.classList.contains('btn-clear')){
            this.clearBtn()
           }

           if(el.classList.contains('btn-del')){
            this.delOne()
           }

           if(el.classList.contains('btn-eq')){
            this.resolver()
           }

         })
        },

        btnParaDisplay(valor){
        this.display.value += valor
        },

        clearBtn(){
        this.display.value = ' '
        },

        delOne(){
            this.display.value = this.display.value.slice(0,-1)
        },

        resolver(){
            let conta = this.display.value

            try{
                conta = eval(conta)


                if(!conta){
                    alert('Precisa de conta')
                    return
                }
                this.display.value = String(conta)
                
            }catch(e){
                alert('Precisa de conta')
                return
            }
        },


         iniciar(){
            this.cliqueBotoes()
         }



    }
}

const calculadora = criaCalculadora()
calculadora.iniciar()

