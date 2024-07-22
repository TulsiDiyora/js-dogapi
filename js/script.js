
let listt = document.getElementById("listt");

const display = () =>{

    fetch("https://dog.ceo/api/breeds/list/all").then((res) => {

        // console.log("Res",res.json());
        return res.json(); 

    }).then((list) => {

        let count = 0; 

        console.log("List",list.message);
        let getlist = list.message;

        for (const key in getlist) {

            // console.log("breedslist",getlist);
            
            if(getlist[key].length == 0){
                
                listt.innerHTML += `<li onclick="return listImg('${key}')" style="cursor:pointer; padding: 20px; margin: 10px 0px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">${key}</li>`
                // console.log("key",key);

            }else{
                count++;

                let sublist = `<ol>`;

                getlist[key].forEach(element => {
                    sublist += `<li>${element}</li>`
                });

                sublist += `</ol>`;
                
                let unik =`${count}`;

                listt.innerHTML += `<div class="accordion-item mt-2">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${unik}" aria-expanded="false" aria-controls="${unik}"  onclick = "return listImg('${key}')" style ="cursor:pointer; padding: 20px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); font-weight: 700; font-size: 18px; background-color: #f5f5f5;">
                    ${key}
                    </button>
                    </h2>
                    <div id="${unik}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"> ${sublist}</div>
                    </div>
                </div>`

            }
        }

    }).catch((err) => {

        console.log(err);

    })
}

display();

const listImg = (breed) =>{

    fetch(`https://dog.ceo/api/breed/${breed}/images`).then((rec) => {

        // console.log("rec",rec.json());

        return rec.json();

    }).then((list) => {

        console.log("data",list);

        let imges = list.message;

        img.innerHTML = "";

        imges.forEach(element => {
           img.innerHTML += `<div class="w-4 box" ><div><img src="${element}"></div></div>`
        });

    }).catch((err) => {

        console.log(err);
    });
} 
/* <li onclick="return listImg('${key}')" style="cursor:pointer; padding: 20px; margin: 10px 0px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);>${key} ${sublist}</li>  */
{/* <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed  border-0" type="button" data-bs-toggle="collapse" data-bs-target="#${unik}" aria-expanded="false" aria-controls="${unik}" onclick = "return listImg('${key}')" style="cursor:pointer; padding: 20px; margin: 10px 0px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                                            ${key}
                                        </button>
                                    </h2>
                                    <div id="${unik}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body p-2">
                                            ${sublist}
                                        </div>
                                    </div>
                                </div>` */}