
    function main() {
        var name = prompt("Bitte gib deinen Namen ein");
        var node = document.getElementById("content");
        node.innerHTML += "Hallo ";
        node.innerHTML += name;
        node.innerHTML += " es freut mich dich auf meiner Seite begrueﬂen zu duerfen!";
        console.log("Hallo "+ name + " es freut mich dich auf meiner Seite begrueﬂen zu duerfen!" );
    }
    document.addEventListener('DOMContentLoaded', main);
