import promptSync from 'prompt-sync';
import bands from './bandsDiff.json';
const prompt = promptSync();  
type MusicBand = {
  name: string;
  genre: string;
  members: BandMember[];
  originCountry: string;
  foundedYear: number;
  isStillActive: boolean;
  albums: Album[];
};

type BandMember = {
  name: string;
  instrument: string;
  birthYear: number;
  joinedYear: number;
  leftYear?: number; 
};

type Album = {
  title: string;
  releaseYear: number;
  tracks: Track[];
};

type Track = {
  title: string;
  durationInSeconds: number;
};
// 1
const albumCount = bands.reduce((element, bands) => {
  return element + bands.albums.length;
}, 0);  
console.log(`Total number of albums: ${albumCount}`);

// 2
const musicTime: { bandName: string; track: Track }[] = [];
bands.forEach((band: MusicBand) => {
  band.albums.forEach((album: Album) => {
    album.tracks.forEach((track: Track) => {
      if (track.durationInSeconds > 250) {
        musicTime.push({ bandName: band.name, track });
      }
    });
  });
});
musicTime.forEach(({ bandName, track }) => {
  console.log(`${bandName} ${track.title} X ${Math.trunc(track.durationInSeconds / 60)} Y ${track.durationInSeconds % 60}`);
});
// 3
const countryMembers: { [country: string]: BandMember[] } = {};
bands.forEach((band: MusicBand) => {
  band.members.forEach((member: BandMember) => {
    if (!countryMembers[band.originCountry]) {
      countryMembers[band.originCountry] = [];
    }
    countryMembers[band.originCountry].push(member);
  });
});
console.log('Members by country:');
for (const country in countryMembers) {
  console.log(`${country}:`);
  countryMembers[country].forEach((member: BandMember) => {
    console.log(`- ${member.name} `);
  });
}
//4 
console.log(bands.reduce((acc, band) => {
  return acc + band.members.length;
}, 0));
// 5
  const guitarMembers = bands.flatMap((band: MusicBand) => {
    return band.members.filter((member: BandMember) => member.instrument === 'Guitar');
  } );
const guitarMembers1: { name: string; age: number }[] = guitarMembers.map((member: BandMember) => {
  const currentYear = new Date().getFullYear();
  return { name: member.name, age: currentYear - member.birthYear };
});
  guitarMembers1.sort((a, b) => b.age - a.age);
  console.log(guitarMembers1);

// 6 SKIP


// n1-1 
// Чому у нас в класі може бути лише 1 конструктор?
class Car {
  brand: string;
  year: number;
  private mileage: number;
  private gasolinCapacity: number;
  private fuelConsumption: number;
  private _fuelUsed: number = 0;
  constructor(brand: string, year: number, fuelConsumption: number){
    this.brand = brand;
    this.year = year;
    this.fuelConsumption = fuelConsumption;
    this.gasolinCapacity = this.gasolinCapacity ?? 0;
    this.mileage = 0;
  }
  drive(km: number): void {
        const fuelUsed =(km * this.fuelConsumption) / 100;
        if (fuelUsed > this.gasolinCapacity) {
            throw new Error("Not enough fuel to drive the distance");
        }
    }
  getMileage() : number{
        return this.mileage;
    }

  getGasolinCapacity() : number{
        return this.gasolinCapacity;
    }

  setGasolinCapacity(gasolinCapacity: number){
         this.gasolinCapacity = gasolinCapacity;
    }
    setgasolinCapacity(value: number) {
        if (value < 0) {
            throw new Error("Gasoline capacity cannot be negative");
        }
        this.gasolinCapacity = value;
    }
  
}
// n1-2
class Comment {
  author: string;
  verifiedPurchase: boolean;
  productInfo: string;
  commentDate: string; // можна Date, але на скріні це рядок , як я зрозумів
  rating: number;
  commentText: string;
  advantage: string;
  likes: number;
  dislikes: number;
  replies: string[]; 

  constructor(
    authorName: string,
    verifiedPurchase: boolean,
    productInfo: string,
    commentDate: string,
    rating: number,
    commentText: string,
    advantage: string,
    likes: number,
    dislikes: number,
    replies: string[]
  ) {
    this.author = authorName;
    this.verifiedPurchase = verifiedPurchase;
    this.productInfo = productInfo;
    this.commentDate = commentDate;
    this.rating = rating;
    this.commentText = commentText;
    this.advantage = advantage;
    this.likes = likes;
    this.dislikes = dislikes;
    this.replies = replies;
  }
}

