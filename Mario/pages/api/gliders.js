import {filtering, sortArr} from '../../utils/func.js'
import gliders_data from '../../utils/gliders_data.json';

export default function handler(req, res) {
  const {name, sort_airspeed, sort_weight, sort_glider, sort_type, sort_kind} = req.query

  var lists = []

  if(name){
    lists = filtering(gliders_data, {
      Body: name
    })
  }
  if(sort_glider){
    lists = sortArr(gliders_data, {
      key: "Body",
      type: sort_type
    })
  }
  if(sort_kind){
    lists = sortArr(gliders_data, {
      key: "Type",
      type: sort_type
    })
  }
  if(sort_weight){
    lists = sortArr(gliders_data, {
      key: "Weight",
      type: sort_type
    })
  }
  if(sort_airspeed){
    lists = sortArr(gliders_data, {
      key: "SpeedAir",
      type: sort_type
    })
  } else {
    const gliders = gliders_data
    res.status(200).json(gliders)
  }

  lists = lists.slice(0,100)
  res.status(200).json(lists)  
}