import {filtering, sortArr} from '../../utils/func.js'
import tires_data from '../../utils/tires_data.json'

export default function handler(req, res) {
  const {name, sort_tire, sort_speed, sort_handling, sort_traction, sort_type} = req.query
  var lists = []

  if(name){
    lists = filtering(tires_data, {
      Body: name
    })
  }
  if(sort_tire){
    lists = sortArr(tires_data, {
      key: "Body",
      type: sort_type
    })
  }
  if(sort_speed){
    lists = sortArr(tires_data, {
      key: "Speed",
      type: sort_type
    })
  }
  if(sort_handling){
    lists = sortArr(tires_data, {
      key: "Handling",
      type: sort_type
    })
  }
  if(sort_traction){
    lists = sortArr(tires_data, {
      key: "Traction",
      type: sort_type
    })
  } else {
    const tires = tires_data;
    res.status(200).json(tires)
  }
  lists = lists.slice(0,100)
  res.status(200).json(lists)  
}