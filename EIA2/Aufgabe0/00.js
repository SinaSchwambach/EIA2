function main() {
    var name = prompt("Bitte gib deinen Namen ein");
    var node = document.getElementById("content");
    node.innerHTML += "Hallo ";
    node.innerHTML += name;
    node.innerHTML += " es freut mich dich auf meiner Seite begrue�en zu duerfen!";
    console.log("Hallo " + name + " es freut mich dich auf meiner Seite begrue�en zu duerfen!");
}
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=00.js.map