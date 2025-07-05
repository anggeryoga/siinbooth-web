import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Gerobak Warmindo Klasik',
    slug: 'gerobak-warmindo-jepara',
    price: 'Mulai 2.5 Juta',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Gerobak warmindo klasik dengan desain yang kuat dan tahan lama. Cocok untuk usaha warung mie instan dan minuman hangat.',
    features: [
      'Bahan kayu jati Jepara berkualitas',
      'Dilengkapi kompor dan peralatan masak',
      'Roda yang mudah didorong',
      'Kapasitas besar untuk stok barang',
      'Desain custom sesuai kebutuhan'
    ],
    category: 'warmindo'
  },
  {
    id: '2',
    name: 'Gerobak Kopi Kekinian',
    slug: 'gerobak-kopi-kekinian-jepara',
    price: 'Mulai 3.2 Juta',
    image: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Gerobak kopi modern dengan estetika yang menarik. Dilengkapi dengan alat seduh kopi dan display yang eye-catching.',
    features: [
      'Desain modern dan aesthetic',
      'Alat seduh kopi lengkap',
      'Display produk yang menarik',
      'Mudah dibersihkan',
      'Branding custom tersedia'
    ],
    category: 'kopi'
  },
  {
    id: '3',
    name: 'Gerobak Snack & Gorengan',
    slug: 'gerobak-snack-gorengan-jepara',
    price: 'Mulai 2.8 Juta',
    image: 'https://images.pexels.com/photos/5718653/pexels-photo-5718653.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Gerobak khusus untuk jualan snack dan gorengan dengan penggorengan terintegrasi dan display yang higienis.',
    features: [
      'Penggorengan built-in',
      'Display higienis untuk snack',
      'Ventilasi yang baik',
      'Mudah dibersihkan',
      'Tahan panas dan lembab'
    ],
    category: 'snack'
  },
  {
    id: '4',
    name: 'Gerobak Es & Minuman',
    slug: 'gerobak-es-minuman-jepara',
    price: 'Mulai 2.2 Juta',
    image: 'https://images.pexels.com/photos/1796879/pexels-photo-1796879.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Gerobak sempurna untuk usaha es dan minuman dengan cooler box terintegrasi dan display yang menarik.',
    features: [
      'Cooler box terintegrasi',
      'Sistem drainage yang baik',
      'Display botol yang rapi',
      'Mudah dipindahkan',
      'Tahan cuaca'
    ],
    category: 'minuman'
  },
  {
    id: '5',
    name: 'Gerobak Bakso & Mie Ayam',
    slug: 'gerobak-bakso-mie-ayam-jepara',
    price: 'Mulai 3.5 Juta',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Gerobak lengkap untuk usaha bakso dan mie ayam dengan kompor, panci, dan semua perlengkapan masak.',
    features: [
      'Kompor gas terintegrasi',
      'Panci dan peralatan masak',
      'Tempat bumbu dan sayuran',
      'Kursi lipat untuk pelanggan',
      'Tenda pelindung tersedia'
    ],
    category: 'makanan'
  }
];