# TodoList - Lista de Tarefas

Uma **aplicação prática para organizar suas tarefas do dia a dia**, construída com **React** e **TypeScript**. O TodoList permite criar, editar, concluir e deletar tarefas de forma simples e intuitiva, com **feedback visual** e **persistência automática no LocalStorage**, dando a sensação de um app real.  

Este projeto foi feito para **aprimorar habilidades em front-end**, mostrando **hooks customizados, modularidade e boas práticas de código**.

---

## Tecnologias utilizadas

- **React 18** – componentes funcionais e hooks  
- **TypeScript** – tipagem forte para consistência e segurança  
- **React Router** – roteamento (preparado para expansão)  
- **class-variance-authority (CVA)** – estilização condicional de classes  
- **vite-plugin-svgr** – transformar SVGs em componentes React  
- **use-local-storage** – persistência de dados no navegador  

---

## Funcionalidades principais

- Adicionar novas tarefas rapidamente  
- Editar tarefas existentes de forma intuitiva  
- Marcar tarefas como concluídas  
- Deletar tarefas que não são mais necessárias  
- Feedback visual de carregamento (simulando requisições de API)  
- Persistência automática das tarefas no **LocalStorage**  

---

## Estrutura do projeto

### Components principais
- `Card`  
- `ButtonIcon`  
- `InputText`  
- `InputCheckbox`  
- `Skeleton`  
- `Text`  
- E outros componentes reutilizáveis  

### Hooks Customizados
- `useTasks` → gerencia a lista de tarefas e estados de carregamento  
- `usetask` → gerencia criação, atualização, deleção e status das tarefas  

### Modelos (Types)
- `Task` e `TaskState` → garantem consistência e tipagem forte  

### Simulação de API
- Delays usando a função `delay` para dar sensação de requisições reais  

---

## Como usar

1. Clone o repositório:  
```bash
git clone <URL_DO_SEU_REPOSITORIO>

2. Instale as dependências:
pnpm install

3. Execute o projeto:
pnpm dev

4. Abra o navegador em:
http://localhost:5173


