import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IItem, IItemData } from './models';

export const ELEMENT_DATA: IItem[] = [];

export function findComponent<T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}

export const dummyData: IItemData = {
  items: [
    {
      title: 'iPhone 6S Gold',
      description:
        "I am selling a new and unworn Gold iPhone 6 S. They gave me one at work and I don't need the one I bought. In the store you can find it for 749 euros and I sell it for 740. You can find the descriptions find it on the apple website. It's free.",
      price: '740',
      email: 'iphonemail@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
    },
    {
      title: 'Polaroid 635',
      description:
        'Classic Polaroid 635 camera. Photos are super color. In mint condition and great for collectors. Instax 20 film required to take photos. Size M.',
      price: '50',
      email: 'cameramail@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png',
    },
    {
      title: 'Hoss brand leather bag',
      description:
        'I am selling a large brown leather bag from the Hoss brand. I bought it two seasons ago. It is in perfect condition, it has always been kept in a cloth bag for its conservation. Original price of 400 euros. I am selling it for 250 because I hardly wear it anymore. It has several compartments inside.',
      price: '250',
      email: 'bagmail@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/bag.png',
    },
    {
      title: "Daniel Wellington's Watch",
      description:
        'Daniel Wellington brand watch, only used for a month. Now they have given me another one that I like better and it is very similar; that is why I am selling it. Its price in store is 149 but I am selling it for 100 euros. It is with the white dial and the brown leather strap. ',
      price: '100',
      email: 'watchmail@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/watch.png',
    },
    {
      title: 'Vintage American Car',
      description:
        'Brown vintage American car. Engine needs replacing but other than that everything works fine. Light leather interior. Great for collectors',
      price: '210000',
      email: 'carmail@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/car.png',
    },
    {
      title: 'Barbecue',
      description:
        'Barbecue in good condition. I have used it a few times and it is almost new. Ideal for parties and celebrations',
      price: '120',
      email: 'barbecue@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png',
    },
    {
      title: 'Genuine Leather Sofa',
      description:
        'I am selling a black leather sofa. It has obvious signs of use, hence the price. It is very comfortable and beautiful',
      price: '75',
      email: 'sofa@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/sofa.png',
    },
    {
      title: 'Restored Vespa',
      description:
        'Restored and very neat, with original parts and repainted once carmine red. Only serious offers accepted',
      price: '1990',
      email: 'vespa@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/vespa.png',
    },
    {
      title: 'Mixer',
      description:
        "It's brand new (I haven't taken it out of the box). It was given to me but I don't want it",
      price: '90',
      email: 'mixer@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/mixer.png',
    },
    {
      title: 'Relocations',
      description:
        "It's brand new (I haven't taken it out of the box). It was given to me but I don't want it",
      price: '90',
      email: 'moves@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/moves.png',
    },
    {
      title: 'Washing machine',
      description:
        'I am selling a washing machine that I bought 1 year ago. I am changing my apartment and I urgently need to sell it',
      price: '250',
      email: 'washer@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/washer.png',
    },
    {
      title: '43-inch TV',
      description:
        "43-inch TV. Works perfectly. I don't have the stand. Price negotiable",
      price: '400',
      email: 'tv@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/tv.png',
    },
    {
      title: 'Apartment in Clot',
      description:
        '60m2, in the heart of the Clot market. Very cozy apartment, renovated. Ideal for couples',
      price: '288000',
      email: 'flat@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/flat.png',
    },
    {
      title: 'Vintage turntable',
      description:
        'Very well taken care of! I give away the LP records you see in the photos',
      price: '325',
      email: 'turntable@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/turntable.png',
    },
    {
      title: 'Green Fridge',
      description: "Little one, with a green Chevrolet, very 60's!",
      price: '125',
      email: 'fridge@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/fridge.png',
    },
    {
      title: 'SLR camera',
      description:
        "I am selling it because I don't use it. I don't have any accessories like the bag or lenses.",
      price: '240',
      email: 'analogue@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/analogue.jpg',
    },
    {
      title: 'Piano Lessons',
      description:
        'I give piano lessons to individuals. All ages. I have been playing the piano for more than 20 years.',
      price: '5',
      email: 'piano@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/piano.jpg',
    },
    {
      title: 'Office Supplies',
      description:
        'I sell a lot of office supplies, such as pens, pencils, post-its, etc. Ask for more info',
      price: '12',
      email: 'pen@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/pen.jpg',
    },
    {
      title: '13-inch MacBook',
      description:
        'I am selling a Macbook because I got a new one. This one is used but in good condition',
      price: '600',
      email: 'mac@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/mac.jpg',
    },
    {
      title: 'Helmets',
      description:
        'Used helmets. They are not very good, but they are quite nice. Price negotiable',
      price: '20',
      email: 'headphones@wallapop.com',
      image:
        'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/headphones.jpg',
    },
  ],
};
