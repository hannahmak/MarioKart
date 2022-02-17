import tires_data from '../../utils/tires_data.json';

export default function handler(req, res) {
    // console.log("body data", bodies_data);
    const tires = tires_data;
    res.status(200).json(characters)
  }