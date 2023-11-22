# Cabeceira Web - Aplicativo de Gerenciamento de Livros

## Descrição Geral

O Cabeceira Web é a interface do usuário para o aplicativo de gerenciamento de livros Cabeceira API. Essa aplicação web permite aos usuários interagirem de forma intuitiva com sua biblioteca pessoal, visualizando, adicionando e gerenciando livros.

**Link para o Cabeceira API (Backend):** [cabeceira-api](https://github.com/nlperri/cabeceira-api)

**Repositório e2e cypress:** [cypress-cabeceira](https://github.com/JoaoVitorSantDrade/cypress-cabeceira)

### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Build tool para desenvolvimento rápido.
- **React Router Dom**: Roteamento para Single Page Applications.
- **Axios**: Cliente HTTP para realizar chamadas à API.
- **React Hook Form**: Biblioteca para lidar com formulários React.
- **Zod**: Biblioteca para validação de dados.

### Versões das Dependências no package.json

- React: 18.2.0
- Vite: 4.4.5
- React Router Dom: 6.18.0
- Axios: 1.6.1
- React Hook Form: 7.48.2
- Zod: 3.22.4

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Ambiente de Desenvolvimento

Certifique-se de ter as dependências instaladas e configuradas:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## Docker

Execute o seguinte comando para construir a imagem Docker:
```bash
    docker build -t cabeceira-web .
```

Após a construção da imagem, execute o seguinte comando para iniciar o contêiner:

```bash
    docker run -p 8080:80 cabeceira-web
```


A aplicação estará disponível em `http://localhost:8080`.

## 

**Nota:** Este projeto está em constante desenvolvimento. Se encontrar algum problema ou tiver sugestões, sinta-se à vontade para contribuir ou abrir uma issue.


