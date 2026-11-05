const resourcePaths = [
  "P1/eng/notes/P.1 ENGLISH LESSON PLANS BOOKLET TERM II2026.pdf",
  "P1/eng/notes/P.1 English Comprehension Scheme of Work Term III (2).pdf",
  "P1/eng/notes/P.1 READING LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P1/luganda/notes/P.1 LUGANDA LESSON PLANS BOOKLET TERM II2026.pdf",
  "P1/mtc/papers and revision/P1 MATHS BOT III.pdf",
  "P1/re/notes/P.1 RELIGIOUS EDUCATION LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P1/re/papers and revision/P.1 R.E-BOT-T2.pdf",
  "P1/sci/notes/P.1 SCIENCE LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P1/sst/notes/P.1 SOCIAL STUDIES LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P2/eng/notes/P.2 ENGLISH LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P2/eng/notes/P.2 READING LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P2/eng/notes/P.2 READING SCHEME OF WORK TERM III (1).pdf",
  "P2/eng/notes/P2 TERM I-III SCHEME GRAMMAR (2).pdf",
  "P2/eng/papers and revision/P.2 Literacy Two Term Three (2).pdf",
  "P2/eng/papers and revision/P.2 READING-BOT-T2.pdf",
  "P2/luganda/notes/P.2 LUGANDA LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P2/mtc/notes/P.2 MATHEMATICS LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P2/mtc/notes/P.2 MATHEMATICS LESSON PLANS BOOKLET TERM III 2025.pdf",
  "P2/mtc/notes/p.2-mtc-scheme-T3 (2).pdf",
  "P2/re/notes/P.2 R.E SCHEME OF WORK TERM 2 AND 3 (2).pdf",
  "P2/re/notes/P.2 R.E SCHEME OF WORK TERM III (2).pdf",
  "P2/re/notes/P.2 RELIGIOUS EDUCATION LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P2/sst/notes/P.2 SOCIAL STUDIES LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P3/eng/notes/P.3  READING SCHEME OF WORK TERM III (1) (2).pdf",
  "P3/eng/notes/P.3 ENGLISH LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P3/eng/notes/P.3 LITERACY 1B LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P3/eng/notes/P.3 READING LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P3/eng/notes/TEKART P.3 ENG SCHEME (2).pdf",
  "P3/eng/notes/pearl primary three composition scheme of work term ii - exoticnotes.com (2).pdf",
  "P3/eng/papers and revision/P.3 -ENG-BOT-T2.pdf",
  "P3/luganda/notes/P.3 LUGANDA LESSON PLANS BOOKLET TERM II2026.pdf",
  "P3/mtc/notes/P.3 MATHEMATICS  LESSON PLANS BOOKET TERM II 2026.pdf",
  "P3/mtc/notes/P.3 MATHEMATICS SCHEME OF WORK TERM III (2).pdf",
  "P3/mtc/papers and revision/P.3 MTC-BOT-T2-1.pdf",
  "P3/mtc/papers and revision/P.3 MTC-BOT-T2.pdf",
  "P3/re/notes/P.3 RE LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P5/eng/notes/P.5 COMPOSITION AND COMPREHENSION SCHEME TERM III (2).pdf",
  "P5/mtc/papers and revision/P.5 MTC WORK BOOKS III.pdf",
  "P5/sci/notes/P.5 SCIENCE LESSON PLANS BOOKLET TERM II 2026.pdf",
  "P5/sci/papers and revision/BROAD P5 EOT 3 SCIE.pdf",
  "P5/sci/papers and revision/PARAMOUNT SCI T1-T3 P.5 (2).pdf",
  "P5/sst/notes/PESK P.5 SST LESSON PLANS BOOKLET TERM II 2026-PRE-COPY-BY MR. JAYSON.pdf",
  "P5/sst/papers and revision/EOT P.5 SST BY SMILE.pdf",
  "P5/sst/papers and revision/EXCEL P.5 SST TERM III (2).pdf",
  "P5/sst/papers and revision/GVPS P5 mid 3 SST 2023.pdf",
  "P5/sst/papers and revision/KINGS SCHOOLS KABOWA P.5 SST 2020 REVISION QUESTIONS.pdf",
  "P5/sst/papers and revision/MANTAPOL P5 EOT 2 SST.pdf",
  "P5/sst/papers and revision/P.5 S.S.T  TERM TWO 2020.pdf",
  "P5/sst/papers and revision/P.5 SST END OF TERM 1 2022 SIPRO (1).pdf",
  "P5/sst/papers and revision/P.5 SST MID TERM I .pdf",
  "P5/sst/papers and revision/P.5.SST.pdf",
  "P5/sst/papers and revision/SOCIAL STUDIES  P_5  TERM I, 2019 SST.pdf",
  "P5/sst/papers and revision/kolfram bot P.5 SST  MARKING GUIDE 2023 .pdf"
];
const subjectNames={eng:"English",mtc:"Mathematics",sci:"Science",sst:"Social Studies",re:"Religious Education",luganda:"Luganda"};
const resources=resourcePaths.map(path=>{
  const parts=path.split("/"),grade=parts[0],subject=subjectNames[parts[1]],filename=parts[parts.length-1],name=filename.replace(/\.pdf$/i,""),isRevision=path.includes("papers and revision"),isReading=/reading/i.test(name),type=isRevision?"revision":isReading?"reading":"lesson";
  const title=name.replace(/\s+/g," ").trim();
  const year=(name.match(/\b20\d{2}\b/)||["Archive"])[0];
  return {id:`${grade}-${subject}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g,"-"),title:`${grade} · ${title}`,grade,subject,type,typeLabel:type==="revision"?"Revision paper":type==="reading"?"Reading":"Lesson plan",description:`${type==="revision"?"Revision paper":type==="reading"?"Reading":"Lesson plan"} resource for ${grade}, ${subject}.`,year,pages:"PDF",rating:4.5,path};
});
const state={query:"",filter:"all",subject:"all",grade:"all",favorites:JSON.parse(localStorage.getItem("primaryshelf-favorites")||"[]"),favoritesOnly:false,current:null,ratings:JSON.parse(localStorage.getItem("primaryshelf-ratings")||"{}"),comments:JSON.parse(localStorage.getItem("primaryshelf-comments")||"{}")};
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const fileUrl=path=>encodeURI(path);
function filtered(){let list=resources.filter(r=>(state.filter==="all"||r.type===state.filter)&&(state.subject==="all"||r.subject===state.subject)&&(state.grade==="all"||r.grade===state.grade)&&(!state.favoritesOnly||state.favorites.includes(r.id))&&(`${r.title} ${r.subject} ${r.grade} ${r.typeLabel}`.toLowerCase().includes(state.query.toLowerCase())));const sort=$("#sortSelect").value;if(sort==="az")list.sort((a,b)=>a.title.localeCompare(b.title));if(sort==="rating")list.sort((a,b)=>b.rating-a.rating);return list}
function render(){const list=filtered(),grid=$("#resourceGrid");grid.innerHTML=list.map(r=>`<article class="resource-card"><div class="card-color"></div><div class="card-body"><div class="card-top"><span class="file-type">${r.typeLabel} · PDF</span><button class="save-button ${state.favorites.includes(r.id)?"saved":""}" data-save="${r.id}" aria-label="Save ${r.title}">${state.favorites.includes(r.id)?"♥":"♡"}</button></div><h3>${r.title}</h3><p class="card-description">${r.description}</p><div class="card-meta"><span class="subject-label">${r.subject} · ${r.grade}</span><span>${r.pages} · ${r.year}</span><span class="card-rating">★ ${r.rating}</span></div><div class="card-actions"><button class="primary-button" data-read="${r.id}">Read online ↗</button><a class="secondary-button" href="${fileUrl(r.path)}" download>↓ Download</a></div></div></article>`).join("");$("#resultCount").textContent=`${list.length} resource${list.length===1?"":"s"}`;$("#resultsLabel").textContent=state.favoritesOnly?"Saved to my shelf":state.query?`Results for “${state.query}”`:state.grade!=="all"?`Showing ${state.grade} resources`:state.subject==="all"?"Showing all resources":`Showing ${state.subject} resources`;$("#emptyState").classList.toggle("hidden",list.length>0);grid.classList.toggle("hidden",list.length===0);$("#allCount").textContent=resources.length;$$("[data-save]").forEach(b=>b.onclick=()=>toggleFavorite(b.dataset.save));$$("[data-read]").forEach(b=>b.onclick=()=>openReader(b.dataset.read))}
function toggleFavorite(id){state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];localStorage.setItem("primaryshelf-favorites",JSON.stringify(state.favorites));render();toast(state.favorites.includes(id)?"Saved to your shelf":"Removed from your shelf")}
function openReader(id){state.current=resources.find(r=>r.id===id);const r=state.current;$("#modalTitle").textContent=r.title;$("#modalType").textContent=`${r.subject} · ${r.typeLabel}`;$("#readerHeading").textContent=r.title;$("#openPdf").href=fileUrl(r.path);$("#downloadPdf").href=fileUrl(r.path);renderRating();renderComments();$("#readerModal").classList.remove("hidden");document.body.style.overflow="hidden"}
function closeReader(){$("#readerModal").classList.add("hidden");document.body.style.overflow=""}
function renderRating(){const value=state.ratings[state.current.id]||0;$("#modalStars").innerHTML=[1,2,3,4,5].map(i=>`<button class="${i<=value?"selected":""}" data-rate="${i}" aria-label="${i} stars">★</button>`).join("");$("#ratingValue").textContent=value?`${value}/5`: "Not rated";$$("[data-rate]").forEach(b=>b.onclick=()=>{state.ratings[state.current.id]=+b.dataset.rate;localStorage.setItem("primaryshelf-ratings",JSON.stringify(state.ratings));renderRating();toast("Thanks for rating this resource")})}
function renderComments(){const list=state.comments[state.current.id]||[];$("#commentCount").textContent=`${list.length} comment${list.length===1?"":"s"}`;$("#commentsList").innerHTML=list.map(c=>`<div class="comment"><div class="comment-avatar">TS</div><div><p>${escapeHtml(c.text)}</p><time>${c.date}</time></div></div>`).join("")}
function escapeHtml(text){return text.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
let toastTimer;function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2400)}
function setQuery(value){state.query=value;$("#heroSearch").value=value;render()}
$("#heroSearch").oninput=e=>setQuery(e.target.value);document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement.tagName!=="INPUT"){e.preventDefault();$("#heroSearch").focus()}if(e.key==="Escape")closeReader()});
$$(".filter-tab").forEach(b=>b.onclick=()=>{$$(".filter-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.filter=b.dataset.filter;render()});
$$(".subject-pill").forEach(b=>b.onclick=()=>{$$(".subject-pill").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.subject=b.dataset.subject;render()});
$("#sortSelect").onchange=render;$$(".grade-pill").forEach(b=>b.onclick=()=>{$$(".grade-pill").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.grade=b.dataset.grade;render()});$("#favoritesFilter").onclick=()=>{state.favoritesOnly=!state.favoritesOnly;$("#favoritesFilter").classList.toggle("active",state.favoritesOnly);render()};$("#clearFilters").onclick=()=>{state.query="";state.filter="all";state.subject="all";state.grade="all";state.favoritesOnly=false;$("#heroSearch").value="";$$(".filter-tab,.subject-pill,.grade-pill").forEach(x=>x.classList.remove("active"));$("[data-filter=all]").classList.add("active");$("[data-subject=all]").classList.add("active");$("[data-grade=all]").classList.add("active");render()};$("#closeModal").onclick=closeReader;$("#readerModal").onclick=e=>{if(e.target.id==="readerModal")closeReader()};$("#commentForm").onsubmit=e=>{e.preventDefault();const input=$("#commentInput"),text=input.value.trim();if(!text)return;state.comments[state.current.id]??=[];state.comments[state.current.id].unshift({text,date:"Just now"});localStorage.setItem("primaryshelf-comments",JSON.stringify(state.comments));input.value="";renderComments();toast("Your note was added")};$("#themeToggle").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("primaryshelf-theme",document.body.classList.contains("dark")?"dark":"light")};if(localStorage.getItem("primaryshelf-theme")==="dark")document.body.classList.add("dark");render();
