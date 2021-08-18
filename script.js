var story = document.querySelector('.story');
var wrapper = document.querySelector('.wrapper');
var btnClose = document.querySelector('.btn-close');
var storyRight = document.querySelector('.btn-next');
var storyLeft = document.querySelector('.btn-prev');
var authorName = document.querySelector('.author__name');
var authorImg = document.querySelector('.author__img');
var content = document.querySelector('.content');

// var storyLeft = document.querySelector('.story-left');
// var avatarLeft = document.querySelector('.avatar-left');
// var titleLeft = document.querySelector('.title-left')
// var storyRight = document.querySelector('.story-right');
// var avatarRight = document.querySelector('.avatar-right');
// var titleRight = document.querySelector('.title-right')
// var timeLine = document.querySelector('.time-line');

var index = 0;
var isWatching = 0;


        




stories = [
    {
        value: 0,
        author: 'Anh',
        url: "./img/1.jpg",
        text: "Quéo quèo..lại thêm 1 sinh nhật nữa của bé yêu gòi.."
    },
    {
        value: 1,
        author: 'Yêu',
        url: "./img/2.jpg",
        text: "sinh nhật năm nay dịch hong chở bé đi chơi được bé đừng buồn nhen, qua dịch mình đi bù hén."
    },
    {
        value: 2,
        author: 'Bé',
        url: "./img/3.jpg",
        text: "Chúc bé tuổi mới luôn mạnh khỏe"
    },
    {
        value: 3,
        author: 'Quyên',
        url: "./img/4.jpg",
        text:"xinh đẹp"
    },
    {
        value: 4,
        author: 'Của',
        url: "./img/5.jpg",
        text: "học giỏi"
    },
    {
        value: 5,
        author: 'Anh',
        url: "./img/6.jpg",
        text: "và gặp nhiều may mắn để đạt được những mục tiêu mình đề ra nè"
    },
    {
        value: 6,
        author: 'Nhất',
        url: "./img/7.jpg",
        text: "Đặc biệt là phải yêu anh nhiều nhiều nha."
    },
    {
        value: 7,
        author: 'Love you',
        url: "./img/8.jpg", 
        text: "Happy birthday my love <3"
    }
]

console.log("main" + index);

story.onclick = function(e) {
    e.stopPropagation();
    isWatching = 1;
    story.style.height = '90%';
    story.style.width = '260px';
    wrapper.style.backgroundColor = 'rgba(0,0,0,0.7)';
    btnClose.style.display = 'block';
    storyRight.style.display = 'block';
    storyLeft.style.display = 'block';
    authorName.style.fontSize = '14px';
    content.style.display = 'block';
    index = 0;
    console.log("story cac: "+index);    
}




btnClose.onclick = function(e) {
    e.stopPropagation();   
    isWatching = 0
    story.style.height = '300px';
    story.style.width = '160px';
    wrapper.style.backgroundColor = '#fff';   
    btnClose.style.display = 'none';
    storyRight.style.display = 'none';
    storyLeft.style.display = 'none';
    console.log("close: "+index);
    authorName.style.fontSize = '10px';
    content.style.display = 'none';
    index = 0;
    
}

wrapper.onclick = function() {
    isWatching = 0
    story.style.height = '300px';
    story.style.width = '160px';
    wrapper.style.backgroundColor = '#fff';
    btnClose.style.display = 'none';
    storyRight.style.display = 'none';
    storyLeft.style.display = 'none';
    authorName.style.fontSize = '10px';
    content.style.display = 'none';
    console.log("close: "+index);
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
    content.textContent = stories[index%num].text;
    // storyLeft.style.background = "url(" + stories[leftIndex%num].url + ") top center / cover no-repeat";
    // titleLeft.textContent = stories[leftIndex%num].author;
    // avatarLeft.src = stories[leftIndex%num].url;

    // storyRight.style.background = "url(" + stories[rightIndex%num].url + ") top center / cover no-repeat";
    // titleRight.textContent = stories[rightIndex%num].author;
    // avatarRight.src = stories[rightIndex%num].url;



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
    content.textContent = stories[index%num].text;

    // storyLeft.style.background = "url(" + stories[leftIndex%num].url + ") top center / cover no-repeat";
    // titleLeft.textContent = stories[leftIndex%num].author;
    // avatarLeft.src = stories[leftIndex%num].url;

    // storyRight.style.background = "url(" + stories[rightIndex%num].url + ") top center / cover no-repeat";
    // titleRight.textContent = stories[rightIndex%num].author;
    // avatarRight.src = stories[rightIndex%num].url;

    // timeLine.style.display = 'block';
    
}

function start() {
    let num = stories.length;
    let leftIndex = num - 1;
    let rightIndex = index + 1;
    
    

    authorName.textContent = stories[index%num].author;
    story.style.background = "url(" + stories[index%num].url + ") top center / cover no-repeat";
    authorImg.src = stories[index%num].url;
    content.textContent = stories[index%num].text;

    // storyLeft.style.background = "url(" + stories[leftIndex%num].url + ") top center / cover no-repeat";
    // titleLeft.textContent = stories[leftIndex%num].author;
    // avatarLeft.src = stories[leftIndex%num].url;

    // storyRight.style.background = "url(" + stories[rightIndex%num].url + ") top center / cover no-repeat";
    // titleRight.textContent = stories[rightIndex%num].author;
    // avatarRight.src = stories[rightIndex%num].url;

    
}

start();