import Wait, {Swap, disable, enable} from "../components/main";

export default async function BubbleSort() {
  disable();
  const ele = document.querySelectorAll(".flex-item");
  for (let i = 0; i < ele.length; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.backgroundColor = "blue";
      ele[j + 1].style.backgroundColor = "blue";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await Wait(100 - document.getElementById("arr_speed").value);
        Swap(ele[j], ele[j + 1]);
      }
      ele[j].style.backgroundColor = "cyan";
      ele[j + 1].style.backgroundColor = "cyan";
    }
    ele[ele.length - i - 1].style.backgroundColor = "green";
  }
  ele[0].style.backgroundColor = "green";
  enable();
}
  