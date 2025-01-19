const API_KEY =
  'live_lr4BS5niz8qDZ2Uto2DccmAt19Y2i84dfkd0pXz9q55dB6gimV9SxigVdxm4d00G'
const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds'

function requestURL() {
  return BREEDS_URL
}

export function SEARCH_BREEDS_GET() {
  return {
    url: requestURL(),
    options: {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
    },
  }
}
