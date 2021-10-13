import { getGifs } from "../../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 10 elementos', async () => {

        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10);
    });

    test('debe de traer un arreglo vacio', async () => {

        const gifs = await getGifs('');
        // console.log(gifs);
        expect(gifs.length).toBe(0);

    });

})
