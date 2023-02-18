const refs = {
  openBookRoomModalBtn: document.querySelector('[data-book-room-modal-open]'),
  openBookTableModalBtn: document.querySelector('[data-book-table-modal-open]'),
  openRoomPriceModalBtn: document.querySelector('[data-room-price-modal-open]'),

  closeBookRoomModalBtn: document.querySelector('[data-book-room-modal-close]'),
  closeBookTableModalBtn: document.querySelector(
    '[data-book-table-modal-close]'
  ),
  closeRoomPriceModalBtn: document.querySelector(
    '[data-room-price-modal-close]'
  ),

  bookRoomModal: document.querySelector('[data-book-room-modal]'),
  bookTableModal: document.querySelector('[data-book-table-modal]'),
  roomPriceModal: document.querySelector('[data-room-price-modal]'),
};

refs.openBookRoomModalBtn.addEventListener('click', toggleBookRoomModal);
refs.openBookTableModalBtn.addEventListener('click', toogleBookTableModal);
refs.openRoomPriceModalBtn.addEventListener('click', toogleRoomPriceModal);

refs.closeBookRoomModalBtn.addEventListener('click', toggleBookRoomModal);
refs.closeBookTableModalBtn.addEventListener('click', toogleBookTableModal);
refs.closeRoomPriceModalBtn.addEventListener('click', toogleRoomPriceModal);

refs.bookRoomModal.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    toggleBookRoomModal();
  }
});
refs.bookTableModal.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    toogleBookTableModal();
  }
});
refs.roomPriceModal.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    toogleRoomPriceModal();
  }
});

function toggleBookRoomModal() {
  document.body.classList.toggle('modal-open');
  refs.bookRoomModal.classList.toggle('is-hidden');
}
function toogleBookTableModal() {
  document.body.classList.toggle('modal-open');
  refs.bookTableModal.classList.toggle('is-hidden');
}
function toogleRoomPriceModal() {
  document.body.classList.toggle('modal-open');
  refs.roomPriceModal.classList.toggle('is-hidden');
}
