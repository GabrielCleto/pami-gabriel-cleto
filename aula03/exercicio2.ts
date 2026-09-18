

let cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];

function listarCidades(nomes: string[]): void {
  nomes.forEach(cidade => console.log(cidade));
}

listarCidades(cidades);
