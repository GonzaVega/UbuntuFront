import microentrepreneurshipResponse from '@/mocks/microentrepreneurship.json';

const DATA = {
  '/microentrepreneurship': microentrepreneurshipResponse,
};

// export class HttpAdapter {
//   #BASE_URL = 'https://e-commerce-api-dev.4.us-1.fl0.io/api';

//   async get({ path, searchParams, requestInit }) {
//     try {
//       const response = await fetch(
//         this.#BASE_URL + path + '?' + new URLSearchParams(searchParams),
//         requestInit,
//       );

//       const data = await response.json();

//       if (response.status < 200 && response.status > 299)
//         throw new Error('Ha ocurrido un error en la solicitud');

//       return data;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// }

export class HttpAdapter {
  async get({ path, searchParams, abortController }) {
    const { signal } = abortController || new AbortController();
    const { query } = searchParams;

    return new Promise((resolve, reject) => {
      let [, response] = Object.entries(DATA).find((item) => path.includes(item[0]));

      if (query) {
        const regex = new RegExp(query, 'i');
        response = response.filter((item) => regex.test(item.nombre));
      }

      const id = path.split('/')[2];

      if (id) {
        response = response.find((item) => item.id === +id);
      }

      const timeout = setTimeout(() => {
        if (response.length > 0) resolve(response);
        else reject(new Error('No se encotraron resultados'));
      }, [500]);

      signal.addEventListener('abort', () => {
        clearTimeout(timeout);
      });

      if (signal.aborted) reject(new Error('Operación cancelada'));
    });
  }

  async post({ payload, abortController }) {
    return { payload, abortController };
  }

  async patch({ id, payload, abortController }) {
    return { id, payload, abortController };
  }

  async delete({ id, abortController }) {
    return { id, abortController };
  }
}
