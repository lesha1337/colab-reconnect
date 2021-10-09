const connect = () => {
    console.log("Reconnect activated'");
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
}
alert('Reconnect activated');
connect();
const intervalId = setInterval(connect, 60000);