const fullscreenBtn = document.getElementById('fullscreenBtn');

// 检查当前是否处于全屏状态
function isFullscreen() {
    return document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;
}

// 退出全屏
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// 进入全屏
function enterFullscreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

// 切换全屏
function toggleFullscreen() {
    if (isFullscreen()) {
        exitFullscreen();
        fullscreenBtn.textContent = '进入全屏';
    } else {
        enterFullscreen();
        fullscreenBtn.textContent = '退出全屏';
    }
}

// 监听全屏变化事件
document.addEventListener('fullscreenchange', function () {
    fullscreenBtn.textContent = isFullscreen() ? '退出全屏' : '进入全屏';
});

document.addEventListener('webkitfullscreenchange', function () {
    fullscreenBtn.textContent = isFullscreen() ? '退出全屏' : '进入全屏';
});

document.addEventListener('mozfullscreenchange', function () {
    fullscreenBtn.textContent = isFullscreen() ? '退出全屏' : '进入全屏';
});

document.addEventListener('MSFullscreenChange', function () {
    fullscreenBtn.textContent = isFullscreen() ? '退出全屏' : '进入全屏';
});

fullscreenBtn.addEventListener('click', toggleFullscreen);