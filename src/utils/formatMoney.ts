export function formatMoney(value: number) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });
}