import React from 'react'
import './Tablero.css'
import {MemoBlock} from '../MemoBlock/MemoBlock'
export function Tablero({memoBlocks,animating,handleMemoClick}:any,){
    return(<main className="board">
        {memoBlocks.map((item:any,index:number)=>{
            return <MemoBlock key={`${index}-${item}`} memoBlock={item} animating={animating} handleMemoClick={handleMemoClick} />

        })}

    </main>)
}