# Dashboard de Monitoramento Logistico

Dashboard funcional para monitoramento de atrasos, transportadoras, regioes criticas e entregas prioritarias.

## Como rodar localmente

```bash
npm start
```

Depois acesse:

```text
http://localhost:3000
```

## Como publicar no Railway

1. Suba este projeto para um repositorio no GitHub.
2. No Railway, escolha **New Project**.
3. Selecione **Deploy from GitHub repo**.
4. Escolha o repositorio deste projeto.
5. O Railway vai executar automaticamente:

```bash
npm start
```

O servidor usa a variavel `PORT` fornecida pelo Railway, entao nao precisa configurar porta manualmente.

## Arquivos principais

- `dashboard-logistico.html`: interface, dados ficticios, filtros, indicadores, graficos e tabela.
- `server.js`: servidor Node nativo para hospedar o dashboard.
- `package.json`: comando de inicializacao para deploy.
