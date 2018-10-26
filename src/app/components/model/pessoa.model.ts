import { EnderecoDTO } from "./endereco.model";

export class Pessoa {
    cpf?: string;
    nome?: string;
    email?: string;
    enderecoDTO?: EnderecoDTO = new EnderecoDTO;
}