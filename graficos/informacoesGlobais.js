const url = 'https://raw.githubusercontent.com/Joko109dogbn/ciencias-de-dados/refs/heads/main/baseDeDados/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasTransportando = (dados.total_pessoas_que_necessitam_transporte_para_trabalho / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho)
    const minutos = Math.round((dados. tempo_medio_deslocamento_para_trabalho) * 100)
    const porcentagemTransportando = ((pessoasTransportando / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasTransportando} bilhões</span> estão indo trabalhar e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> Transportando.<br>Isso significa que aproximadamente <span>${porcentagemTransportando}%</span> de pessoas estão transportando.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
