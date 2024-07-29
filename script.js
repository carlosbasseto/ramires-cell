document.addEventListener('DOMContentLoaded', function() {
  const productFilter = document.getElementById('product-filter');
  const caseSubfilterContainer = document.getElementById('case-subfilter-container');
  const caseSubfilter = document.getElementById('case-subfilter');
  const chargerSubfilterContainer = document.getElementById('charger-subfilter-container');
  const chargerSubfilter = document.getElementById('charger-subfilter');
  const products = document.querySelectorAll('.product');

  function filterProducts() {
      const filterValue = productFilter.value;
      const subfilterValue = 
          filterValue === 'case' ? caseSubfilter.value :
          filterValue === 'charger' ? chargerSubfilter.value : 'all';

      products.forEach(product => {
          if (filterValue === 'all') {
              product.style.display = 'block';
          } else {
              if (subfilterValue === 'all') {
                  product.style.display = product.classList.contains(filterValue) ? 'block' : 'none';
              } else {
                  product.style.display = product.classList.contains(filterValue) && product.classList.contains(subfilterValue) ? 'block' : 'none';
              }
          }
      });
  }

  productFilter.addEventListener('change', function() {
      caseSubfilterContainer.style.display = 'none';
      chargerSubfilterContainer.style.display = 'none';

      if (productFilter.value === 'case') {
          caseSubfilterContainer.style.display = 'block';
      } else if (productFilter.value === 'charger') {
          chargerSubfilterContainer.style.display = 'block';
      }
      filterProducts();
  });

  caseSubfilter.addEventListener('change', filterProducts);
  chargerSubfilter.addEventListener('change', filterProducts);

  // Initial filter
  filterProducts();
});
