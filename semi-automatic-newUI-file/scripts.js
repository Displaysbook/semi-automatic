// 显示工具详情
function showDetails(tool) {
    const details = document.getElementById('details');
    details.style.display = 'block';
    switch(tool) {
        case 'move':
            details.innerHTML = '<span class="close-btn" onclick="closeDetails()">X</span><h3>移动工具</h3><p>这里是移动工具的详情设置。</p>';
            break;
        case 'select':
            details.innerHTML = '<span class="close-btn" onclick="closeDetails()">X</span><h3>框选工具</h3><p>这里是框选工具的详情设置。</p>';
            break;
        case 'lasso':
            details.innerHTML = '<span class="close-btn" onclick="closeDetails()">X</span><h3>套索工具</h3><p>这里是套索工具的详情设置。</p>';
            break;
        case 'color':
            details.innerHTML = '<span class="close-btn" onclick="closeDetails()">X</span><h3>取色工具</h3><p>这里是取色工具的详情设置。</p>';
            break;
        case 'text':
            details.innerHTML = '<span class="close-btn" onclick="closeDetails()">X</span><h3>文字工具</h3><p>这里是文字工具的详情设置。</p>';
            break;
        case 'pan':
            details.innerHTML = '<span class="close-btn" onclick="closeDetails()">X</span><h3>平移工具</h3><p>这里是平移工具的详情设置。</p>';
            break;
        case 'canvas':
            details.innerHTML = '<span class="close-btn" onclick="closeDetails()">X</span><h3>画布工具</h3><p>这里是画布工具的详情设置。</p>';
            break;
        case 'rotate':
            details.innerHTML = '<span class="close-btn" onclick="closeDetails()">X</span><h3>旋转工具</h3><p>这里是旋转工具的详情设置。</p>';
            break;
        case 'brush':
            details.innerHTML = '<span class="close-btn" onclick="closeDetails()">X</span><h3>画笔工具</h3><p>这里是画笔工具的详情设置。</p>';
            break;
        default:
            details.innerHTML = '';
    }
}

// 关闭工具详情
function closeDetails() {
    const details = document.getElementById('details');
    details.style.display = 'none';
}

// 添加事件监听器以切换下拉菜单
const menus = document.querySelectorAll('.menu');

menus.forEach(menu => {
    menu.addEventListener('click', (event) => {
        event.stopPropagation(); // 防止事件冒泡
        const dropdown = menu.querySelector('.dropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            closeAllDropdowns(); // 关闭其他下拉菜单
            dropdown.style.display = 'block';
        }
    });
});

// 点击外部时关闭下拉菜单
window.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
        closeAllDropdowns();
    }
});

// 关闭所有下拉菜单
function closeAllDropdowns() {
    menus.forEach(menu => {
        const dropdown = menu.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    });
}

// 创建浮动GUI
function createCanvas() {
    // 检查 GUI 是否已经存在
    let gui = document.getElementById('floating-gui');
    if (!gui) {
        // 创建 GUI 元素
        gui = document.createElement('div');
        gui.id = 'floating-gui';
        
        // 设置 innerHTML
        gui.innerHTML = `
        <button onclick="document.getElementById('floating-gui').style.display = 'none';">关闭</button>
        `;

        // 添加到文档中
        document.body.appendChild(gui);
    }

    // 显示 GUI
    gui.style.display = 'block';
}

// 为创建画布链接添加事件监听器
document.getElementById('createCanvasLink').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止链接的默认行为
    createCanvas(); // 调用 createCanvas 函数
});
