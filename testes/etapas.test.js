const CrudOs = require('../persistencia/crud_os');
const Etapas = require('../servicos/etapas');

// Validação das funções de etapas
// setup
let realizarEtapa = Etapas.realizarEtapa

// Vistoria
describe('A Vistoria do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            let os = await CrudOs.buscarUltimoRegistro()
            const data = await realizarEtapa(os.id_os, 'vistoria');
            expect(typeof data).toBeDefined();
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await realizarEtapa()
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
        test('ou numbers', async () => {
            try {
                await realizarEtapa(0)
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
    });
});

// Desmontagem
describe('A Desmontagem do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            let os = await CrudOs.buscarUltimoRegistro()
            const data = await realizarEtapa(os.id_os, 'desmontagem');
            expect(typeof data).toBeDefined();
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await realizarEtapa()
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
        test('ou numbers', async () => {
            try {
                await realizarEtapa(0)
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
    });
});

// Funilaria
describe('A Funilaria do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            let os = await CrudOs.buscarUltimoRegistro()
            const data = await realizarEtapa(os.id_os, 'funilaria');
            expect(typeof data).toBeDefined();
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await realizarEtapa()
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
        test('ou numbers', async () => {
            try {
                await realizarEtapa(0)
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
    });
});

// Montagem
describe('A Montagem do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            let os = await CrudOs.buscarUltimoRegistro()
            const data = await realizarEtapa(os.id_os, 'montagem');
            expect(typeof data).toBeDefined();
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await realizarEtapa()
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
        test('ou numbers', async () => {
            try {
                await realizarEtapa(0)
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
    });
});

// Acabamento
describe('O Acabamento do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            let os = await CrudOs.buscarUltimoRegistro()
            const data = await realizarEtapa(os.id_os, 'acabamento');
            expect(typeof data).toBeDefined();
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await realizarEtapa()
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
        test('ou numbers', async () => {
            try {
                await realizarEtapa(0)
            } catch (err) {
                expect(err).toEqual({ id: 400, mensagem: "Erro ao verificar o status da etapa." });
            }
        });
    });
});