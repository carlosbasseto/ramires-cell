document.addEventListener('DOMContentLoaded', function() {
    const productFilter = document.getElementById('product-filter');
    const caseSubfilterContainer = document.getElementById('case-subfilter-container');
    const caseSubfilter = document.getElementById('case-subfilter');
    const products = document.querySelectorAll('.product');

    function filterProducts() {
        const filterValue = productFilter.value;
        const subfilterValue = caseSubfilter.value;

        products.forEach(product => {
            if (filterValue === 'all') {
                product.style.display = 'block';
            } else if (filterValue === 'case') {
                if (subfilterValue === 'all') {
                    product.style.display = product.classList.contains('case') ? 'block' : 'none';
                } else {
                    product.style.display = product.classList.contains('case') && product.classList.contains(subfilterValue) ? 'block' : 'none';
                }
            } else {
                product.style.display = product.classList.contains(filterValue) ? 'block' : 'none';
            }
        });
    }

    productFilter.addEventListener('change', function() {
        if (productFilter.value === 'case') {
            caseSubfilterContainer.style.display = 'block';
        } else {
            caseSubfilterContainer.style.display = 'none';
        }
        filterProducts();
    });

    caseSubfilter.addEventListener('change', filterProducts);

    // Initial filter
    filterProducts();
});
