const loadDataShow = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const datas = await res.json()
    const  data = datas.data.tools
    // all array
    // console.log(data)
    // single array
    showDataDisplay(data)

}

const showDataDisplay = (data) =>{
     // slice data
    //  data = data.slice(0,6)
    data.forEach( singleData =>{
        // console.log(singleData)

        // current div 
        const currentDiv = document.getElementById('currentDiv')
        // create a div
        const createDiv = document.createElement('div')
        createDiv.className = 'createDiv'
        createDiv.innerHTML = `
        <figure><img src=" ${singleData?.image}" alt="AI" /></figure>
            <div class="card-body">
            <ul >
            <h1 class = 'text-4xl font-bold'>Features</h1>
            <li class='pt-4'>1.${singleData.features[0]}</li>
            <li>2.${singleData.features[1]}</li>
            <li>3.${singleData.features[2]}</li>
            </ul>
            <h2 class="card-title font-bold">${singleData.name}</h2>
            <p>Published Date: ${singleData.published_in}</p>
            <div class="card-actions justify-end">
                <button onclick = "showDetails(); my_modal_4.showModal()" class="btn btn-info">Show Details</button>
            </div>
        `
        currentDiv.appendChild(createDiv)
    })
}

const showDetails = async () =>{
    // console.log('click btn', id)
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/01`)
    const data = await res.json()
    // console.log(data)
    const single = data.data
    // console.log(single)
    SingleDataDetails(single)
}

const SingleDataDetails = (single) =>{
    const modal = document.getElementById('newModal')
    modal.innerHTML = `
    <div class = "w-full flex justify-between">
        <div class =" bg-orange-50 p-5 rounded-xl">
            <h1 class = "text-xl font-bold">ChatGPT is an AI-powered chatbot platform that uses OpenAI's GPT technology to simulate human conversation.</h1>
            <div class = "flex justify-between">
                <p class = "text-green-500 font-medium">Basic: ${single.pricing[0].price}</p>
                <p class = "text-orange-400 font-medium">Pro: ${single.pricing[1].price}</p>
                <p class = "text-red-400 font-medium">Enterprise: ${single.pricing[2].price}</p>
            </div>
            <br>
            <div class = "flex justify-between">
                <div>
                <h1 class = "text-xl font-bold">Features</h1>
                    <ul>
                        <li>${single.features[1].feature_name}</li>
                        <li>${single.features[2].feature_name}</li>
                        <li>${single.features[3].feature_name}</li>
                    </ul>
                </div>
                <div>
                <h1 class = "text-xl font-bold">Integrations</h1>
                    <ul>
                        <li>${single.integrations[0]}</li>
                        <li>${single.integrations[1]}</li>
                        <li>${single.integrations[2]}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class = "ml-5  text-center">
            <img src=" ${single.image_link[0]}" alt="AI" class = "rounded-xl" />
            <h1 class = "text-2xl font-bold">${single.input_output_examples[0].input}</h1>
            <p>${single.input_output_examples[0].output}</p>
        </div>
    </div>
    
    
    `
    console.log(single.integrations[0])
    
}
loadDataShow()