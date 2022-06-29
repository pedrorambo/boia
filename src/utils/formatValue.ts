export default function formatValue(input: number) {
  return `R$ ${input.toFixed(2).replace(/\./g, ",")}`;
}
