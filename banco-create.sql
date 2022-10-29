create table cliente
(id_cliente serial not null,
 nome char(30) not null,
 contato char(30) not null,
 endereco char(30) not null,
 cpf char(14) not null,
 id_veiculo integer not null,
 primary key (id_cliente),
 foreign key (id_veiculo) references veiculo(id_veiculo)
);

create table veiculo
(id_veiculo serial not null,
 tipo char(10) not null,
 marca char(30) not null,
 modelo char(30) not null,
 placa char(7) not null,
 quilometragem double precision not null,
 cor char(14) not null,
 primary key (id_veiculo)
);

create table os
(id_os serial not null,
 data date not null,
 tipo char(10) not null,
 quantidade_danos integer not null,
 trocar_pecas boolean not null,
 fotos char(250) not null,
 id_cliente integer not null,
 id_veiculo integer not null,
 id_etapas integer not null,
 primary key (id_os),
 foreign key (id_cliente) references cliente(id_cliente),
 foreign key (id_veiculo) references veiculo(id_veiculo),
 foreign key (id_etapas) references etapas(id_etapas)
);

create table etapas
(id_etapas serial not null,
 desmontagem boolean not null,
 funilaria boolean not null,
 preparacao boolean not null,
 pintura boolean not null,
 montagem boolean not null,
 acabamento boolean not null,
 primary key (id_etapas)
);


select * from cliente
select * from veiculo
select * from os
select * from etapas