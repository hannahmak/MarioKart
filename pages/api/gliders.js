import gliders_data from '../../utils/gliders_data.json';

export default function handler(req, res) {
    // console.log("body data", bodies_data);
    const gliders = gliders_data;
    res.status(200).json(gliders)
  }