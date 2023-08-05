update estados
set nome = 'Maranhão'
where sigla = 'MA'

update estados
set nome = 'Paraná',
    populacao = 11.32
where sigla = 'PR'

insert into estados 
(id, nome, sigla, regiao, populacao)
values 
(1000, 'Novo', 'NV', 'Nordeste', '15.8')

