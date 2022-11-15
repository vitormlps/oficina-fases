const _ = require('underscore');

//http://underscorejs.org/#

nomes = [
    'Miguel', 'Arthur', 'Gael', 'Heitor', 'Theo', 'Davi', 'Gabriel', 'Bernardo', 'Samuel', 'Vitor',
    'Helena', 'Alice', 'Laura', 'Ana', 'Valentina', 'Vitoria', 'Clara', 'Cecília', 'Julia', 'Sophia',
]
sobrenomes = [
    'Braga', 'da Silva', 'Zampirolli', 'Della Coletta', 'Fernandes', 'Alves', 'Costalonga', 'Botteon', 'Caliman', 'de Oliveira',
    'Zanette', 'Salvador', 'Silva', 'Zandonadi', 'Pesca', 'Falqueto', 'Tosi', 'da Costa', 'de Souza', 'Gomes',
]
contatos = [
    '(99) 2748-0113', '(83) 2742-2725', '(48) 2852-6685', '(69) 2627-7845', '(93) 2571-8716',
    '(69) 3432-4166', '(86) 3414-2131', '(89) 2964-8514', '(83) 2560-1019', '(33) 2213-5584',
]
enderecos = [
    'QE 11 Área Especial C | Bairro Guará | Brasília/DF | 71020631',
    'Travessa da CDL | Bairro Centro | Ji-Paraná/RO | 76900032',
    'Rua dos Carijós | Bairro Centro | Belo Horizonte/MG | 30120060',
    'Rua Carlos Augusto Cornelsen | Bairro Bom Retiro | Curitiba/PR | 80520560',
    'Av. Almirante Maximiano Fonseca | Bairro Zona Portuária | Rio Grande/RS | 96204040',
]
cpfs = [
    '537.199.055-00', '586.532.826-37', '117.066.880-16', '162.541.836-17', '545.671.929-07', '386.975.691-84', '429.273.283-31',
    '428.228.364-50', '098.070.955-57', '524.629.747-09',
]
function c_Nome() {
    return _.sample(nomes) + ' ' + _.sample(sobrenomes)
}
function c_Contato() {
    return _.sample(contatos)
}
function c_Endereco() {
    return _.sample(enderecos)
}
function c_Cpf() {
    return _.sample(cpfs)
}


tipos = ['Carro', 'Moto', 'Caminhão',]
marcas = [
    'Daewoo', 'Jeep', 'Citroen', 'Mercury', 'Walk', 'CHERY', 'Fibravan', 'Bugre', 'AM Gen', 'ASTON MARTIN',
]
modelos = [
    'Nubira SW CDX 2.0 16V Mec.', 'Grand Cherokee Laredo 4.0 Aut.', 'DS3 Sport Chic 1.6 TB 16V 3p Mec.', 'Sable LS 3.0 V6', 'Buggy Walk Sport 1.6 8V 58cv', 'CIELO 1.6 16V 119cv  5p',
    'Buggy Vip 1.8 8V', 'Buggy IV e V', 'Hummer Wagon 6.5 4x4 Diesel TB', 'S5 Sportback 3.0 TFSI Quattro Stronic',
]
placas = [
    'KFF5901', 'HRA7444', 'MWA1030', 'MZN0244', 'HPO5185', 'NEX5553', 'HQU3203', 'MNN0472', 'NAH2859', 'MWH1848',
]
quilometragens = [
    120000, 80000, 60000, 40000, 20000, 10000, 100000, 200000, 50000, 150000,
]
cores = [
    'Verde', 'Dourado', 'Amarelo', 'Bege', 'Preto', 'Vermelho', 'Azul', 'Cinza', 'Branco', 'Rosa', 'Prata',
]
function v_Tipo() {
    return _.sample(tipos)
}
function v_Marca() {
    return _.sample(marcas)
}
function v_Modelo() {
    return _.sample(modelos)
}
function v_Placa() {
    return _.sample(placas)
}
function v_Quilometragem() {
    return _.sample(quilometragens)
}
function v_Cor() {
    return _.sample(cores)
}


datas = [
    '2022-11-13', '2020-01-30', '2021-07-06', '2023-04-01', '2019-12-18',
    '2022-03-03', '2023-05-26', '2021-02-28', '2022-10-05', '2022-06-22',
]

descricoes = [
    'Colisão', 'Amasso', 'Causas naturais', 'Risco', 'Acidente fatal',
]
qtdeDanos = [
    1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
]
trocarPecas = [15, 40, 54, 71, 86, 35, 41, 1, 68, 97]
fotos = [
    '/oficina-fases/fotos/sinistro_01.jpg', '/oficina-fases/fotos/sinistro_02.jpg', '/oficina-fases/fotos/sinistro_03.jpg', '/oficina-fases/fotos/sinistro_04.jpg', '/oficina-fases/fotos/sinistro_05.jpg',
]
function os_DataEntrada() {
    return _.sample(datas)
}
function os_Descricao() {
    return _.sample(descricoes)
}
function os_QtdeDanos() {
    return _.sample(qtdeDanos)
}
function os_TrocarPecas() {
    let sample = _.sample(trocarPecas)
    console.log(sample)
    if (sample >= 50) {
        return true
    }
    return false
}
function os_Fotos() {
    return _.sample(fotos)
}

module.exports = {
    c_Nome, c_Contato, c_Endereco, c_Cpf,
    v_Tipo, v_Marca, v_Modelo, v_Placa, v_Quilometragem, v_Cor,
    os_Descricao, os_QtdeDanos, os_TrocarPecas, os_Fotos, os_DataEntrada,
}