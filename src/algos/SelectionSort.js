import  { Wait, Swap, disable, enable } from "../components/main";

export default async function SelectionSort() {
    disable();
    const ele = document.querySelectorAll(".flex-item");
    for (let i = 0; i < ele.length; i++) {
      let min = i;
      ele[i].style.background = "blue";
      for (let j = i + 1; j < ele.length; j++) {
        ele[j].style.background = "red";
        await Wait(100 - document.getElementById("arr_speed").value);
        if (parseInt(ele[j].style.height) < parseInt(ele[min].style.height)) {
          if (min !== i) {
            ele[min].style.background = "cyan";
          }
          min = j;
        } else {
          ele[j].style.background = "cyan";
        }
      }
      Swap(ele[min], ele[i]);
      ele[min].style.background = "cyan";
      ele[i].style.background = "green";
    }
    enable();
  }