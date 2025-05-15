import{a as f,i as l,S as d}from"./assets/vendor-BMHzDZyJ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h={key:"40945002-e125ab8d3394997b1a8dc0871",image_type:"photo",orientation:"horizontal",safesearch:!0};async function y(s,i={}){return f.get(g,{params:{...h,...i,q:s}})}function v(s){return s.map(({largeImageURL:i,webformatURL:r,tags:o,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
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
                  <p class="info-text">${u}</p>
                </li>
              </ul>
            </div>
        </li>`).join(" ")}const p=document.querySelector("form"),[n]=p.elements,c=document.querySelector(".gallery"),m=document.querySelector(".loader");l.settings({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16px",displayMode:2});const S=new d(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",async s=>{if(s.preventDefault(),n.value.trim()===""){l.error({message:"Search field cannot be empty",position:"topRight",messageSize:"16px"});return}m.classList.remove("visually-hidden"),y(n.value.trim()).then(({data:{hits:i}})=>{if(i.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"16px"}),c.innerHTML="";return}const r=v(i);c.innerHTML=r,S.refresh()}).catch(()=>{l.error({message:"Something went wrong. Please try again later.",position:"topRight",messageSize:"16px"})}).finally(()=>{m.classList.add("visually-hidden")})});
//# sourceMappingURL=index.js.map
