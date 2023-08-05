select * from estados 

select estados

select sigla, nome as 'Nome do estado' from estados
where regiao = 'Sul'

select nome, regiao from estados
where populacao >= 10
order by nome desc

