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

function closeDetails() {
    const details = document.getElementById('details');
    details.style.display = 'none';
}

// Add event listeners to toggle dropdowns
const menus = document.querySelectorAll('.menu');

menus.forEach(menu => {
    menu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        const dropdown = menu.querySelector('.dropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            closeAllDropdowns(); // Close other dropdowns
            dropdown.style.display = 'block';
        }
    });
});

// Close dropdowns when clicking outside
window.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
        closeAllDropdowns();
    }
});

function closeAllDropdowns() {
    menus.forEach(menu => {
        const dropdown = menu.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    });


}
