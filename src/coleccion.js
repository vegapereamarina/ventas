db.ventas.drop()

db.ventas.insertMany([
    {_id: 1, articuloVendido: "Telescopio Inteligente", precioUnitario: 159.9, númeroUnidades: 200, fechaVenta: new Date("2020-01-07"), precioUnitarioCompraEmpresa: 110, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 2, articuloVendido: "SmartWatch", precioUnitario: 39.99, númeroUnidades: 300, fechaVenta: new Date("2020-10-12"), precioUnitarioCompraEmpresa: 29, cliente: "Johns", vendedor: "Andrea Hidalgo"},
    {_id: 3, articuloVendido: "Prismáticos", precioUnitario: 74.99, númeroUnidades: 250, fechaVenta : new Date("2020-11-27"), precioUnitarioCompraEmpresa: 60, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 4, articuloVendido: "Intax Mini", precioUnitario: 68.99, númeroUnidades: 400, fechaVenta: new Date("2020-09-29"), precioUnitarioCompraEmpresa: 69, cliente: "Juanito Perez", vendedor: "Nuria Prieto"},
    {_id: 5, articuloVendido: "EchoDot", precioUnitario: 39.98, númeroUnidades: 500, fechaVenta: new Date("2020-09-06"), precioUnitarioCompraEmpresa: 30, cliente: "Manolo Suarez", vendedor: "Javier Ruiz"},
    {_id: 6, articuloVendido: "Anillo LED", precioUnitario: 23.99, númeroUnidades: 500, fechaVenta: new Date("2020-09-23"), precioUnitarioCompraEmpresa: 18, cliente: "Flash", vendedor: "Marta Alfonso"},
    {_id: 7, articuloVendido: "Estabilizador de mano", precioUnitario: 99, númeroUnidades: 500, fechaVenta: new Date("2020-11-10"), precioUnitarioCompraEmpresa: 70, cliente: "Amazon", vendedor: "Andrea Hidalgo"},
    {_id: 8, articuloVendido: "Proyector", precioUnitario: 75.99, númeroUnidades: 300, fechaVenta: new Date("2020-11-05"), precioUnitarioCompraEmpresa: 60, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 9, articuloVendido: "AirPods", precioUnitario: 179, númeroUnidades: 400, fechaVenta: new Date("2020-12-06"), precioUnitarioCompraEmpresa: 150, cliente: "Johns", vendedor: "Fernando Cardoso"},
])