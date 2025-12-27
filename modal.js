const Modal = {
    alert: (title, message) => {
        return new Promise((resolve) => {
            const modal = document.getElementById('globalModal');
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalMsg').innerText = message;
            const btnContainer = document.getElementById('modalBtns');
            btnContainer.innerHTML = `<button class="btn-pill btn-black" style="width:100%">확인</button>`;
            btnContainer.onclick = () => {
                modal.classList.remove('active');
                setTimeout(() => { modal.style.display = 'none'; resolve(); }, 300);
            };
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
        });
    },
    confirm: (title, message) => {
        return new Promise((resolve) => {
            const modal = document.getElementById('globalModal');
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalMsg').innerText = message;
            const btnContainer = document.getElementById('modalBtns');
            btnContainer.innerHTML = `
                <button class="btn-pill" id="modalCancel" style="flex:1">취소</button>
                <button class="btn-pill btn-black" id="modalConfirm" style="flex:1">확인</button>
            `;
            document.getElementById('modalCancel').onclick = () => {
                modal.classList.remove('active');
                setTimeout(() => { modal.style.display = 'none'; resolve(false); }, 300);
            };
            document.getElementById('modalConfirm').onclick = () => {
                modal.classList.remove('active');
                setTimeout(() => { modal.style.display = 'none'; resolve(true); }, 300);
            };
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
        });
    }
};

document.body.insertAdjacentHTML('beforeend', `
<div id="globalModal" class="custom-modal">
    <div class="modal-box">
        <h3 id="modalTitle"></h3>
        <p id="modalMsg"></p>
        <div id="modalBtns" class="modal-btns"></div>
    </div>
</div>`);