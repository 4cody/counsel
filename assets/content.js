const boxs = document.querySelectorAll('.service-card');

const ch = document.querySelector('#content-heading');
const ct = document.querySelector('#content-text');

//  html elements
let b1 = boxs[0];
let b2 = boxs[1];
let b3 = boxs[2];

//  css class's with position styling
const p1 = 'p1';
const p2 = 'p2';
const p3 = 'p3';

// handle box click
const adjustPos = (e) => {
  const c = e.currentTarget;

  switch (c) {
    case b1:
      b1.classList.add(p1);
      b1.classList.remove(p2);
      b1.classList.remove(p3);
      b1.classList.add('service-focus');

      b2.classList.add(p2);
      b2.classList.remove(p1);
      b2.classList.remove(p3);
      b2.classList.remove('service-focus');

      b3.classList.add(p3);
      b3.classList.remove(p1);
      b3.classList.remove(p2);
      b3.classList.remove('service-focus');

      ch.innerHTML = 'Counseling for church';
      ct.innerHTML =
        'asgasgasgasgas gasgasgsagdasg Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, libero!';

      break;

    case b2:
      b1.classList.add(p3);
      b1.classList.remove(p1);
      b1.classList.remove(p2);
      b1.classList.remove('service-focus');

      b2.classList.add(p1);
      b2.classList.remove(p2);
      b2.classList.remove(p3);
      b2.classList.add('service-focus');

      b3.classList.add(p2);
      b3.classList.remove(p1);
      b3.classList.remove(p3);
      b3.classList.remove('service-focus');

      ch.innerHTML = 'Paperwork';
      ct.innerHTML =
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam porro impedit voluptas. Sint, excepturi? A asperiores vero dolorem. Suscipit nisi doloremque soluta aliquid enim ullam nobis pariatur ipsam amet cumque.';

      break;

    case b3:
      b1.classList.add(p2);
      b1.classList.remove(p1);
      b1.classList.remove(p3);
      b1.classList.remove('service-focus');

      b2.classList.add(p3);
      b2.classList.remove(p1);
      b2.classList.remove(p2);
      b2.classList.remove('service-focus');

      b3.classList.add(p1);
      b3.classList.remove(p2);
      b3.classList.remove(p3);
      b3.classList.add('service-focus');

      ch.innerHTML = 'something Else';
      ct.innerHTML =
        'amet consectetur adipisicing elit. Laboriosam porro impedit voluptas. Sint, excepturi? A asperiores vero dolorem. Sloremque soluta aliquid enim ullam nobis pariatur ipsam amet cumque.';

      break;

    default:
      console.log('something broke');
      break;
  }
};

//  initial positioning
b1.classList.add('service-focus');
b1.classList.add(p1);
b2.classList.add(p2);
b3.classList.add(p3);

ch.innerHTML = 'Counseling for church';
ct.innerHTML =
  'asgasgasgasgas gasgasgsagdasg Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, libero!';

boxs.forEach((b) => {
  b.addEventListener('click', adjustPos);
});
