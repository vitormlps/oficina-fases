create table veiculo (
	id_veiculo serial primary key,
	tipo char(10) not null,
	marca char(30) not null,
	modelo char(50) not null,
	placa char(7) not null,
	quilometragem double precision not null,
	cor char(14) not null
);

create table cliente (
	id_cliente serial primary key,
	nome char(30) not null,
	contato char(14) not null,
	endereco char(250) not null,
	cpf char(14) not null,
	id_veiculo integer not null,
	constraint fk_CliVei foreign key (id_veiculo) references veiculo(id_veiculo)
);

create table ordem_servico (
	id_os serial primary key,
	data_entrada date not null,
	descricao char(250) not null,
	quantidade_danos integer not null,
	trocar_pecas boolean not null,
	fotos char(250) not null,
	vistoria boolean not null default FALSE,
	desmontagem boolean not null default FALSE,
	funilaria boolean not null default FALSE,
	montagem boolean not null default FALSE,
	acabamento boolean not null default FALSE,
	id_cliente integer not null,
	constraint fk_OsCli foreign key (id_cliente) references cliente(id_cliente)
);


select * from veiculo
select * from cliente
select * from ordem_servico

drop table ordem_servico;
drop table cliente;
drop table veiculo;

