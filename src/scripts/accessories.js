// Mobile popup
// let mobilePopupState = {
//   visibility: false
// };

// function toggleMobilePopup(state, mobilePopup) {
//   if (mobilePopupState.visibility) {
//     mobilePopup.classList.add('MobilePopup-opened');
//     document.body.style.overflow = 'hidden';
//   } else {
//     mobilePopup.classList.remove('MobilePopup-opened');
//     document.body.style.cssText = '';
//   }
// }

// function openMobilePopup(mobilePopupID) {
//   let mobilePopup = document.getElementById(mobilePopupID);

//   if (!mobilePopup) return;

//   let openedMobilePopup = document.querySelector('.MobilePopup-opened');

//   if (openedMobilePopup) {
//     closeMobilePopup(openedMobilePopup.id);
//   }

//   mobilePopupState.visibility = true;
//   window.history.pushState(mobilePopupState, null, "");
//   toggleMobilePopup(mobilePopupState, mobilePopup);
// }

// function closeMobilePopup(mobilePopupID) {
//   let mobilePopup = document.getElementById(mobilePopupID);

//   if (!mobilePopup) return;

//   mobilePopupState.visibility = false;
//   window.history.pushState(mobilePopupState, null, "");
//   toggleMobilePopup(mobilePopupState, mobilePopup);
// }

// document.addEventListener('click', function (e) {
//   let mobilePopupLink = e.target.closest('[data-action="openMobilePopup"]');

//   if (!mobilePopupLink) return;

//   let mobilePopupID = mobilePopupLink.getAttribute('href').slice(1);
//   openMobilePopup(mobilePopupID);

//   let mobilePopupTitle = mobilePopupLink.dataset.mobilePopupTitle;
//   if (mobilePopupTitle !== undefined) {
//     let mobilePopup = document.getElementById(mobilePopupID);
//     mobilePopup.querySelector('.MobilePopup_title').textContent = mobilePopupTitle;
//   }

//   e.preventDefault();
// });

// document.addEventListener('click', function (e) {
//   let closePopup = e.target.closest('[data-action="closeMobilePopup"]');

//   if (!closePopup) return;

//   let mobilePopupID;

//   if (closePopup.hasAttribute('href')) {
//     mobilePopupID = closePopup.getAttribute('href').slice(1);
//   }
//   if (closePopup.closest('.MobilePopup')) {
//     mobilePopupID = closePopup.closest('.MobilePopup').id;
//   }

//   console.log(closePopup);

//   window.history.back();
//   e.preventDefault();
// });

// document.addEventListener('click', function (e) {
//   let mobilePopupOverlay = e.target.closest('.MobilePopup_overlay');

//   if (!mobilePopupOverlay) return;

//   mobilePopupOverlay.closest('.MobilePopup').classList.remove('MobilePopup-opened');
//   document.body.style.cssText = '';
// });

// (function setDefaultMobilePopupState() {
//   window.history.replaceState(mobilePopupState, null, "");
//   toggleMobilePopup(mobilePopupState, document.querySelector('.MobilePopup'));
// })();

// window.addEventListener('popstate', function (e) {
//   if (e.state) mobilePopupState = e.state;

//   let openedMobilePopup = document.querySelector('.MobilePopup-opened');

//   if (!openedMobilePopup) return;

//   toggleMobilePopup(mobilePopupState, openedMobilePopup);
// });