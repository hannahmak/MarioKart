import characters_data from '../../utils/characters_data.json';

export default function handler(req, res) {
    // console.log("body data", bodies_data);
    const bodies = bodies_data;
    res.status(200).json(bodies)
  }