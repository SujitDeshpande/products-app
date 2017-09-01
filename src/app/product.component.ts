import { Component } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    pageTitle = 'Mobiles you should not miss';
    imageUrl = 'assets/images/';
    showImages = true;
    userText = '';
    mobiles: any[] = [
        {
        'msId': 1,
        'name': 'Motorola',
        'model': 'MG',
        'releaseDate': 'March 19, 2016',
        'description': 'Motorola Rocks.',
        'price': 10000,
        'rating': 3.2,
        'image': 'moto.jpg'
    },
    {
        'msId': 2,
        'name': 'Lenovo',
        'model': 'K6 Power',
        'releaseDate': 'March 18, 2016',
        'description': 'Lenova Super',
        'price': 20000,
        'rating': 4.2,
        'image': 'lenovo1.jpg'
    }
    ];

    displayMobiles(): void {
        console.log('Control the visibility of Images here');
        this.showImages = !this.showImages;
    }
}
