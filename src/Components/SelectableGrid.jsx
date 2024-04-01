import { useState } from "react";
import { useCallback } from "react";
const SelectableGrid = ({rows,cols}) => {
    const [MouseDown,setMouseDown]=useState(false);
    const [selectedBox,setSelectedBox]=useState([]);
  
    const handleMouseEnter=useCallback((boxNumber)=>{
       if(MouseDown){
        const start=selectedBox[0];
        const end=boxNumber;
        const startRow=Math.floor((start-1)/cols);//Math.floor(22-1)/10=2
        const endRow=Math.floor((end-1)/cols);
        const startCol=Math.floor((start-1) % cols);//Math.floor((46-1)%10)=5
        const endCol=Math.floor((end-1) % cols);
        const rowMin=Math.min(startRow,endRow);
        const rowMax=Math.max(startRow,endRow);
        const colMin=Math.min(startCol,endCol);
        const colMax=Math.max(startCol,endCol);
        const selected=[];
        for(let row=rowMin;row<=rowMax;row++){
            for(let col=colMin;col<= colMax;col++){
                selected.push(row*cols+col+1);
            }
            // console.log(row)
        }
 
        setSelectedBox(selected);
       }
  
    
    },[MouseDown]);
    const handleMouseDown=(boxNumber)=>{
        setMouseDown(true)
        setSelectedBox([boxNumber]);
        
    }
  return (
    <div className="grid" onMouseUp={()=>setMouseDown(false)}>
   {Array.from({length:rows*cols},(_,index)=>{
    return(
        <div className={`box ${selectedBox.includes(index+1)? "selected":""}`} 
        onMouseDown={()=>handleMouseDown(index+1)}
        onMouseEnter={()=>handleMouseEnter(index+1)}
        key={index}>{index+1}</div>
    )
   })}

    </div>
  )
}
export default SelectableGrid