export function FormatedPrice(value: number) {
  const price = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(value)

  return price
}
