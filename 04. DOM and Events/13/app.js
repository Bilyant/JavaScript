function lockedProfile() {
    
    elements = {
        profiles: Array.from(document.querySelectorAll('#main .profile')),
    };

    for (const profile of elements.profiles) {
        
        let children = Array.from(profile.children);
        let unlockInputElement = children[4];
        let showMoreBtn = children[children.length - 1];
        let hiddenFields = children[children.length - 2];

        showMoreBtn.addEventListener('click', clickEventHandler)

        function clickEventHandler(e) {

            if (unlockInputElement.checked) {

                if (hiddenFields.style.display == 'block'){
                    hiddenFields.style.display = 'none';
                    showMoreBtn.innerHTML = 'Show More';
                }
                else {
                    hiddenFields.style.display = 'block';
                    showMoreBtn.innerHTML = 'Hide';
                }
            }
        }
    };
}