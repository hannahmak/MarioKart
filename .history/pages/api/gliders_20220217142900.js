import gliders_data from '../../utils/gliders_data.json';

export default function handler(req, res) {
    // console.log("body data", bodies_data);
    const characters = characters_data;
    res.status(200).json(characters)
  }