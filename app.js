const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Error with ${selector}`);
};

const selectAllElement = (selector) => {
  const elements = document.querySelectorAll(selector);
  if (elements) return elements;
  throw new Error(`Error with ${selector}`);
};

const sections = selectAllElement(".section");
const controls = selectAllElement(".controls");
const controlBtns = selectAllElement(".control");
const body = document.body;

function pageTranform() {
  // for (let i = 0; i < controlBtns.length; i++) {
  //   controlBtns[i].addEventListener("click", function () {
  //     controlBtns.forEach((i) => {
  //       i.classList.remove("active-btn");
  //     });
  //     console.log("c");
  //     this.classList.add("active-btn");
  //   });
  //   // console.log(controlBtn[i]);
  // }

  // controlBtns.forEach((btn) => {
  //   btn.addEventListener("click", function () {
  //     const activeBtn = selectElement(".active-btn");
  //     activeBtn.classList.remove("active-btn");
  //     this.classList.add("active-btn");
  //   });
  // });
  // change section
  body.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      controlBtns.forEach((btn) => {
        btn.classList.remove("active-btn");
      });
      e.target.classList.add("active-btn");
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const selectedSection = selectElement(`#${id}`);
      selectedSection.classList.add("active");
    }
  });
}

pageTranform();

// theme btn

const themeBtn = selectElement(".theme-btn");
themeBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
});
