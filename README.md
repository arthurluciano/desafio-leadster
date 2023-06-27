![Cover image](./.github/cover.svg)

# Desafio Leadster - Landing Page

## 📄 Overview

Esse projeto se trata de um desafio técnico front-end para empresa Leadster. Ele se encontra disponível para visualização em https://desafio-leadster-livid.vercel.app/.

## 🏭 Tecnologias

### Next.js

O Next.js é um framework de desenvolvimento web baseado em React que oferece renderização no servidor, roteamento avançado e otimizações de desempenho. Com Next.js, é possível criar aplicações front-end poderosas e escaláveis com facilidade.

[Site do Next](https://nextjs.org/)

### Styled Components

O Styled-components é uma biblioteca de estilização para React que permite escrever estilos CSS de forma declarativa e componentizada, usando sintaxe similar ao CSS-in-JS. Com styled-components, os estilos são encapsulados em componentes, facilitando a reutilização e o desenvolvimento de interfaces consistentes e estilizadas de forma dinâmica.

[Site do Styled Components](https://styled-components.com/)

### Radix UI

O Radix UI é uma biblioteca de componentes UI modular e acessíveis para React que segue os princípios do design de sistema. Ela oferece componentes prontos para uso, personalizáveis e estilizados, permitindo a construção rápida e consistente de interfaces de usuário. Radix UI também enfatiza a acessibilidade, facilitando a criação de aplicações inclusivas.

[Site do Radix UI](https://www.radix-ui.com/)

### Phosphor Icons

O Phosphor Icons é uma biblioteca de ícones minimalistas, modernos e de código aberto. Ela oferece uma ampla variedade de ícones em formato SVG, que podem ser facilmente integrados em projetos web e de aplicativos. Com Phosphor Icons, é possível adicionar ícones estilizados e visualmente atraentes em sua interface de usuário de forma simples e personalizada.

[Site do Phosphor Icons](https://phosphoricons.com/)

### Mantine Hooks

O pacote @mantine/hooks é uma biblioteca de hooks personalizados para React desenvolvida pela Mantine. Ele oferece uma coleção de hooks reutilizáveis e prontos para uso que abrangem diversas funcionalidades, como controle de formulários, animações, gerenciamento de estado e interações complexas. Com o @mantine/hooks, é possível adicionar facilmente funcionalidades avançadas aos seus componentes React, economizando tempo e esforço de desenvolvimento.

[Site do Mantine](https://mantine.dev/)

## 🧪 Ferramentas Adicionais

### Commitlint

Commitlint ajuda a equipe a aderir a uma convenção de commit. Ao suportar configurações instaladas pelo npm, facilita o compartilhamento de convenções de commit. (Fonte: Commitlint)

[Website oficial](https://commitlint.js.org)

### Commitizen

Commitizen define uma forma padrão de regras de commit e comunica isso (usando a CLI fornecida pelo Commitizen). (Fonte: Commitizen)

[Website oficial](https://commitizen-tools.github.io/commitizen/)

### Lint-staged

Execute linters contra arquivos git preparados e não deixe que erros deslizem para a sua base de código! (Fonte: Lint-staged)

[Repositório oficial no Github](https://github.com/okonet/lint-staged)

### ESLint

ESLint é uma ferramenta para identificar e relatar padrões encontrados no código ECMAScript/JavaScript. (Fonte: ESLint)

[Website oficial](https://github.com/eslint/eslint)

### Prettier

Prettier é um formatador de código. (Fonte: Prettier)

[Website oficial](https://prettier.io)

## :construction_worker: Instalação local

Instale as ferramentas necessárias para executar o projeto:

- [Node](https://nodejs.org/) (Necessário >= v18)

### Instalando as dependências

Instale as dependências do projeto rodando o seguinte comando

```bash
pnpm install
```

## 🏃 Scripts

Os seguintes scripts estão disponíveis no arquivo `package.json`:

### dev

```bash
pnpm dev
```

Roda todos os aplicativos em modo de desenvolvimento. O vite atualiza automaticamente o código conforme você for salvando os arquivos.

### build

```bash
pnpm build
```

Roda o comando `build` que irá buildar de forma otimizada a aplicação Next.js para ser usada posteriormente em uma plataforma de deploy compatível.

### commit

```bash
pnpm commit
```

Executa o `lint-staged` para identificar arquivos modificados e executa o `git-cz` para criar um commit padronizado baseado nas opções de CLI.
