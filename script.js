fetch("data/niches.json")
.then(res=>res.json())
.then(niches=>{
const container=document.getElementById("top-niches");
niches.forEach(n=>{
const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${n.emoji} ${n.name}</h3>
<p>${n.description}</p>
<a href="niche.html?niche=${n.slug}">Explore</a>
`;
container.appendChild(card);
});
});
