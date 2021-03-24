const socket1 = io("http://localhost:3000");
   console.log(`client js connected`)
document.addEventListener("DOMContentLoaded", () => {
   const nme = prompt("enter your name");
   let bar = document.getElementsByClassName("transfer");
   let spacebar = document.getElementsByClassName("pretransfer");
   let user = document.getElementById("user");

   //1
   socket1.emit("new", nme);
   //2
   socket1.on("lets-start", (na) => {
      console.log("newly connected user is ", na);
   });
   //3
   socket1.on(`client-receive`, (tata) => {
      console.log(`data id being received`);
      bar[0].innerHTML = tata.F;
      // spacebar[0].innerHTML = tata.I;
      user.innerHTML = tata.user;
   });
});
