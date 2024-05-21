
let tempoEntrada = prompt('Digite o horário da sua entrada: (hora:minuto:segundo)')
let tempoSaida = prompt('Digite o horário da sua saída: (hora:minuto:segundo)')
let placa = prompt('Digite a sua placa: ')

let partesEntrada = tempoEntrada.split(':')
let horaEntrada = Number(partesEntrada[0])
let minutoEntrada = Number(partesEntrada[1])
let segundoEntrada = Number(partesEntrada[2])

let partesSaida = tempoSaida.split(':')
let horaSaida = Number(partesSaida[0])
let minutoSaida = Number(partesSaida[1])
let segundoSaida = Number(partesSaida[2])

let tempoEntradaFinal = convertendoTempo(horaEntrada, minutoEntrada, segundoEntrada)
let tempoSaidaFinal = convertendoTempo(horaSaida, minutoSaida, segundoSaida)

let valorAPagar = gastoEstacionamento(tempoEntradaFinal, tempoSaidaFinal)

document.write(`<p>O valor a pagar: R$<strong>${valorAPagar}</strong></p><br>`)

function convertendoTempo(hora, minuto, segundo) {
    let tempoTotalemMinutos = 0

    hora *= 60
    segundo /= 60

    tempoTotalemMinutos = hora + minuto + segundo

    return parseFloat(tempoTotalemMinutos.toFixed(2));

}

function gastoEstacionamento(entrada, saida) {
    let tempoEstacionado = saida - entrada

    let pagamento = 0

    if (tempoEstacionado <= 15) {
        pagamento += 0
    } else if (tempoEstacionado > 15 && tempoEstacionado <= 60) {
        pagamento = 15
    } else {
        pagamento = 15
        tempoEstacionado -= 60
        while (tempoEstacionado > 0) {
            pagamento += 3
            tempoEstacionado -= 60
        }
    }

    return pagamento.toFixed(2)
}

function verificarPlaca(numeroPlaca) {
    return numeroPlaca
}