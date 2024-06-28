function ajax() {
    let data = null;
    let currentIndex = 0;

    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        if (data === null) {
            fetch('ajax.json')
                .then(response => response.json())
                .then(json => {
                    data = json;
                    updateContent();
                })
                .catch(error => console.error('Error fetching data:', error));
        } else {
            updateContent();
        }
    });

    function updateContent() {
        const videoArea = document.getElementById("video");
        const titleArea = document.getElementById("title");
        const contentArea = document.getElementById("content");

        videoArea.src = data[currentIndex].url;
        titleArea.innerHTML = data[currentIndex].title;
        contentArea.innerHTML = data[currentIndex].content;

        currentIndex = (currentIndex + 1) % data.length;
    }
}

window.onload = ajax;
