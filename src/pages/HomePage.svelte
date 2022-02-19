<script lang="ts">
  import ProductsRow from '../components/organisms/ProductsRow.svelte';

  let products = [
    {
      id: '01',
      imageUrl: 'https://via.placeholder.com/400',
      name: 'Organic Bananas',
      amount: '7pcs, Priceg',
      price: '$4.99',
    },
    {
      id: '02',
      imageUrl: 'https://via.placeholder.com/400',
      name: 'Red Apple',
      amount: '1kg, Priceg',
      price: '$4.99',
    },
    {
      id: '03',
      imageUrl: 'https://via.placeholder.com/400',
      name: 'Bell Pepper Red',
      amount: '1kg, Priceg',
      price: '$4.99',
    },
    {
      id: '04',
      imageUrl: 'https://via.placeholder.com/400',
      name: 'Ginger',
      amount: '250gm, Priceg',
      price: '$4.99',
    },
    {
      id: '05',
      imageUrl: 'https://via.placeholder.com/400',
      name: 'Beef Bone',
      amount: '1kg, Priceg',
      price: '$4.99',
    },
  ];
</script>

<div>
  <ProductsRow {products} on:onAdd={(data) => console.log(data.detail)} />
</div>
