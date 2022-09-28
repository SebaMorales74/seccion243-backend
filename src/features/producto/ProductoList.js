import React from 'react'
import Producto from './Producto'
import { Row, Col } from 'antd'
import './ProductoList.css'

const basedatos = [
    { key: "1", avatar: "https://joeschmoe.io/api/v1/2", detalle: "Detalle 2", titulo: "Titulo 2312" },
    { key: "2", avatar: "https://joeschmoe.io/api/v1/1", detalle: "Detalle 1", titulo: "Titulo 1" },
    { key: "3", avatar: "https://joeschmoe.io/api/v1/3", detalle: "Detalle 21", titulo: "Titulo 2331" },
    { key: "4", avatar: "https://joeschmoe.io/api/v1/4", detalle: "Detalle 22", titulo: "Titulo 2341" },
    { key: "5", avatar: "https://joeschmoe.io/api/v1/5", detalle: "Detalle 23", titulo: "Titulo 2731" },
    { key: "6", avatar: "https://joeschmoe.io/api/v1/6", detalle: "Detalle 24", titulo: "Titulo 9231" },
    { key: "7", avatar: "https://joeschmoe.io/api/v1/7", detalle: "Detalle 25", titulo: "Titulo 97231" },
    { key: "8", avatar: "https://joeschmoe.io/api/v1/8", detalle: "Detalle 27", titulo: "Titulo 56231" },
    { key: "9", avatar: "https://joeschmoe.io/api/v1/9", detalle: "Detalle 28", titulo: "Titulo 45231" },
    { key: "10", avatar: "https://joeschmoe.io/api/v1/10", detalle: "Detalle 29", titulo: "Titulo 33231" },
]
const ProductoList = () => {
    return (
        <Row gutter={16}>
            {
                basedatos.map(elemento => {
                    return (
                        <Col className="gutter-box" >
                            <Producto valor={elemento} />
                        </Col>
                    )

                })
            }
        </Row>
    )
}

export const ModificarPersona = (persona) => {
    basedatos[basedatos.findIndex(obj => { return obj.key === persona.key })].key = persona.key
    basedatos[basedatos.findIndex(obj => { return obj.key === persona.key })].detalle = persona.detalle
    basedatos[basedatos.findIndex(obj => { return obj.key === persona.key })].titulo = persona.titulo
    console.log(persona)
    console.log(basedatos[basedatos.findIndex(obj => { return obj.key === persona.key })])
}

export default ProductoList;
