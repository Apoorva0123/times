async function apiCall(url) {

    //add api call logic here
    try
    {
        let res = await fetch(url);
        let data = await res.json();
        //console.log(data);
        return data;
    }
    catch(err)
    {
        console.log("err: ",err);
    }
}

function appendNews(news, container)
{
    console.log(news);
    news.map((e) => {
        let title = e.title;
        let link = e.link;
        let a = document.createElement("a");
        let p = document.createElement("p");
        a.innerText = title;
        a.href = link;
        a.style.color = "black";
        p.append(a);
        container.append(p);
    })
}

export {apiCall, appendNews}