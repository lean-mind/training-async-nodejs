import {FileProcessor} from './file-processor.mjs'
import * as assert from "assert";

const text = 'Desde aquel día el niño Jacobo –el más grande ladrón de todos los tiempos– se habría ya de pasar las horas muertas leyendo y leyendo.'

{
  const expect = `el: 2
de: 2
leyendo: 2
Desde: 1
aquel: 1
día: 1
niño: 1
Jacobo: 1
más: 1
grande: 1
ladrón: 1
todos: 1
los: 1
tiempos: 1
se: 1
habría: 1
ya: 1
pasar: 1
las: 1
horas: 1
muertas: 1
y: 1
`
  const processor = new FileProcessor()

  processor.process(text)

  assert.equal(processor.report, expect, 'error processing file')
}
