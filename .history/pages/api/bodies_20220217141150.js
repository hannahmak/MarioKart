import bodies_data from '../../utils/bodies_data.json';

export default function handler(req, res) {
    // console.log("body data", bodies_data);
    const bodies = bodies_data
    res.status(200).json({ name: 'John Doe' })
  }