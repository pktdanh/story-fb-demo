var story = document.querySelector('.story');
var wrapper = document.querySelector('.wrapper');
var btnClose = document.querySelector('.btn-close');
// var storyRight = document.querySelector('.btn-next');
// var storyLeft = document.querySelector('.btn-prev');
var authorName = document.querySelector('.author__name');
var authorImg = document.querySelector('.author__img');

var storyLeft = document.querySelector('.story-left');
var avatarLeft = document.querySelector('.avatar-left');
var titleLeft = document.querySelector('.title-left')
var storyRight = document.querySelector('.story-right');
var avatarRight = document.querySelector('.avatar-right');
var titleRight = document.querySelector('.title-right')
var timeLine = document.querySelector('.time-line');

var index = 0;
var isWatching = 0;


    
        




stories = [
    {
        value: 0,
        author: 'Quyên 0',
        url: "./img/1.jpg"
    },
    {
        value: 1,
        author: 'Quyên 1',
        url: "./img/2.jpg"
    },
    {
        value: 2,
        author: 'Quyên 2',
        url: "./img/3.jpg"
    },
    {
        value: 3,
        author: 'Quyên 3',
        url: "./img/4.jpg"
    },
    {
        value: 4,
        author: 'Quyên 4',
        url: "./img/5.jpg"
    },
    {
        value: 5,
        author: 'Quyên 5',
        url: "./img/6.jpg"
    },
    {
        value: 6,
        author: 'Quyên 6',
        url: "./img/7.jpg"
    },
    {
        value: 7,
        author: 'Quyên 7',
        url: "./img/8.jpg"
    }
]

console.log("main" + index);

story.onclick = function(e) {
    isWatching = 1;
    story.style.height = '90%';
    story.style.width = '260px';
    wrapper.style.backgroundColor = 'rgba(0,0,0,0.7)';
    btnClose.style.display = 'block';
    timeLine.style.display = 'block';
    storyRight.style.display = 'block';
    storyLeft.style.display = 'block';
    authorName.style.fontSize = '14px';
    e.stopPropagation();
    index = 0;
    console.log("story: "+index);
    
    setTimeout(function() {
        timeLine.style.display = 'none';
    },3000)
}




btnClose.onclick = function(e) {
    isWatching = 0
    story.style.height = '300px';
    story.style.width = '160px';
    wrapper.style.backgroundColor = '#fff';
    e.stopPropagation();
    btnClose.style.display = 'none';
    timeLine.style.display = 'none';
    storyRight.style.display = 'none';
    storyLeft.style.display = 'none';
    authorName.style.fontSize = '10px';
    index = 0;
    console.log("close: "+index);
}

wrapper.onclick = function() {
    isWatching = 0
    story.style.height = '300px';
    story.style.width = '160px';
    wrapper.style.backgroundColor = '#fff';
    btnClose.style.display = 'none';
    timeLine.style.display = 'none';
    storyRight.style.display = 'none';
    storyLeft.style.display = 'none';
    authorName.style.fontSize = '10px';
    index = 0;
}

// function handlestoryLeft() {
//     if (index == 1 || index == 0)
//     {
//         storyLeft.style.display = 'none !important' ;
//         console.log("concac");
//     }
// }



storyRight.onclick = function(e){
    setTimeout(function() {
        timeLine.style.display = 'none';
    },50)
    e.stopPropagation();
    index++;
    let leftIndex = index - 1;
    let rightIndex = index + 1;
    let num = stories.length;

    authorName.textContent = stories[index%num].author;
    story.style.background = "url(" + stories[index%num].url + ") top center / cover no-repeat";
    authorImg.src = stories[index%num].url;

    storyLeft.style.background = "url(" + stories[leftIndex%num].url + ") top center / cover no-repeat";
    titleLeft.textContent = stories[leftIndex%num].author;
    avatarLeft.src = stories[leftIndex%num].url;

    storyRight.style.background = "url(" + stories[rightIndex%num].url + ") top center / cover no-repeat";
    titleRight.textContent = stories[rightIndex%num].author;
    avatarRight.src = stories[rightIndex%num].url;

    setTimeout(function() {
        timeLine.style.display = 'block';
    },100)


}

storyLeft.onclick = function(e){
    e.stopPropagation();
    let num = stories.length;
    let leftIndex = index - 1;
    let rightIndex = index + 1;
    if (index == 0)
        index = num - 1;
    else 
        index--;
    
    if (index == 0) {
        leftIndex = num - 1;
        rightIndex = index + 1;
    }
    else {
        leftIndex = index - 1;
        rightIndex = index + 1;
    }
    

    authorName.textContent = stories[index%num].author;
    story.style.background = "url(" + stories[index%num].url + ") top center / cover no-repeat";
    authorImg.src = stories[index%num].url;

    storyLeft.style.background = "url(" + stories[leftIndex%num].url + ") top center / cover no-repeat";
    titleLeft.textContent = stories[leftIndex%num].author;
    avatarLeft.src = stories[leftIndex%num].url;

    storyRight.style.background = "url(" + stories[rightIndex%num].url + ") top center / cover no-repeat";
    titleRight.textContent = stories[rightIndex%num].author;
    avatarRight.src = stories[rightIndex%num].url;

    timeLine.style.display = 'block';
    
}

function start() {
    let num = stories.length;
    let leftIndex = num - 1;
    let rightIndex = index + 1;
    
    

    authorName.textContent = stories[index%num].author;
    story.style.background = "url(" + stories[index%num].url + ") top center / cover no-repeat";
    authorImg.src = stories[index%num].url;

    storyLeft.style.background = "url(" + stories[leftIndex%num].url + ") top center / cover no-repeat";
    titleLeft.textContent = stories[leftIndex%num].author;
    avatarLeft.src = stories[leftIndex%num].url;

    storyRight.style.background = "url(" + stories[rightIndex%num].url + ") top center / cover no-repeat";
    titleRight.textContent = stories[rightIndex%num].author;
    avatarRight.src = stories[rightIndex%num].url;

    
}

start();