export function rgbToHex(rgbString: string) {
  // Extrair os valores de R, G e B da string RGB
  const match = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  if (!match) {
    throw new Error('Formato inválido de string RGB')
  }

  const red = parseInt(match[1], 10)
  const green = parseInt(match[2], 10)
  const blue = parseInt(match[3], 10)

  // Converter os valores de RGB para hexadecimal
  const redHex = red.toString(16).padStart(2, '0')
  const greenHex = green.toString(16).padStart(2, '0')
  const blueHex = blue.toString(16).padStart(2, '0')

  // Retornar a cor hexadecimal
  return `#${redHex}${greenHex}${blueHex}`
}
