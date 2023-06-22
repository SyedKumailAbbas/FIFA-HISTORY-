
let search = document.getElementById("search")
search.addEventListener("submit", (event) => {
    document.querySelector("#winner").innerHTML=""
    document.querySelector("#runner").innerHTML=""
    let userinput = document.querySelector("#year").value
    event.preventDefault();
    axios.get(`worldcup/${userinput}`)
        .then((res) => {
            console.log(res.data)
            // document.querySelector("#result").innerHTML=res.data.winner
            //creating winning card
            let card = document.createElement("div")
            card.setAttribute("class", "card text-center m-2 wincard")
            let flagimg = document.createElement("img")
            flagimg.setAttribute("src", res.data.imgsrc)
            flagimg.setAttribute("class", "img-fluid card-img")
            let cardhead = document.createElement("h2")
            cardhead.innerHTML = "<h3>Winner </h3>" + res.data.winner
            let cardbody = document.createElement("div")
            cardbody.setAttribute("class", "card-body")
            let cardtext = document.createElement("p")
            cardtext.setAttribute("class", "card-text")
            cardtext.innerHTML = "<h4>Man of The Match </h4> " + res.data.mom
            cardbody.appendChild(cardtext)
            card.appendChild(cardhead)
            card.appendChild(flagimg)
            card.appendChild(cardbody)
            document.querySelector("#winner").appendChild(card)


            //creating runnerup card
            let runnerup = document.createElement("div")
            runnerup.setAttribute("class", "card text-center m-2 runcard")
            let list = document.createElement("ul")
            let listitem1 = document.createElement("li")
            let listitem2 = document.createElement("li")
            list.setAttribute("class", "list-group list-group-flush")
            listitem1.setAttribute("class", "li1 list-group-item")
            listitem2.setAttribute("class", "li2 host list-group-item")
            listitem1.innerHTML = "<h3>Runners-up</h3>"
            listitem2.innerHTML = res.data.runnerup
            list.appendChild(listitem1)
            list.appendChild(listitem2)
            runnerup.appendChild(list)
            document.querySelector("#runner").appendChild(runnerup)



            //creating topscorer card
            let scorer = document.createElement("div")
            scorer.setAttribute("class", "card text-center m-2 scard")
            let l = document.createElement("ul")
            let scorerhead = document.createElement("li")
            let scorername = document.createElement("li")
            l.setAttribute("class", "list-group list-group-flush")
            scorerhead.setAttribute("class", "li1 list-group-item")
            scorername.setAttribute("class", "li2 host list-group-item")
            scorerhead.innerHTML = "<h3>Top Scorer </h3>"
            scorername.innerHTML = res.data.topscorer
            l.appendChild(scorerhead)
            l.appendChild(scorername)
            scorer.appendChild(l)
            document.querySelector("#runner").appendChild(scorer)




            //creating host card
            let venue = document.createElement("div")
            venue.setAttribute("class", "card text-center m-2 hcard ")
            let li = document.createElement("ul")
            let li1 = document.createElement("li")
            let li2 = document.createElement("li")
            li.setAttribute("class", "list-group list-group-flush")
            li1.setAttribute("class", " li1 list-group-item")
            li2.setAttribute("class", " li2 list-group-item host")
            li1.innerHTML = "<h3>Host </h3>"
            li2.innerHTML = res.data.venue
            li.appendChild(li1)
            li.appendChild(li2)
            venue.appendChild(li)
            document.querySelector("#runner").appendChild(venue)


        })
        .catch((err) => {
            console.log(err)
            console.log("error")
        alert(`No Records of ${userinput}` )

        })



})