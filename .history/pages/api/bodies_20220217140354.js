import bodies_data from '../../utils/bodies_data.json';

export default function handler(req, res) {
    console.log("drake l")
    res.status(200).json({ name: 'John Doe' })
  }