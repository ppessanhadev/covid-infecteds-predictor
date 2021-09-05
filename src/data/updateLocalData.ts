import fs from 'fs';
import { resolve } from 'path';
import getCovidData from './api/covid';

async function formatCovidData() {
  const { data } = await getCovidData();
  return data.map(({ new_cases }, index) => ({
    x: index + 1,
    y: new_cases,
  }));
}

export default async function updateLocalData() {
  const worldwideFile = resolve(__dirname, 'worldwide-infected.json');
  const data = await formatCovidData();
  fs.writeFileSync(worldwideFile, JSON.stringify(data));
}
