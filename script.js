const ctaConEle = document.querySelector('.js-cta-grid-content');
const ctaConEle2 = document.querySelector('.js-cta-grid-content2');
const ctaConEle3 = document.querySelector('.js-cta-grid-content3');
const ctaImgEle1 = document.querySelector('.js-cta-img-1');
const ctaImgEle2 = document.querySelector('.js-cta-img-2');
const ctaImgEle3 = document.querySelector('.js-cta-img-3');

ctaConEle.addEventListener('mouseenter', () => {
    ctaImgEle1.src="images/plan1_hover.png"
  });
ctaConEle.addEventListener('mouseleave', () => {
    ctaImgEle1.src="images/plan1.png"
  });
  ctaConEle2.addEventListener('mouseenter', () => {
    ctaImgEle2.src="images/plan2_hover.png"
  });
ctaConEle2.addEventListener('mouseleave', () => {
    ctaImgEle2.src="images/plan2.png"
  });
  ctaConEle3.addEventListener('mouseenter', () => {
    ctaImgEle3.src="images/plan3_hover.png"
  });
ctaConEle3.addEventListener('mouseleave', () => {
    ctaImgEle3.src="images/plan3.png"
  });
