document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleSubmit);

  // const formSelectOption = document.querySelector('#new-item-form');
  // formSelectOption.addEventListener('change', handleSelect);
});

const handleSubmit = function (event) {
  event.preventDefault();
  // console.log("Submitting:", event);
  const result = document.querySelector('#reading-list')
  result.textContent = `Book Title: ${event.target.title.value} and Author Name: ${event.target.author.value
} and Category: ${event.target.category.value}`
}
// const handleSelect = function(event) {
//   // console.log("Submitting", event)
//   const resultCategory = document.querySelector('#reading-list')
//   resultCategory.textContent = event.target.value





// const handleTitleForm = function(event) {
//   event.preventDefault()
//   const resultParagraph = document.querySelector('#title')
//   resultParargraph.textContent = event.target.title.value;
  // console.log(event)
