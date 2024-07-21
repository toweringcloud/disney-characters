const BASE_URL = 'https://disney_api.nomadcoders.workers.dev';

export function fetchCharacters() {
  return fetch(`${BASE_URL}/characters`).then((response) => response.json());
}

export function fetchCharacterInfo(id) {
  return fetch(`${BASE_URL}/characters/${id}`).then((response) =>
    response.json()
  );
}
