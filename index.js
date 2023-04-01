const add_btn = document.querySelector('.button-text');


const updateLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  textAreaData.forEach((element) => {
    return notes.push(element.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
};


const makingnote = ( text = "  ") => {

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `<div class="operation">
    <button class="edit"> <i class="fas fa-edit"></i> </button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>                  
  </div>
 <div class="main ${text ? '' : 'hidden'}"></div>
 <textarea class="${text ? 'hidden' : ''}"></textarea>`;
   
   note.insertAdjacentHTML("afterbegin", htmlData);

  // -------------------------------------------------------- getting referance ------------------------------------------------------------------- //
  const edit_btn  = note.querySelector(".edit");
  const dlt_btn   = note.querySelector(".delete");
  const main_div  = note.querySelector(".main");
  const text_area = note.querySelector("textarea");
   
   dlt_btn.addEventListener('click' , () =>{
      note.remove();
      updateLSData();

    });

   text_area.value = text;
   main_div.innerHTML = text;

   edit_btn.addEventListener('click' , () =>{
       main_div.classList.toggle('hidden');
       text_area.classList.toggle('hidden');
   });

   text_area.addEventListener('change' , () =>{
        const textvalue        = text_area.value;
        main_div.innerHTML = textvalue;
        updateLSData();

      });

  document.body.appendChild(note);

}

// getting back data from local std;
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((element) => makingnote(element));
}
 
add_btn.addEventListener('click', () => {
    makingnote();
});




















