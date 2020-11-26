export interface Product { //define os atributos da interface, metodo existente apenas no TS
    id?: number //o ? torna o atributo não obrigatório na hora de passar. 
    name: string
    price: number
}