export default class Receita{
    //peso base da receita é 408g (regra de negócio)
    constructor(farinha=200, agua=134, azeite=5, sal=4.5, fermento =3.5, acucar = 5, ovo=56){
        this.farinha = farinha,
        this.agua = agua,
        this.azeite = azeite,
        this.sal = sal,
        this.fermento = fermento,
        this.acucar = acucar,
        this.ovo = ovo

        this.pesoBase = [
            this.farinha,
            this.agua,
            this.azeite,
            this.sal,
            this.fermento,
            this.acucar,
            this.ovo
          ].reduce((total, ingrediente) => total + ingrediente, 0)
        
          this.receita = { }
          this.totalPizza = 0 
    }

    calcularQtdeIngredientes(){
        let massaObjetivoProducao = 1000000 // regra de négocio diz que a gente deve calcular quantidade de ingredientes para 1 tonelada de massa
        
        const fatorEscala = massaObjetivoProducao / this.pesoBase
        
        this.receita = {
            farinha: parseFloat((this.farinha* fatorEscala).toFixed(3)),
            agua: parseFloat((this.agua* fatorEscala).toFixed(3)),
            azeite: parseFloat((this.azeite* fatorEscala).toFixed(3)),
            sal: parseFloat((this.sal* fatorEscala).toFixed(3)),
            fermento: parseFloat((this.fermento* fatorEscala).toFixed(3)),
            acucar: parseFloat((this.acucar* fatorEscala).toFixed(3)),
            ovo: parseFloat((this.ovo* fatorEscala).toFixed(3)),
        }

        this.receita.farinha
    }
    verificarQtdeOvos(){
        let quantidadeOvos = Math.ceil(this.receita.ovo / 56); 
        return quantidadeOvos  
     }
}