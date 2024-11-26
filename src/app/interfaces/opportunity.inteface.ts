export interface OpportunityModel{
    "id": number,
    "descripcion": string,
    "tipoOportunidad": {
      "id": number,
      "nombre": string,
      "url": string
    },
    "estadoOportunidad": {
      "id": number,
      "estado": string
    },
    "informacionOportunidad": {
      "id": number,
      "informacion": string
    },
    "categoriaOportinidad": {
      "id": number,
      "categoria": string
    },
    "institucionOportunidad": [
      {
        "id": number,
        "nombre": string,
        "direccion": string,
        "idRegion": {
          "id": number,
          "region": string
        }
      }
    ],
    "userOportunidad": [
      {
        "id": number,
        "name": string,
        "lastname": string,
        "birthday": "2024-11-26T03:56:27.712Z",
        "email": string,
        "password": string,
        "roles": [
          {
            "id": number,
            "name": string
          }
        ]
      }
    ]
  }