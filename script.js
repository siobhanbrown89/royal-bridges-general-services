document.addEventListener("DOMContentLoaded",()=>{
  const year=document.getElementById("year");
  if(year) year.textContent=new Date().getFullYear();

  const menu=document.querySelector(".menu");
  const nav=document.querySelector("nav");
  if(menu&&nav) menu.addEventListener("click",()=>{
    nav.classList.toggle("open");
    menu.textContent=nav.classList.contains("open")?"×":"☰";
  });

  document.querySelectorAll("form.demo-form").forEach(form=>{
    form.addEventListener("submit",event=>{
      event.preventDefault();
      if(!form.reportValidity()) return;
      const data=new FormData(form);
      const title=form.closest("main")?.querySelector(".page-hero h1")?.innerText.replace(/\\s+/g," ").trim()||"Marketplace enquiry";
      const lines=[...data.entries()].map(([key,value])=>key+": "+value);
      const subject=encodeURIComponent("Royal Bridges Group — "+title);
      const body=encodeURIComponent("ROYAL BRIDGES GROUP ENQUIRY\\n\\n"+lines.join("\\n")+"\\n\\nPlease review this enquiry and contact me about the next steps.");
      const status=form.querySelector(".status");
      if(status) status.textContent="Your email application should open with the details prepared. Review the message and press Send. This website does not automatically store the enquiry or add it to the CRM.";
      window.location.href="mailto:info@royalbridges.ae?subject="+subject+"&body="+body;
    });
  });
});