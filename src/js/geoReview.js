import render from '../templates/formTemplate.hbs';



function createForm(coords) {
    const root = document.createElement('div');
    root.innerHTML = render();
    const reviewForm = root.querySelector('[data-role=review-form]');
    reviewForm.dataset.coords = JSON.stringify(coords);

    return root;
};



export {
    createForm
}
