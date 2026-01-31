fetch('data/niches.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('niche-list');
    if (list) {
      data.forEach(n => {
        const a = document.createElement('a');
        a.href = `niche.html?n=${encodeURIComponent(n.slug)}`;
        a.innerText = n.name;
        list.appendChild(a);
        list.appendChild(document.createElement('br'));
      });
    }

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('n');
    const niche = data.find(x => x.slug === slug);
    if (niche) {
      document.getElementById('niche').innerHTML = `
        <h1>${niche.name}</h1>
        <p>${niche.description}</p>
      `;
      document.getElementById('offer').href = niche.offer;
    }
  });
