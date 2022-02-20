import {filtering, sortArr} from '../../utils/func.js'
import bodies_data from '../../utils/bodies_data.json'

export default function handler(req, res) {
  const {name, sort_kart, sort_speed, sort_acceleration, sort_miniturbo, sort_type} = req.query
  
  var lists = []
  
  if(name){
    lists = filtering(bodies_data, {
      Vehicle: name
    })
  }
  if(sort_kart){
    lists = sortArr(bodies_data, {
      key: "Vehicle",
      type: sort_type
    })
  }
  if(sort_speed){
    lists = sortArr(bodies_data, {
      key: "Speed",
      type: sort_type
    })
  }
  if(sort_acceleration){
    lists = sortArr(bodies_data, {
      key: "Acceleration",
      type: sort_type
    })
  }
  if(sort_miniturbo){
    lists = sortArr(bodies_data, {
      key: "MiniTurbo",
      type: sort_type
    })
  } else {
    const bodies = bodies_data
    res.status(200).json(bodies)
  }

  lists = lists.slice(0,100)
  res.status(200).json(lists)  
}