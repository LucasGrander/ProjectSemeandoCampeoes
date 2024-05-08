export interface Participante{
    id: number
    nome: string
    data_de_nascimento: string
    telefone: string
    responsavel: string
    centro_de_treinamento: string
    cor_da_faixa: string
    endereco: Endereco
}  
export interface Endereco{
    rua: string;
    numCasa: string;
    bairro: string;
    cidade: Cidade
}  
export interface Cidade{
    nome_cidade: string
}  