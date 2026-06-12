// 获取所有元素
const items = document.querySelectorAll('.guidance_text');

// 添加点击事件
items.forEach(item => {
    item.addEventListener('click', function () {
        // 直接修改颜色属性
        if (this.style.color === 'red') {
            this.style.color = 'black';
        } else {
            this.style.color = 'red';
        }
    });
});