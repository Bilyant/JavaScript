window.addEventListener('load', solve);

function solve() {
    
    let elements = {
        genreInput: document.getElementById('genre'),
        songNameInput: document.getElementById('name'),
        authorNameInput: document.getElementById('author'),
        dateInput: document.getElementById('date'),
        submitBtn: document.getElementById('add-btn'),
        hitsContainer: document.querySelector('.all-hits-container'),
        likesCountParagraph: document.querySelector('.likes > p'),
        savedSongsContainer: document.querySelector('.saved-container'),
    }

    elements.submitBtn.addEventListener('click', submitSongHandler);

    function submitSongHandler(event) {

        event.preventDefault();

        let genre = elements.genreInput.value;
        let songName = elements.songNameInput.value;
        let authorName = elements.authorNameInput.value;
        let date = elements.dateInput.value;

        let allDataProvided = true;

        if (!(genre && songName && authorName && date)) {
            allDataProvided = false;
        }
    
        if (allDataProvided) {

            let newDivContainer = document.createElement('div');
            newDivContainer.classList.add('hits-info');

            let imgOfSong = document.createElement('img');
            imgOfSong.src = './static/img/img.png';

            let h2HeadingGenre = document.createElement('h2');
            h2HeadingGenre.textContent = `Genre: ${genre}`;

            let h2HeadingName = document.createElement('h2');
            h2HeadingName.textContent = `Name: ${songName}`;

            let h2HeadingAuthor = document.createElement('h2');
            h2HeadingAuthor.textContent = `Author: ${authorName}`;

            let h3HeadingDate = document.createElement('h3');
            h3HeadingDate.textContent = `Date: ${date}`;

            let newBtnSave = document.createElement('button');
            newBtnSave.textContent = 'Save';
            newBtnSave.classList.add('save-btn');
            newBtnSave.addEventListener('click', saveSongHandler);

            let newBtnLike = document.createElement('button');
            newBtnLike.textContent = 'Like';
            newBtnLike.classList.add('like-btn');
            newBtnLike.addEventListener('click', likeSongHandler);

            let newBtnDelete = document.createElement('button');
            newBtnDelete.textContent = 'Delete';
            newBtnDelete.classList.add('delete-btn');
            newBtnDelete.addEventListener('click', deleteSongHandler);

            newDivContainer.appendChild(imgOfSong);
            newDivContainer.appendChild(h2HeadingGenre);
            newDivContainer.appendChild(h2HeadingName);
            newDivContainer.appendChild(h2HeadingAuthor);
            newDivContainer.appendChild(h3HeadingDate);
            newDivContainer.appendChild(newBtnSave);
            newDivContainer.appendChild(newBtnLike);
            newDivContainer.appendChild(newBtnDelete);

            elements.hitsContainer.appendChild(newDivContainer);

            for (let el in elements) {
                elements[el].value = '';
            }

            function saveSongHandler() {

                newBtnSave.parentElement.removeChild(newBtnSave);
                newBtnLike.parentElement.removeChild(newBtnLike);
                elements.savedSongsContainer.appendChild(newDivContainer);
                elements.hitsContainer.removeChild(newDivContainer);

            };

            function likeSongHandler() {

                let paragraphContent = elements.likesCountParagraph.textContent.split(' ');
                let likes = Number(paragraphContent[paragraphContent.length - 1]);
                likes++;
                let text = paragraphContent.slice(0, paragraphContent.length - 1).join(' ')
                let newContent = text  + ' ' +  String(likes);
                elements.likesCountParagraph.textContent = newContent;

                newBtnLike.setAttribute('disabled', 'true');
                newBtnLike.style.cursor = 'default';
            };

            function deleteSongHandler() {
                newDivContainer.parentElement.removeChild(newDivContainer);
            };
        }
    };
}