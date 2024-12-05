import { getCSS, tickConfig } from "./common.js"

async function quantidadePessoasTransportandos() {
    const url = 'https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/blob/Aula01/transporte/transporte-numero-tipos-locomocao.json'
    const dados = await res.json()
    const nomeDeTransportadoras= Object.keys(dados)
    const quantidadeDeTransportadoras = Object.values(dados)

    const data = [
        {
            x: nomeDeTransportadoras,
            y: quantidadeDeTransportadoras,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Area de trabalho com mais transportadoras',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das Transportadoras',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de Transportadoras',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
    quantidadePessoasTransportandos()