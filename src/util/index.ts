export const RandomIndexs = (length: number, quantity: number) => {
  const numbers: Array<number> = []
  for (let index = 0; index < quantity; index++) {
    const randomNumber: number = Math.floor(Math.random() * length)

    if (!numbers.find((item) => item === randomNumber)) {
      numbers.push(randomNumber)
    }
  }
  return numbers
}
