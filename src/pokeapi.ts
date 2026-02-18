export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
    let url = pageURL;
    if (!url) {
      url = `${PokeAPI.baseURL}/location-area`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data: ShallowLocations = await response.json();
    return data;
  }

  // async fetchLocation(locationName: string): Promise<Location> {
  //   // implement this
  // }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

// export type Location = {
//   // add properties here
// };