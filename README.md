# Aplicativo Dicionários (Desafio Técnico Coodesh). (React Native)

## Intro

### Aplicativo utilizando React Native como parte do desafio da Coodesh. Este aplicativo possui a funcionalidade de consumir uma API de dicionário, proporcionando aos usuários uma experiência aprimorada na busca por definições e significados.<br><br>

Foi utilizado diversos recursos do React Native para melhorar a performance, arquitetura e usabilidade do aplicativo.
<br><br>

> Alguns dos recursos utilizados.

- Async Storage
- React Navigation
- Axios
- Date Fns
- Expo
- Firebase
- React Native Reanimated
- Redux
- Rxjs
- Styled Component

<br />

## Screenshot

<div>
   <img src="https://github.com/ThompsonMss/app-codex-api-correrios-react-native/assets/30129295/890d90f7-2ccd-49db-87d5-da020182fb9a" width="200" />
  <img src="https://github.com/ThompsonMss/app-codex-api-correrios-react-native/assets/30129295/e21d5b65-36f4-4997-b8f7-ccfc761db393" width="200" />
  <img src="https://github.com/ThompsonMss/app-codex-api-correrios-react-native/assets/30129295/0497de01-b066-4cd3-8bd9-99a31d596c79" width="200" />
  <img src="https://github.com/ThompsonMss/app-codex-api-correrios-react-native/assets/30129295/bc523ebd-bf8b-437a-98fe-16e2ac790554" width="200" />
  <img src="https://github.com/ThompsonMss/app-codex-api-correrios-react-native/assets/30129295/7cab7f90-7a81-415b-b762-49141f963dbc" width="200" />
  <img src="https://github.com/ThompsonMss/app-codex-api-correrios-react-native/assets/30129295/8c37e975-7f95-464c-be1b-e8e747be28c5" width="200" />
</div>

<br>

## Instalação

Siga os comandos abaixo para instalar essa aplicação em sua máquina.

> ❗ É necessário que você tenha instalado em seu ambiente de desenvolvimento o NodeJS e NPM.

```bash
# Clonando o repositório da aplicação.

git clone https://github.com/ThompsonMss/mobile-invillia-coodesh.git coodesh
```

```bash
# Entrando na pasta da aplicação.

cd coodesh/
```

```bash
# Comando para instalar os pacotes necessários da aplicação.

npm i
```

```bash
# Comando para rodar a aplicação.

npx run start
```

> Certo! Agora basta escanear o QR Code usando o aplicativo Expo para concluir o processo de instalação e começar a utilizar.

<br>

## Processo de Desenvolvimento

- Análise de Requisitos e Configuração do Projeto: Começou com uma análise dos requisitos e configurou o projeto usando Expo, incluindo configurações como linter e paths alias.

- Definição de Arquitetura: Optou por uma arquitetura baseada em clean code e SOLID, organizando as pastas de forma clara.

- Estilização com Styled Components: Escolheu o Styled Components para criar estilos de forma isolada e preparada para futuros temas.

- Design System e Responsividade de Fontes: Criou seus próprios estilos e utilizou uma biblioteca de terceiros para garantir a responsividade das fontes.

- Gerenciamento de Rotas com React Navigation: Escolheu o React Navigation para o roteamento da aplicação.

- Autenticação com Firebase: Optou por usar o Firebase para autenticação, considerando suas funcionalidades e limitações de uso.

- Gerenciamento de Estado com Redux: Estruturou o gerenciamento de estado global com Redux, principalmente para controlar informações do usuário e dados offline.

- Wireframe e Navegação entre Telas: Usou o Top Tab do React Navigation para separar as abas na tela inicial.

- Controle de Dados da API e Armazenamento Local: Centralizou o controle dos dados da API no Redux e utilizou AsyncStorage para armazenar favoritos e histórico.

- Optimização de Performance com FlatList: Utilizou FlatList e scroll infinito para lidar com grandes conjuntos de dados.

- Armazenamento de Dados no Firebase: Optou por armazenar dados grandes no Firebase Realtime Database.

- Cache de API com AsyncStorage: Decidiu usar AsyncStorage para o cache da API em vez de React Query.

- Integração de Áudio com AV do Expo: Implementou a reprodução de áudio usando AV do Expo.

## Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/thompson-silva)

<br>

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
