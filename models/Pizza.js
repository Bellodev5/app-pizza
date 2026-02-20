export default class Pizza{
    constructor(diametro, espessura){
        this.raio = diametro / 2
        this.altura = espessura
        this.densidade = 0.85 // regra de négocio diz que a densidade é 0.85
    }
    calcularAreaBase(){
        let area = Math.PI * (this.raio * this.raio)
        return area
    }
    calcularVolume(){
        let volume = this.calcularAreaBase() * this.altura
        return volume
    }

    getPesoUnitario(){
        return this.calcularVolume() * this.densidade
    }
}