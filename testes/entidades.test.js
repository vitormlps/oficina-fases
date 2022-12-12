const CrudVeiculo = require('../persistencia/crud_veiculo');
const CrudCliente = require('../persistencia/crud_cliente');
const OrdemServico = require('../entidades/ordem_servico');
const Cliente = require('../entidades/cliente');
const Veiculo = require('../entidades/veiculo');

// setup
let novoVeiculo = new Veiculo()
novoVeiculo.tipo = "Carro"
novoVeiculo.marca = "Daewoo"
novoVeiculo.modelo = "Nubira SW CDX 2.0 16V Mec."
novoVeiculo.placa = "KFF5901"
novoVeiculo.quilometragem = 120000
novoVeiculo.cor = "Verde"

let novoCliente = new Cliente()
novoCliente.nome = "Gael Zampirolli"
novoCliente.contato = "(99) 2748-0113"
novoCliente.endereco = "Travessa da CDL | Bairro Centro | Ji-Paraná/RO | 76900032"
novoCliente.cpf = "117.066.880-16"

let novaOS = new OrdemServico()
novaOS.dataEntrada = "2023-05-26"
novaOS.descricao = "Acidente fatal"
novaOS.quantidadeDanos = 5
novaOS.trocarPecas = true
novaOS.fotos = "/oficina-fases/fotos/sinistro_03.jpg"

// Validação das entidades
describe('O veículo', () => {
    test('está criado', () => {
        expect(new Veiculo()).toBeInstanceOf(Veiculo);
        expect(novoVeiculo).toBeInstanceOf(Veiculo);
    });
    describe('com tipo', () => {
        test('contendo apenas letras', () => {
            expect(novoVeiculo.tipo).toEqual(
                expect.stringMatching(/^\D+$/)
            );
        });
        test('e nenhum caracter especial', () => {
            expect(novoVeiculo.tipo).toEqual(
                expect.not.stringMatching(/^\W+$/)
            );
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
        test('registrado', async () => {
            novoCliente.veiculo = await CrudVeiculo.buscarUltimoRegistro()
            expect(novoCliente.veiculo).toBeDefined();
        });
    });
});

// Ordem de Serviço
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
        test('registrado', async () => {
            novaOS.cliente = await CrudCliente.buscarUltimoRegistro()
            expect(novaOS.cliente).toBeDefined();
        });
    });
});