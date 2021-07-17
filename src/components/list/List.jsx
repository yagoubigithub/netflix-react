
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useRef, useState } from "react"
import ListItem from "../listItem/ListItem"
import  "./list.scss"

const List = () => {
    
    const [list, setList] = useState(["#41e1a1","#4d1daf","#fdc1a1","#43a1a1","#41dad1","#dfdda1","#4d1a81"])

    
    const handleClick = (list,direction)=>{
        if(direction === "right"){

            list.unshift(list[list.length-1])
            list.pop()
           

        }
        if(direction === "left"){

            list.push(list[0])
            list.shift()
          

        }
        setList([...list])
      
        console.log(list)
       

    }
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper" >

                <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick(list,"left")} />
                <div className="container" >
                {list.map((item, index)=>{
                    return(<ListItem  key={index} index={index} item={item} />)
                })}

               
               

                </div>
                <ArrowForwardIosOutlined className="sliderArrow right"  onClick={()=>handleClick(list,"right")} />
            </div>
        </div>
    )
}

export default List
