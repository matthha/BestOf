tt = document.querySelector('.top')
const showFav = () => {
    const d = document.createElement('div')
    const im = document.createElement('img')
    const ds = document.createElement('div')
    const h = document.createElement('h2')
    const hh= document.createElement('h3')

    if (localStorage.getItem('my.fav')) {
        a=JSON.parse(localStorage.getItem('my.fav'));
        tt.appendChild(d);

        d.className="card";

        d.appendChild(h);
        h.textContent='My Favorite Game'
        h.className='info'
        d.appendChild(hh)
        hh.textContent=a['game'];
        d.appendChild(im);
        im.src=a['imgl'];
        im.alt='Box art for '+a['game'];

        d.appendChild(ds)
        ds.textContent=a['score']
        ds.className='score'
        ds.href=a['reviewlink']
      } else {
        tt.appendChild(d)
        d.textContent="You have not selected a favorite game yet. Go to 'Games' to choose a favorite!"
      }

}
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
showFav()