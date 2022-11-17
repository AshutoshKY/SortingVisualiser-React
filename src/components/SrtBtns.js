import React from "react";
import "../styles/GeneralStyle.css";
import SelectionSort from "../algos/SelectionSort";
import BubbleSort from "../algos/BubbleSort";
import InsertionSort from "../algos/InsertionSort";
import ShowMergeSort from "../algos/MgSort";
import QuickSort from "../algos/QuickSort";



function Srtbtns(){

    // const [show,setShow]=useState(true);
    // function ISort(){
    //     InsertionSort();
    //     ()=>setShow(!show);
    //   }
    return(
    //     <div>
    //      <div className="App">
    //       {
    //       show?<h1>Hello World !</h1>:null
    //       }
    //     <div>
    //     </div>
    //    </div>
    <div>
         <div className="app-footer">
           <div>
             <button className="app-button" id="mer_srt" onClick={ShowMergeSort}>
               Merge sort
             </button>
           </div>
           <div>
             <button className="app-button" id="ins_srt" onClick={InsertionSort}>
               Insertion sort
             </button>
           </div>
           <div>
             <button className="app-button"  id="qui_srt" onClick={QuickSort}>
               Quick sort
             </button>
           </div>
           <div>
             <button className="app-button"  id="sel_srt" onClick={SelectionSort}>
               Selection sort
             </button>
           </div>
           <div>
             <button className="app-button"  id="bub_srt" onClick={BubbleSort}>
               Bubble sort
             </button>
           </div>
         </div>

       {/* <footer className="app-footer">
         <ul>
           <li>
             <button className="app-button" id="mer_srt" onClick={ShowMergeSort}>
               Merge sort
             </button>
           </li>
           <li>
             <button className="app-button" id="ins_srt" onClick={InsertionSort}>
               Insertion sort
             </button>
           </li>
           <li>
             <button className="app-button"  id="qui_srt" onClick={QuickSort}>
               Quick sort
             </button>
           </li>
           <li>
             <button className="app-button"  id="sel_srt" onClick={SelectionSort}>
               Selection sort
             </button>
           </li>
           <li>
             <button className="app-button"  id="bub_srt" onClick={BubbleSort}>
               Bubble sort
             </button>
           </li>
         </ul>
       </footer> */}

    </div>        
    );
}

export default Srtbtns;