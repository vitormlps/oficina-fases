const express = require('express')
const servico_registro = require('./servicos/registro');
const servico_impressao = require('./servicos/impressao');
const servico_etapas = require('./servicos/etapas');
const servico_remocao = require('./servicos/remocao');

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

async function main() {

    ///////////
    // Intro //
    ///////////
    app.get('/', (req, res) => {
        res.send(`Bem vindx ao registrador automático da Oficina Fases!
                \nIniciando registro da Ordem de Serviço.
                \nBuscando informações. ... Um momento, por favor...`)
    })

    ////////////////////////////
    // Registro das entidades //
    ////////////////////////////
    // Veículo //
    app.post('/veiculos', async (req, res) => {
        try {
            res.status(201).json(await servico_registro
                .registrarVeiculo(req.body));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    });

    // Cliente //
    app.post('/clientes', async (req, res) => {
        try {
            res.status(201).json(await servico_registro
                .registrarCliente(req.body));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    });

    // Ordem de Serviço //
    app.post('/os', async (req, res) => {
        try {
            res.status(201).json(await servico_registro
                .registrarOS(req.body));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    });

    //////////////////////
    // Listar entidades //
    //////////////////////
    // Veículo //
    app.get('/veiculos', async (req, res) => {
        try {
            res.status(200).json(await servico_impressao
                .imprimirTodos('veiculo'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Cliente //
    app.get('/clientes', async (req, res) => {
        try {
            res.status(200).json(await servico_impressao
                .imprimirTodos('cliente'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Ordem de Serviço //
    app.get('/os', async (req, res) => {
        try {
            res.status(200).json(await servico_impressao
                .imprimirTodos('os'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Falha na listagem de entidades //
    app.get('/falha', async (req, res) => {
        try {
            res.status(200).json(await servico_impressao
                .imprimirTodos(undefined));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    /////////////////////////
    // Busca das entidades //
    /////////////////////////
    // Veículo //
    app.get('/veiculos/:id', async (req, res) => {
        try {
            res.status(200).json(await servico_impressao
                .imprimirEntidade('veiculo', req.params.id));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Cliente //
    app.get('/clientes/:id', async (req, res) => {
        try {
            res.status(200).json(await servico_impressao
                .imprimirEntidade('cliente', req.params.id));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Ordem de Serviço //
    app.get('/os/:id', async (req, res) => {
        try {
            res.status(200).json(await servico_impressao
                .imprimirEntidade('os', req.params.id));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    ///////////////////////
    // Atualização da OS //
    ///////////////////////
    // Vistoria //
    app.put('/os/:id/vistoria', async (req, res) => {
        try {
            if (await servico_etapas.realizarEtapa(req.params.id, 'vistoria')) {
                res.status(200).json("Veículo está liberado! Obrigado e até mais!")
            } else {
                res.status(200).json("Veículo danificado. Enviando para próxima etapa.")
            }
        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Desmontagem //
    app.put('/os/:id/desmontagem', async (req, res) => {
        try {
            res.status(200).json(
                await servico_etapas.realizarEtapa(req.params.id, 'desmontagem'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Funilaria //
    app.put('/os/:id/funilaria', async (req, res) => {
        try {
            res.status(200).json(
                await servico_etapas.realizarEtapa(req.params.id, 'funilaria'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Montagem //
    app.put('/os/:id/montagem', async (req, res) => {
        try {
            res.status(200).json(
                await servico_etapas.realizarEtapa(req.params.id, 'montagem'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Acabamento //
    app.put('/os/:id/acabamento', async (req, res) => {
        try {
            res.status(200).json(
                await servico_etapas.realizarEtapa(req.params.id, 'acabamento'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    ///////////////////////////
    // Remoção das entidades //
    ///////////////////////////
    // Veículo //
    app.delete('/veiculos/:id', async (req, res) => {
        try {
            res.status(200).json(await servico_remocao
                .remover(req.params.id, 'veiculo'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Cliente //
    app.delete('/clientes/:id', async (req, res) => {
        try {
            res.status(200).json(await servico_remocao
                .remover(req.params.id, 'cliente'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Ordem de Serviço //
    app.delete('/os/:id', async (req, res) => {
        try {
            res.status(200).json(await servico_remocao
                .remover(req.params.id, 'os'));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })

    // Remoção de um conjunto de entidades //
    app.delete('/entidades/:id', async (req, res) => {
        try {
            res.status(200).json(await servico_remocao
                .removerConjunto(req.params.id));

        } catch (err) {
            if (err && err.id) {
                res.status(err.id).json({ Erro: err.mensagem })
            }
            else {
                res.status(500).json({ Erro: "Erro na aplicação." });
            }
        }
    })
}

main();
app.listen(port, () => {
    console.log(`Escutando a porta: ${port}`)
    main();
})