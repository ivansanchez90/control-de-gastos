import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto}) => {
  return (
    <div className="listado-gastos contenedor">
        <h1>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h1>

        {gastos.map(gasto => (
            <Gasto 
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            />
        ))}
    </div>
  )
}

export default ListadoGastos