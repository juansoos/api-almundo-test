# API REST Almundo test

Documentación de la API REST utilizada en la prueba para el semillero de Almundo. Dicha API se ha desarrollado utilizando express como framework web y MongoDB como gestor de base de datos. La documentación que a continuación se muestra, también se encuentra disponible en https://api-rest-almundo.now.sh

## **Getting Started**
Estas instrucciones le ayudarán a obtener una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y pruebas.

### **Installing**
Primero se require clonar el repositorio

* **SSH** `git clone git@github.com:juansoos/api-almundo-test.git`

* **HTTPS** `git clone https://github.com/juansoos/api-almundo-test.git`

Luego de ello ejecutar `npm install` dentro de la carpeta del proyecto.

### **Running in development**

Para correr la API en desarrollo se ejecuta `npm run start:dev`

---

## EndPoints

La API REST se encuentra alojada en [now](https://zeit.co/now) con la URL https://api-rest-almundo.now.sh/api/v1


**Obtener hoteles**
----
  Devuelve un array de datos json

* **URL**

  /hotels
  
* **Method:**

  `GET`
  
*  **URL Params**

    None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    [
      {
        _id:	"59fb93cef36d28650ac2ec90"
        id:	"249942"
        name:	"Hotel Stefanos"
        stars:	3
        price:	994.18
        image:	"4900059_30_b.jpg"
        comments: [
          {
            name: "Jhon Doe",
            content: "Un excelente hotel para las vacaciones"
          }
        ]
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND
    **Content:** `{ error : "Hotels not found" }`

---

**Obtener hoteles por un nombre**
----
  Devuelve un array de datos json

* **URL**

  /hotels/name/:name
  
* **Method:**

  `GET`
  
*  **URL Params**
   **Required:**
 
   `name=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    [
      {
        _id:	"59fb93cef36d28650ac2ec90"
        id:	"249942"
        name:	"Hotel Stefanos"
        stars:	3
        price:	994.18
        image:	"4900059_30_b.jpg"
        comments: [
          {
            name: "Jhon Doe",
            content: "Un excelente hotel para las vacaciones"
          }
        ]
      }
    ]
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND
    **Content:** `{ error : "Hotels by :name not found" }`
---

**Obtener hoteles por estrellas**
----
  Devuelve un array de datos json

* **URL**

  /hotels/stars/:stars
  
* **Method:**

  `GET`
  
*  **URL Params**
   **Required:**
 
   `stars=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    [
      {
        _id:	"59fb93cef36d28650ac2ec90"
        id:	"249942"
        name:	"Hotel Stefanos"
        stars:	3
        price:	994.18
        image:	"4900059_30_b.jpg"
        comments: [
          {
            name: "Jhon Doe",
            content: "Un excelente hotel para las vacaciones"
          }
        ]
      }
    ]
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND
    **Content:** `{ error : "Hotels by :stars not found" }`

---

**Obtener un hotel**
----
  Devuelve un array de datos json

* **URL**

  /hotel/:id
  
* **Method:**

  `GET`
  
*  **URL Params**
   **Required:**
 
   `id=[string]` _id del hotel

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    [
      {
        _id:	"59fb93cef36d28650ac2ec90"
        id:	"249942"
        name:	"Hotel Stefanos"
        stars:	3
        price:	994.18
        image:	"4900059_30_b.jpg"
        comments: [
          {
            name: "Jhon Doe",
            content: "Un excelente hotel para las vacaciones"
          }
        ]
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND
    **Content:** `{ error : "Hotel by :id not found" }`

---

**Crear un hotel**
----
  Devuelve un objeto json con los datos del hotel creado

* **URL**

  /hotel
  
* **Method:**

  `POST`
  
*  **URL Params**
    None

* **Data Params**

  `hotel`: objeto json con los datos del hotel

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
      {
        _id:	"59fb93cef36d28650ac2ec90"
        id:	"249942"
        name:	"Hotel Stefanos"
        stars:	3
        price:	994.18
        image:	"4900059_30_b.jpg"
        comments: [
          {
            name: "Jhon Doe",
            content: "Un excelente hotel para las vacaciones"
          }
        ]
      }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND
    **Content:** `{ error : "Error creating hotel" }`

---

**Actualizar un hotel**
----
  Devuelve un objeto json con los datos del hotel actualizado

* **URL**

  /hotel/:id
  
* **Method:**

  `PUT`
  
*  **URL Params**
   **Required:**
 
   `id=[string]` _id del hotel

* **Data Params**

  `hotel`: objeto json con los datos a modificar del hotel

* **Success Response:**

  * **Code:** 201
    **Content:** 
    ```
      {
        _id:	"59fb93cef36d28650ac2ec90"
        id:	"249942"
        name:	"Hotel Stefanos"
        stars:	3
        price:	994.18
        image:	"4900059_30_b.jpg"
        comments: [
          {
            name: "Jhon Doe",
            content: "Un excelente hotel para las vacaciones"
          }
        ]
      }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND
    **Content:** `{ error : "Error updating hotel" }`

---

**Eliminar un hotel**
----
  Devuelve un mensaje si la eliminación fue exitosa

* **URL**

  /hotel/:id
  
* **Method:**

  `DELETE`
  
*  **URL Params**
   **Required:**
 
   `id=[string]` _id del hotel

* **Data Params**
  None

* **Success Response:**

  * **Code:** 201
    **Content:** `{ message: 'valid deleting' }`

* **Error Response:**

  * **Code:** 404 NOT FOUND
    **Content:** `{ error : "Error deleting hotel" }`

---
## Deployment

Una vez se instalen las dependencias automáticamente se ejecutará el script `build`, y luego para iniciar la API en producción se ejecuta `npm start`

---

## Built With

* [Express](https://expressjs.com/) - The web framework used

---

## Versioning

1.0.0

---

## Authors

* **Julián Sotelo** - *Initial work* - [juansoos](https://github.com/juansoos)

---

## License
The JavaScript Templates script is released under the [MIT license](https://opensource.org/licenses/MIT).