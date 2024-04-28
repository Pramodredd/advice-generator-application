let count = localStorage.getItem('count') || 0;
function advice() {
    count++;
    localStorage.setItem('count',count);
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        // Handle the data from the API
        var advice = data.slip.advice; // Extract the advice from the API response
        var b = document.getElementById('advice');
        b.textContent = advice; // Set the advice as the content of the HTML element
        var c = document.getElementById('number');
        c.textContent = count;
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
}