(() => {
    const refs = {

      openModalBtn1: document.querySelector('[data-modal-open1]'),
      closeModalBtn1: document.querySelector('[data-modal-close1]'),
      modal1: document.querySelector('[data-modal1]'),

      openModalBtn2: document.querySelector('[data-modal-open2]'),
      closeModalBtn2: document.querySelector('[data-modal-close2]'),
      modal2: document.querySelector('[data-modal2]'),

      openModalBtn3: document.querySelector('[data-modal-open3]'),
      closeModalBtn3: document.querySelector('[data-modal-close3]'),
      modal3: document.querySelector('[data-modal3]'),

      openModalBtn4: document.querySelector('[data-modal-open4]'),
      closeModalBtn4: document.querySelector('[data-modal-close4]'),
      modal4: document.querySelector('[data-modal4]'),


      openModalBtn44: document.querySelector('[data-modal-open44]'),
      closeModalBtn44: document.querySelector('[data-modal-close44]'),
      modal44: document.querySelector('[data-modal44]'),

      openModalBtn5: document.querySelector('[data-modal-open5]'),
      closeModalBtn5: document.querySelector('[data-modal-close5]'),
      modal5: document.querySelector('[data-modal5]'),

      openModalBtn55: document.querySelector('[data-modal-open55]'),
      closeModalBtn55: document.querySelector('[data-modal-close55]'),
      modal55: document.querySelector('[data-modal55]'),


    };
    refs.openModalBtn1.addEventListener('click', toggleModal1);
    refs.closeModalBtn1.addEventListener('click', toggleModal1);

    refs.openModalBtn2.addEventListener('click', toggleModal2);
    refs.closeModalBtn2.addEventListener('click', toggleModal2);

    refs.openModalBtn3.addEventListener('click', toggleModal3);
    refs.closeModalBtn3.addEventListener('click', toggleModal3);


    refs.openModalBtn4.addEventListener('click', toggleModal4);
    refs.closeModalBtn4.addEventListener('click', toggleModal4);

    refs.openModalBtn44.addEventListener('click', toggleModal44);
    refs.closeModalBtn44.addEventListener('click', toggleModal44);


    refs.openModalBtn55.addEventListener('click', toggleModal55);
    refs.closeModalBtn55.addEventListener('click', toggleModal55);

    refs.openModalBtn5.addEventListener('click', toggleModal5);
    refs.closeModalBtn5.addEventListener('click', toggleModal5);


    function toggleModal1() {
      refs.modal1.classList.toggle('is-hidden1__popup');
    }

    function toggleModal2() {
      refs.modal2.classList.toggle('is-hidden2');
    }

    function toggleModal3() {
      refs.modal3.classList.toggle('is-hidden3');
    }

    function toggleModal4() {
      refs.modal4.classList.toggle('is-hidden4');
    }


    function toggleModal44() {
      refs.modal44.classList.toggle('is-hidden4__popup');
    }

    function toggleModal5() {
      refs.modal5.classList.toggle('is-hidden5');
    }

    function toggleModal55() {
      refs.modal55.classList.toggle('is-hidden5__popup');
    }

  })();

    const year = document.getElementById("year");
    year.textContent = new Date().getFullYear();
  