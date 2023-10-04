interface CatAttributesItemProps {
  attribute: string
  score: number
}

export function CatAttributesItem({
  attribute,
  score,
}: CatAttributesItemProps) {
  // Certificar-se de que o número está no intervalo de 1 a 5
  const validNumber = Math.max(1, Math.min(score, 5))

  // Criar um array de 5 spans
  const spans = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < validNumber ? 'filled' : ''}></span>
  ))
  console.log(spans)

  return (
    <>
      <strong>{attribute}: </strong>
      <div>{spans}</div>
    </>
  )
}
