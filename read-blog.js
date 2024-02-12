
    let storageBlogs = localStorage.getItem('blogs');
    allBlogs = JSON.parse(storageBlogs);

    // get div where blog will be displayed
    const blogHeader = document.querySelector('.blog-header');
    const blogBody = document.querySelector('.blog-body');
    const blogStats = document.querySelector('.blog-stats');
    const blogComments = document.querySelector('.comment-section');
    // get id from the url
    const searchParams = new URLSearchParams(window.location.search);
    const currentId = searchParams.get('id');
    // filtering blogs to only display one with id in url
    var blog = allBlogs.filter(item => item.id == currentId)[0];
    
    // handling Dates
    const days =['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const nthValue =(date)=>{
        if (date.toString().length > 2 || date.toString().length == 0) return 'undefined';
        if (Number(date) > 10 && Number(date) >= 20) return 'th';
        if(date.toString().length > 1 && Number(date) > 20){
            const newDate = Number(date.toString().split('')[1]);
            return newDate > 3 ? 'th' : newDate == 0 ? 'th' : newDate == 1 ? 'st' : newDate == 2 ? 'nd' : 'rd';
        }
        const newDate = Number(date)
        return newDate > 3 ? 'th' : newDate == 0 ? 'th' : newDate == 1 ? 'st' : newDate == 2 ? 'nd' : 'rd';
        
    }

    const publishedDate = new Date(blog.published);
    const PublishedDateString = `${days[publishedDate.getDay()]}, The ${publishedDate.getDate() + nthValue(publishedDate.getDate())} ${months[publishedDate.getMonth()]} ${publishedDate.getFullYear()}`

    const blogHeaderContent =`
        <div class="container pt-md-5 pt-lg-5 px-lg-5 px-4 px-md-4">
            <div class="block font-5 bold-3">${blog.title}
            </div>
            <div class="img-wrapper br-3 mt-3 mt-md-3 mt-lg-3" >
                <img src=${blog.imagePath}
                class=" br-3" style="height: auto; width: 100%;"/>
            </div>
            <div class="block py-4 py-md-4 py-lg-4 relative">
                    <div class="flex-box">
                        <div class="inline-block br-rnd b-1px-hue" 
                            style="width: 3rem; height: 3rem; background-image: url('./assets/mbg.png'); background-position: top; background-size: cover;"
                        >
                        </div>
                        <div class="inline-block pt-3 pt-md-3 pt-lg-3 px-3 px-md-3 px-lg-3 bold-2 author-names" style="height: 3rem;">
                            ${blog.author.firstName} ${blog.author.lastName}
                            <span class="block text-muted font-0 lato clr-red">${PublishedDateString}
                        </div>
                    </div>
                    <div class="block absolute  text-right" style="bottom: 1rem ; right: 0rem;">
                        <span class="icon inline-block mx-3 mx-md-3 mx-lg-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                        </span>
                        <span class="icon inline-block mx-3 mx-md-3 mx-lg-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </span>
                        <span class="icon inline-block mx-3 mx-md-3 mx-lg-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </span>
                        <span class="icon inline-block mx-3 mx-md-3 mx-lg-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                            </svg>
                        </span>
                    </div>
            </div>`
            blogHeader.innerHTML += blogHeaderContent;
            blogBody.innerHTML += `${blog.body}`;

            const blogStatsContent =`
            <div class="action block text-center mt-5 mt-md-5 mt-lg-5">
                <div class="like inline-block  mx-3 mx-md-3 mx-lg-3 bold-3 ">
                    <span class="clr-red pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    </span>
                    <span class="inline-block px-2 font-2 bold-1">
                        ${blog.likes.length} Likes
                    </span>
                </div>
                <div class="share inline-block  mx-3 mx-md-3 mx-lg-3 pointer bold-3">
                    <span class="clr-red pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                        </svg>
                    </span>
                    <span class="inline-block px-2 font-2 bold-1">
                        0 Shares
                    </span>
                </div>
                <div class="share inline-block  mx-3 mx-md-3 mx-lg-3 pointer bold-3">
                    <span class="clr-red pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16">
                            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </span>
                    <span class="inline-block px-2 font-2 bold-1">
                        ${blog.comments.length ? blog.comments.length : 'No'} Comments
                    </span>
                </div>
            </div>
        </div>
        <div class="container px-lg-5 px-md-4 px-4">
        <div class="block py-lg-4 mb-lg-5">
        <h1 class="py-lg-4">${blog.comments.length} Comments</h1>
    </div>
        </div>
        `
    blogStats.innerHTML += blogStatsContent;
    
    blog.comments.forEach((comment)=>{
        const fullName = comment.author.firstName +" "+ comment.author.lastName;
        const commentCards = `
            <div class="block py-lg-4 px-lg-4 box-shadow comment-card card br-3 px-lg-4 mt-lg-4">
                        <div class="flex-box">
                            <div class="inlne-block br-rnd b-1px-hue relative flex-centered-vertical flex-centered"
                                style="width: 2.4rem; height: 2.4rem; background-color: #E84949; color: white;">
                                <span class="uppercase block text-center font-2-5 bold-1">
                                    ${comment.author.firstName.charAt(0)}${comment.author.lastName.charAt(0)}
                                </span>
                            </div>
                            <div class="inline-block pt-1 pt-md-1 pt-lg-3 px-3 px-md-3 px-lg-3 bold-2 author-names capitalize"
                             style="height: 3rem;">
                                ${fullName.length > 24 ? fullName.substring(0, 24)+"..." : fullName}
                                <span class="block font-0 bold-0 clr-red">

                                </span>
                            </div>
                        </div>
                        <div class="block" style="min-height: 4rem;">
                            <p class="font-2 py-lg-3 p-comment">
                                ${comment.body}
                            </p>
                        </div>
                        <div class="block text-right pt-lg-4">
                            <div class="share inline-block  mx-3 mx-md-3 mx-lg-3 pointer">
                                <span class="clr-red pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                    </svg>
                                </span>
                                <span class="inline-block px-2 font-2 text-muted">
                                    12 Likes
                                </span>
                            </div>
                            <div class="share inline-block  mx-3 mx-md-3 mx-lg-3 pointer">
                                <span class="clr-red pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                                        <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"/>
                                    </svg>
                                </span>
                                <span class="inline-block px-2 font-2 text-muted">
                                    12 disikes
                                </span>
                            </div>
                        </div>
                    </div>
                `
        blogComments.innerHTML += commentCards;
    });