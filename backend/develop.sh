#!/bin/bash

# Função para encerrar processos
terminate_processes() {
  kill "$parse_server_pid" "$parse_dashboard_pid"
  rm parse-server.log parse-dashboard.log
}

# Captura sinal de término para encerrar processos
trap terminate_processes SIGINT SIGTERM

# Variáveis de configuração
export APPLICATION_ID=Jw8LjVIempu7YWkA9TAnFEUAEbnT6cXeFO7LmkX2
export MASTER_KEY=kFlVdVhmBTlbX0WxI1PqoR288D97DKGq22wA1MDa
export CLIENT_KEY=oJcKBU9pwrM0p08F0kDbz9eUTGQsk5HUi3TL9QKe

docker compose up mongodb -d

# Iniciar Parse Server e Parse Dashboard
node index.js > parse-server.log 2>&1 &
parse_server_pid=$!

parse-dashboard --appId $APPLICATION_ID --masterKey $MASTER_KEY --serverURL "http://localhost:1337/parse" > parse-dashboard.log 2>&1 &
parse_dashboard_pid=$!

# Espera até que os processos sejam encerrados
wait $parse_server_pid $parse_dashboard_pid
