export const mesages = (user: string, msg: string) => {
    switch (msg) {
        case 'moveEyes':
            return `É agora ${user}, bora lá meu parça Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.`    
        default:
            return `É agora, bora lá Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.`
}
}