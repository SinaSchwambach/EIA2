
    function main() {
        var name: string= prompt("Bitte gib deinen Namen ein");
        var node :HTMLElement  = document.getElementById("content");
        var innerHTML :string;
        
        node.innerHTML += "Hallo ";
        node.innerHTML += name;
        node.innerHTML += " es freut mich dich auf meiner Seite begrueﬂen zu duerfen!";
        console.log("Hallo "+ name + " es freut mich dich auf meiner Seite begrueﬂen zu duerfen!" );
    }
    document.addEventListener('DOMContentLoaded', main);
