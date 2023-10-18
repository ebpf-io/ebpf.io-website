const GRID_TOKEN_2023 = process.env.GATSBY_SESSIONIZE_TOKEN_GRID_2023;
const TOKEN_2023 = process.env.GATSBY_SESSIONIZE_TOKEN_2023;

const endpoints = {
  grid: `https://sessionize.com/api/v2/${GRID_TOKEN_2023}/view/GridSmart`,
  schedule: `https://sessionize.com/api/v2/${TOKEN_2023}/view/Sessions`,
  speakers: `https://sessionize.com/api/v2/${TOKEN_2023}/view/Speakers`,
};

export default endpoints;
