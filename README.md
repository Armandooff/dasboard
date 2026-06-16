# Dashboard de Monitoramento Logistico

Dashboard funcional para monitoramento de atrasos, transportadoras, regioes criticas e entregas prioritarias.

## Como abrir pelo GitHub Pages

Este projeto esta preparado para rodar como site estatico no GitHub Pages.

1. Suba os arquivos para o GitHub.
2. No repositorio, entre em **Settings**.
3. Acesse **Pages**.
4. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Salve e aguarde o GitHub gerar o link.

O link deve ficar parecido com:

```text
https://armandooff.github.io/dasboard/
```

## Como rodar localmente

Voce pode abrir o arquivo `index.html` direto no navegador ou rodar com Node:

```bash
npm start
```

Depois acesse:

```text
http://localhost:3000
```

## Arquivos principais

- `index.html`: estrutura da interface do dashboard.
- `style.css`: estilos visuais e responsividade.
- `script.js`: dados ficticios, filtros, indicadores, graficos e tabela.
- `server.js`: servidor Node opcional para teste local ou Railway.
- `package.json`: comando de inicializacao para ambiente Node.

## Publicacao alternativa no Railway

O projeto tambem continua compativel com Railway. O servidor usa a variavel `PORT` fornecida pela plataforma, entao nao precisa configurar porta manualmente.
