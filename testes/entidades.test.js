const Random = require('../servicos/input_mock');
const OrdemServico = require('../entidades/ordem_servico');
const Cliente = require('../entidades/cliente');
const Veiculo = require('../entidades/veiculo');

// Validação das entidades
// Veículo
let novoVeiculo = new Veiculo()
novoVeiculo.setTipo(Random.v_Tipo())
novoVeiculo.marca = Random.v_Marca()
novoVeiculo.modelo = Random.v_Modelo()
novoVeiculo.placa = Random.v_Placa()
novoVeiculo.quilometragem = Random.v_Quilometragem()
novoVeiculo.cor = Random.v_Cor()
describe('O veículo', () => {
    test('está criado', () => {
        expect(new Veiculo()).toBeInstanceOf(Veiculo);
        expect(novoVeiculo).toBeInstanceOf(Veiculo);
    });
    describe('com tipos', () => {
        test('Carro, Moto e Caminhão determinados', () => {
            expect(novoVeiculo.tipos).toHaveProperty('Carro');
            expect(novoVeiculo.tipos).toHaveProperty('Moto');
            expect(novoVeiculo.tipos).toHaveProperty('Caminhão');
        });
        test('e com apenas um desses tipos como verdadeiro', () => {
            let count = 0
            for (let tipo in novoVeiculo.tipos) {
                if (novoVeiculo.tipos[tipo]) {
                    count++
                }
            }
            expect(count).toBe(1);
        });
    });
    describe('com marca', () => {
        test('contendo apenas letras', () => {
            expect(novoVeiculo.marca).toEqual(
                expect.stringMatching(/^\D+$/)
            );
        });
        test('e nenhum caracter especial', () => {
            expect(novoVeiculo.marca).toEqual(
                expect.not.stringMatching(/^\W+$/)
            );
        });
    });
    describe('com modelo', () => {
        test('sendo uma string', () => {
            expect(novoVeiculo.modelo).toEqual(
                expect.stringMatching(/^.+$/)
            );
        });
    });
    describe('com placa', () => {
        test('contendo apenas 7 caracteres', () => {
            expect(novoVeiculo.placa).toHaveLength(7);
        });
        test('e apenas 3 letras e 4 números', () => {
            expect(novoVeiculo.placa).toEqual(
                expect.stringMatching(/^[A-Z]{3}[0-9]{4}$/)
            );
        });
        test('e nenhum caracter especial', () => {
            expect(novoVeiculo.placa).toEqual(
                expect.not.stringMatching(/^\W+$/)
            );
        });
    });
    describe('com quilometragem', () => {
        test('sendo um número positivo', () => {
            expect(novoVeiculo.quilometragem).toBeGreaterThan(0);
        });
        test('e não NaN', () => {
            expect(novoVeiculo.quilometragem).not.toBeNaN();
        });
    });
    describe('com cor', () => {
        test('sendo uma string', () => {
            expect(novoVeiculo.cor).toEqual(
                expect.stringMatching(/^.+$/)
            );
        });
    });
});

// Cliente
let novoCliente = new Cliente()
novoCliente.nome = Random.c_Nome()
novoCliente.contato = Random.c_Contato()
novoCliente.endereco = Random.c_Endereco()
novoCliente.cpf = Random.c_Cpf()
novoCliente.veiculo = novoVeiculo
describe('O cliente', () => {
    test('está criado', () => {
        expect(new Cliente()).toBeInstanceOf(Cliente);
        expect(novoCliente).toBeInstanceOf(Cliente);
    });
    describe('com nome', () => {
        test('completo', () => {
            expect(novoCliente.nome).toEqual(
                expect.stringMatching(/^[A-Z][a-z].+ [A-Z][a-z].+$/)
            );
        });
        test('contendo apenas letras', () => {
            expect(novoCliente.nome).toEqual(
                expect.stringMatching(/^\D+$/)
            );
        });
        test('e nenhum caracter especial', () => {
            expect(novoCliente.nome).toEqual(
                expect.not.stringMatching(/^\W+$/)
            );
        });
    });
    describe('com contato', () => {
        test('contendo apenas 14 caracteres', () => {
            expect(novoCliente.contato).toHaveLength(14);
        });
        test('e padronizado como (xx) xxxx-xxxx', () => {
            expect(novoCliente.contato).toEqual(
                expect.stringMatching(/^\([1-9]{2}\) (?:[2-8]|[1-9])[0-9]{3}\-[0-9]{4}$/)
            );
        });
    });
    describe('com endereco', () => {
        test('sendo uma string', () => {
            expect(novoCliente.endereco).toEqual(
                expect.stringMatching(/^.+$/)
            );
        });
    });
    describe('com CPF', () => {
        test('contendo apenas 14 caracteres', () => {
            expect(novoCliente.cpf).toHaveLength(14);
        });
        test('e padronizado como xxx.xxx.xxx-xx', () => {
            expect(novoCliente.cpf).toEqual(
                expect.stringMatching(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/)
            );
        });
    });
    describe('com veículo', () => {
        test('registrado', () => {
            expect(novoCliente.veiculo).toBe(novoVeiculo);
        });
    });
});

// Ordem de Serviço
let novaOS = new OrdemServico()
novaOS.dataEntrada = Random.os_DataEntrada()
novaOS.descricao = Random.os_Descricao()
novaOS.quantidadeDanos = Random.os_QtdeDanos()
novaOS.trocarPecas = Random.os_TrocarPecas()
novaOS.fotos = Random.os_Fotos()
novaOS.cliente = novoCliente
describe('A ordem de serviço', () => {
    test('está criada', () => {
        expect(new OrdemServico()).toBeInstanceOf(OrdemServico);
        expect(novaOS).toBeInstanceOf(OrdemServico);
    });
    describe('com data de entrada', () => {
        test('no padrão xxxx-xx-xx', () => {
            expect(novaOS.dataEntrada).toEqual(
                expect.stringMatching(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
            );
        });
    });
    describe('com descrição', () => {
        test('contendo apenas letras', () => {
            expect(novaOS.descricao).toEqual(
                expect.stringMatching(/^\D+$/)
            );
        });
    });
    describe('com quantidade de danos', () => {
        test('sendo um número positivo', () => {
            expect(novaOS.quantidadeDanos).toBeGreaterThan(0);
        });
        test('e não NaN', () => {
            expect(novaOS.quantidadeDanos).not.toBeNaN();
        });
    });
    describe('com troca de peças', () => {
        test('sendo um booleano', () => {
            expect(typeof novaOS.trocarPecas).toEqual("boolean");
        });
    });
    describe('com cliente', () => {
        test('registrado', () => {
            expect(novaOS.cliente).toBe(novoCliente);
        });
    });
});