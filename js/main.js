let content = "";
let rows = document.getElementsByClassName("kix-wordhtmlgenerator-word-node");
for(let i=0; i < rows.length; i++) { content += rows[i].textContent + "\n"; }
document.getElementsByTagName("html")[0].innerHTML = marked(content);
document.body.className = "markdown-body";
