export interface Participante{

//verificar com o professor
    nome_cidade: string
    bairro: string
    rua: string
    numero: string
// -------------------------

    id: number
    nome: string
    data_de_nascimento: string
    telefone: string
    responsavel: string

    endereco: Endereco

    centro_de_treinamento: number
    cor_da_faixa: number
    
    fid: number
    cdtid: number
}  

export interface Endereco{
    rua: string;
    numero: string;
    bairro: string;
    cidade: Cidade
} 

export interface Cidade{
    nome_cidade: string
}


