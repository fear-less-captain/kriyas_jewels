import { Component } from '@angular/core';

interface Category {
  name: string;
  slug: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

  categories: Category[] = [
    {
      name: 'BANGLES',
      slug: 'bangles',
      image: '/images/jewelry/categories/bangles.jpg'
    },
    {
      name: 'EARRINGS',
      slug: 'earrings',
      image: '/images/jewelry/categories/earrings.jpg'
    },
    {
      name: 'NECKLACES',
      slug: 'necklaces',
      image: '/images/jewelry/categories/necklaces.jpg'
    },
    {
      name: 'NECKLACE SETS',
      slug: 'necklace-sets',
      image: '/images/jewelry/categories/necklace-sets.jpg'
    },
    {
      name: 'PENDANTS',
      slug: 'pendants',
      image: '/images/jewelry/categories/pendants.jpg'
    },
    {
      name: 'GOD JEWELLERY',
      slug: 'god-jewellery',
      image: '/images/jewelry/categories/god-jewellery.jpg'
    }
  ];


  enquireNow(): void {

    const message = encodeURIComponent(
      'Hello Kriyash Jewels, I would like to enquire about your jewellery collection.'
    );

    window.open(
      'https://wa.me/919XXXXXXXXX?text=' + message,
      '_blank'
    );
  }


  exploreCategory(category: Category): void {

    console.log(
      'Selected category:',
      category.name
    );

  }

}