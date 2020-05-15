const VEHICULO_MARCA = 'hyundai';
const ID = 5;
const NUEVO = false;

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const procedenciaArray = [
    'China',
    'Colombia',
    'USA',
    'Japon',
    'Alemania',
];

const PRODUCTO_DATA = {
    [VEHICULO_MARCA]: {
        title: VEHICULO_MARCA,
        size: 'small',
        get id() {
            return `${ID}`;
        },
        get imageUrl() {
            return `https://via.placeholder.com/2000x1400/e0e0e0/ffffff/?text=${VEHICULO_MARCA}`;
        },
        get linkUrl() {
            return `catalogo/${VEHICULO_MARCA}`;
        },
        articulos: [
            {
                cantidad: getRandomNumber(0, 20),
                descripcion:
                    'Proident cupidatat est amet non irure et deserunt',
                importante: true,
                nombre: 'a',
                nuevo: NUEVO,
                obsoleto: !NUEVO,
                precio: getRandomNumber(10000, 200000),
                procedencia: procedenciaArray[getRandomNumber(0, 4)],
                referencia: `a${getRandomNumber(100, 2000)}`,
                vehiculo_tipo: [
                    `${getRandomNumber(100, 200)}`,
                    `${getRandomNumber(100, 200)}`,
                    `${getRandomNumber(100, 200)}`,
                ],
                get id() {
                    return `${VEHICULO_MARCA}_${this.referencia}`;
                },
                get imageUrl() {
                    return `https://via.placeholder.com/2000x1400/e0e0e0/ffffff/?text=${VEHICULO_MARCA}_${this.nombre}`;
                },
                get linkUrl() {
                    return `catalogo/${VEHICULO_MARCA}/${this.id}`;
                },
            },
            {
                cantidad: getRandomNumber(0, 20),
                descripcion:
                    'Proident cupidatat est amet non irure et deserunt',
                importante: true,
                nombre: 'b',
                nuevo: NUEVO,
                obsoleto: !NUEVO,
                precio: getRandomNumber(10000, 200000),
                procedencia: procedenciaArray[getRandomNumber(0, 4)],
                referencia: `b${getRandomNumber(100, 2000)}`,
                vehiculo_tipo: [
                    `${getRandomNumber(100, 200)}`,
                    `${getRandomNumber(100, 200)}`,
                    `${getRandomNumber(100, 200)}`,
                ],
                get id() {
                    return `${VEHICULO_MARCA}_${this.referencia}`;
                },
                get imageUrl() {
                    return `https://via.placeholder.com/2000x1400/e0e0e0/ffffff/?text=${VEHICULO_MARCA}_${this.nombre}`;
                },
                get linkUrl() {
                    return `catalogo/${VEHICULO_MARCA}/${this.id}`;
                },
            },
            {
                cantidad: getRandomNumber(0, 20),
                descripcion:
                    'Proident cupidatat est amet non irure et deserunt',
                importante: true,
                nombre: 'c',
                nuevo: NUEVO,
                obsoleto: !NUEVO,
                precio: getRandomNumber(10000, 200000),
                procedencia: procedenciaArray[getRandomNumber(0, 4)],
                referencia: `c${getRandomNumber(100, 2000)}`,
                vehiculo_tipo: [
                    `${getRandomNumber(100, 200)}`,
                    `${getRandomNumber(100, 200)}`,
                    `${getRandomNumber(100, 200)}`,
                ],
                get id() {
                    return `${VEHICULO_MARCA}_${this.referencia}`;
                },
                get imageUrl() {
                    return `https://via.placeholder.com/2000x1400/e0e0e0/ffffff/?text=${VEHICULO_MARCA}_${this.nombre}`;
                },
                get linkUrl() {
                    return `catalogo/${VEHICULO_MARCA}/${this.id}`;
                },
            },
            {
                cantidad: getRandomNumber(0, 20),
                descripcion:
                    'Proident cupidatat est amet non irure et deserunt',
                importante: true,
                nombre: 'd',
                nuevo: NUEVO,
                obsoleto: !NUEVO,
                precio: getRandomNumber(10000, 200000),
                procedencia: procedenciaArray[getRandomNumber(0, 4)],
                referencia: `d${getRandomNumber(100, 2000)}`,
                vehiculo_tipo: [
                    `${getRandomNumber(100, 200)}`,
                    `${getRandomNumber(100, 200)}`,
                    `${getRandomNumber(100, 200)}`,
                ],
                get id() {
                    return `${VEHICULO_MARCA}_${this.referencia}`;
                },
                get imageUrl() {
                    return `https://via.placeholder.com/2000x1400/e0e0e0/ffffff/?text=${VEHICULO_MARCA}_${this.nombre}`;
                },
                get linkUrl() {
                    return `catalogo/${VEHICULO_MARCA}/${this.id}`;
                },
            },
        ],
    },
};

export default PRODUCTO_DATA;
