import{a as f,i as n,S as u}from"./assets/vendor-BMHzDZyJ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h={key:"40945002-e125ab8d3394997b1a8dc0871",image_type:"photo",orientation:"horizontal",safesearch:!0};async function d(s,i={}){return f.get(g,{params:{...h,...i,q:s}})}function y(s){return s.map(({largeImageURL:i,webformatURL:r,tags:o,likes:e,views:t,comments:a,downloads:m})=>`<li class="gallery-item">
            <div class="img-wrapper">
              <a href="${i}">
                  <img
                    class="gallery-img"
                    src="${r}" 
                    alt="${o}"
                    width="360"
                    height="200">
              </a> 
            </div>
            <div class="text-wrapper">
              <ul class="img-info-list">
                <li class="info-item">
                  <h3 class="info-title">likes</h3>
                  <p class="info-text">${e}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">views</h3>
                  <p class="info-text">${t}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">comments</h3>
                  <p class="info-text">${a}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">downloads</h3>
                  <p class="info-text">${m}</p>
                </li>
              </ul>
            </div>
        </li>`)}const p=document.querySelector("form"),[c]=p.elements,l=document.querySelector(".gallery");n.settings({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16px",displayMode:2});const x=new u(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",async s=>{if(s.preventDefault(),c.value.trim()===""){n.error({message:"Search field cannot be empty",position:"topRight",messageSize:"16px"});return}l.innerHTML='<span class="loader"></span>',d(c.value.trim()).then(({data:{hits:i}})=>{if(i.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16px"}),l.innerHTML="";return}const r=y(i);l.innerHTML=r.join(" "),x.refresh()}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight",messageSize:"16px"})})});
//# sourceMappingURL=index.js.map
