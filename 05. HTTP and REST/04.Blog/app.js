function attachEvents() {
    
    let elements = {
        loadBtn: document.getElementById('btnLoadPosts'),
        viewBtn: document.getElementById('btnViewPost'),
        selectElement: document.getElementById('posts'),
        ulElement: document.getElementById('post-comments'),
        postTitleElement: document.getElementById('post-title'),
        postBodyElement: document.getElementById('post-body'),
    }

    let BASE_POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    let BASE_COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';

    elements.loadBtn.addEventListener('click', loadPostsHandler)

    function loadPostsHandler() {

        fetch(`${BASE_POSTS_URL}`)
            .then(res => res.json())
            .then(data => {
            elements.selectElement.innerHTML = '';
                Object.entries(data)
                    .forEach(el => {
                        let [objKey, postData] = el;
                        let {body, id, title} = postData;

                        let newOptionElement = document.createElement('option');
                        newOptionElement.value = objKey;
                        newOptionElement.innerHTML = title;

                        elements.selectElement.appendChild(newOptionElement);
                        
                    })
            })
    };


    elements.viewBtn.addEventListener('click', viewCommentsHandler);

    function viewCommentsHandler() {

        let selectEl = elements.selectElement;
        let currentPost = selectEl.options[selectEl.selectedIndex];
        elements.ulElement.innerHTML = '';

        fetch(`${BASE_COMMENTS_URL}`)
            .then(res => res.json())
            .then(data => {
                Object.entries(data)
                    .forEach(el => {
                        let [objId, postsData] = el;
                        let {id, postId, text} = postsData;

                        if (postId == currentPost.value) {
                            elements.postTitleElement.innerHTML = currentPost.text;
                            elements.postBodyElement.innerHTML = text;

                            let newLiCommentItem = document.createElement('li');
                            newLiCommentItem.innerHTML = text;
                            elements.ulElement.appendChild(newLiCommentItem);
                        }
                    })
            })
    };
}

attachEvents();