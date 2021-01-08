
//Todas las ventas que tuvieron 500 en numero de unidades
db.ventas.aggregate([
    { $match: { númeroUnidades: 500 } },
 ])


 /*ME muestra el id, articulo vendido, fecha de la venta y una multiplicacion entre en precio unitario y el numero de unidades, 
 para saber la ganancia total*/
 db.ventas.aggregate(
    [   
      { $project: { fechaVenta: 1, articuloVendido: 1, gananciaTotal: { $multiply: [ "$precioUnitario", "$númeroUnidades" ] } } }
    ]
 )

 /*Podemos ver en año, el mes y el día de la venta. */
 db.ventas.aggregate(
    [
      {
        $project:
          {
            año: { $year: "$fechaVenta" },
            mes: { $month: "$fechaVenta" },
            día: { $dayOfMonth: "$fechaVenta" },
          }
      }
    ]
 )

 /*Muestra el importe total de los smartwatch*/
 db.ventas.aggregate([
  {$match: {articuloVendido: "SmartWatch"}},
  {$group: {_id : null, Importe_total: {$sum: {$multiply: ["$precioUnitario", "$númeroUnidades"]}}}}])

  /*calcular la cantidad promedio y la quantity promedio para cada agrupación. */
  db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: "$articuloVendido",
            avgCantidad: { $avg: { $multiply: [ "$precioUnitario", "$númeroUnidades" ] } },
            avgQuantity: { $avg: "$númeroUnidades" }
          }
      }
    ]
 )

 /*calcular la cantidad total máxima y la cantidad máxima para cada grupo de documentos. */
 db.ventas.aggregate(
  [
    {
      $group:
        {
          _id: "$articuloVendido",
          maxCantidadTotal: { $max: { $multiply: [ "$precioUnitario", "$númeroUnidades" ] } },
          maxCantidad: { $max: "$númeroUnidades" }
        }
    }
  ]
)


