# AgileLife - Jogo Multiplayer Web de Gerenciamento de Projetos Ágeis

## Descrição Geral

AgileLife é um emocionante jogo multiplayer web que simula o ambiente de um projeto ágil de desenvolvimento de software. O jogo permite aos participantes mergulharem em um ambiente simulado onde enfrentam desafios comuns encontrados em equipes ágeis de desenvolvimento de software.


**Deploy:** [agile-life](https://main-agile-life-web.onrender.com/)

**Link para o Backend:** [back-end](https://github.com/ProjetosParceiros/agilelife-backend)

### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Build tool para desenvolvimento rápido.
- **React Router Dom**: Roteamento para Single Page Applications.
- **Axios**: Cliente HTTP para realizar chamadas à API.

### Versões das Dependências no package.json

- React: 18.2.0
- Vite: 4.4.5
- React Router Dom: 6.18.0
- Axios: 1.6.1

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
    docker build -t agile-life-web .
```

Após a construção da imagem, execute o seguinte comando para iniciar o contêiner:

```bash
    docker run -p 8080:80 agile-life-web
```


A aplicação estará disponível em `http://localhost:8080`.

## 


