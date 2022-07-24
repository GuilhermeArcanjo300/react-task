export function tempoParaSegundo(tempo: string) {
    const [horas = '0', minutos = '0', segundo = '0'] = tempo.split(":");

    const horasEmSegundo = Number(horas) * 3600;
    const minutosEmSegundo = Number(minutos) * 60;
    return horasEmSegundo + minutosEmSegundo + Number(segundo);

}