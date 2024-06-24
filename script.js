const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que a IA pode aumentar o desemprego no Brasil?",
        alternativas: [
            "Acredito que a IA pode sim comprometer o emprego, até porque o uso dos robôs já é evidente no Brasil, comprometendo as vagas de emprego para os humanos. ",
            "Acredito que isso não acontecerá, pois os robôs são limitados, pois não são capazes de ter uma interação direta com as pessoas."
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];