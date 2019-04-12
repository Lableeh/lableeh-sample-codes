

function showInput() {
    document.getElementById('FName').innerHTML = document
            .getElementById("name").value;
    document.getElementById('Age').innerHTML = document
            .getElementById("age").value;
    document.getElementById('Gender').innerHTML = document
            .getElementById("gender").value;
}

export default showInput;
