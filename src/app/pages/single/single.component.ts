import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss'
})
export class SingleComponent {
data: any;

constructor(private activated:ActivatedRoute){
}
states=[{
  "id": 1,
  "name": "Andhra Pradesh",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/varaha-lakshmi-narasimha-temple-buddhist-complex-visakhapatnam-andhra-pradesh-1-attr-hero?qlt=82&ts=1726744344834",
  "text":"Andhra Pradesh, located in the southeastern corner of India, is widely revered for its diverse cultural history and exquisite cuisine.due to its fertile Krishna and Godavari river basins where high yielding rice crops flourish, Andhra Pradesh features several notable heritage sites like ancient Amaravati with Buddhist monuments; Lord Veerabhadra Temple at Lepakshi known for stunning Vijayanagara architecture including an iconic hanging pillar; as well as other heritage sites within its borders - just two among many more!",
  "image2":"https://wheremaps.com/wp-content/uploads/2023/06/Andhra_Pradesh_districts_2022-scaled.jpg"
},
{
  "id": 3,
  "name": "Assam",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/jagannath-temple-dibrugarh-assam-3-attr-hero?qlt=82&ts=1726741595995",
  "text":"Amidst the northeastern corner of India, Assam emerges as a mesmerising place known for nature's wonders and cultural splendours. This enchanting state,blessed by the meandering Brahmaputra River and cocooned by lush green landscapes, holds a unique allure. Assam, with its rich biodiversity,iconic tea plantations  and vibrant traditions, beckons you to explore its mystical rivers, dense forests, and diverse cultural mosaic. Assam offers a unique blend of natural beauty, cultural richness, and historical intrigue, making it a must-visit destination for travelers exploring Northeast India.",
  "image2":"https://cdn.upsccolorfullnotes.com/q:i/r:0/wp:1/w:1330/u:https://upsccolorfullnotes.com/wp-content/uploads/2022/12/Assam-Map.jpg"
},
{
  "id": 4,
  "name": "Bihar",
  "image":"https://s7ap1.scene7.com/is/image/incredibleindia/ruins-of-nalanda-state-hero1?qlt=82&ts=1726739922628",
  "text":"In the heart of India, the state of Bihar beckons travellers with its history, spirituality, and natural beauty. This ancient land is the birthplace of two of the world's major religions, Buddhism and Jainism, offering pilgrims and history enthusiasts an unparalleled journey through time. From the grandeur of Nalanda University, one of the world's earliest centres of learning, to the sacred Ganges River that washes away sins along its ghats in places like Patna and Bodh Gaya, Bihar is a place of inner serenity.",
  "image2":"https://www.mapsofindia.com/maps/bihar/bihar-main-map.jpg"
},
{
  "id": 5,
  "name": "Chhattisgarh",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-chitrakote-jagdalpur-city-hero?qlt=82&ts=1726738436494",
  "text":"Chhattisgarh, located in central India, offers a captivating glimpse into ancient India through culture, art, religion, heritage of local and tribal communities and lush forests teeming with diverse flora and fauna - offering visitors an incredible glimpse of life from centuries past. As an emerging travel destination with untold potential. You'll discover gushing waterfalls, ancient temples and monuments steeped in history; lush forests full of species-rich fauna; vibrant culture echoing age-old traditions throughout this remarkable state.",
  "image2":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chhattisgarh_districts_map.svg/1635px-Chhattisgarh_districts_map.svg.png"
},
{
  "id": 6,
  "name": "Goa",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/baga-beach-goa?qlt=82&ts=1726735656599",
  "text":"Ah, Goa! The very name conjures up images of sun-kissed beaches, swaying palm trees, and a laid-back vibe that is as contagious as a beachside melody. Let's dive into this coastal paradise and explore its magic.",
  "image2":"https://rukminim2.flixcart.com/image/850/1000/kyhlfgw0/poster/v/z/x/small-goa-map-poster-multicolor-photo-paper-print-12-inch-x-18-original-imagapewmxhyf4f8.jpeg?q=90&crop=false"
},
{
  "id": 7,
  "name": "Gujarat",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/rukmini-devi-temple-city-hero?qlt=82&ts=1726734858314",
  "text":"Welcome to the vibrant state of Gujarat, where the past and present dance in harmony, and every corner whispers tales of bygone eras and vibrant traditions. Extending gracefully into the Arabian Sea, and boasting a sprawling coastline that spans 1600 kilometres, Gujarat proudly stands as the home state of Mahatma Gandhi, Father of the Nation.",
  "image2":"https://diligentias.com/wp-content/uploads/2019/05/gujarat.png"
},
{
  "id": 8,
  "name": "Haryana",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/baoli-ghaus-ali-shah-gurugram-haryana-city-3-hero?qlt=82&ts=1726732785315",
  "text":"The term 'Haryana' originates from two Sanskrit words, 'Hari,' signifying God, and 'ayana,' translating to home. It epitomises the contemporary face of India, embracing progress while staying deeply rooted in its rich cultural heritage. Today, this state stands as one of the most prosperous and economically advanced regions in South Asia. Encompassing a diverse spectrum of landscapes, Haryana’s splendid archaeological treasures and thriving arts and cultural scene serves as a testament to preserving the legacies of the past while ardently embracing a forward-looking vision.",
  "image2":"https://www.mapsofindia.com/maps/haryana/haryana-map.jpg"
},
{
  "id": 9,
  "name": "Himachal Pradesh",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/hidimba-temple-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726730676784",
  "text":"In the heart of the majestic western Himalayas, revered as the divine abode of numerous Gods and Goddesses. Throughout the state, one can discover an enchanting fusion of stone and wood temples, each narrating a unique tale of spirituality and devotion. The culture of Himachal is woven with intricate traditions and celebrations, rendering it a truly unparalleled destination. Embraced by mysterious valleys, formidable cliffs, ancient glaciers, and towering pine forests, Himachal embodies a symphony of nature's grandeur. Its rivers and diverse flora and fauna add further depth to this splendid melody",
  "image2":"https://www.mapsofindia.com/maps/himachalpradesh/himachal-pradesh-map.jpg"
},
{
  "id": 10,
  "name": "Jharkhand",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-deori-temple-ranchi-jharkhand-deori-mandir-city-hero?qlt=82&ts=1726723880071",
  "text":"Jharkhand, a land of majestic mountains, lush forests, and cascading waterfalls, offers an unparalleled opportunity to connect with unspoiled nature. But Jharkhand is not just about its breathtaking scenery, it is also home to some of the prominent museums, temples, and wildlife sanctuaries. As a state that emerged from Bihar nearly two decades ago, Jharkhand has forged its own path, marked by a fascinating history, diverse culture, and the cherished simplicity of its tribal communities. This unique blend of elements makes Jharkhand an enticing destination for explorers and nature enthusiasts alike.",
  "image2":"https://lotusarise.com/wp-content/uploads/2024/01/Jharkhand-Physical-Map.png"
},
{
  "id": 11,
  "name": "Karnataka",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/spirituality-murudeshwar-temple-gokarna1?qlt=82&ts=1726720935970jpg"
},
{
  "id": 12,
  "name": "Kerala",
  "image": "https://i0.wp.com/exploreindia.tv/wp-content/uploads/sunset-kumarakom-kerala-india.jpg?ssl=1",
  "text":"",
  "image2":""
},
{
  "id": 13,
  "name": "Madhya Pradesh",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/gwalior-fort-gwalior-madhya-pradesh-city-1-hero?qlt=82&ts=1726675024634"
},
{
  "id": 14,
  "name": "Maharashtra",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/kopeshwar-temple-kolhapur-maharashtra-hero?qlt=82&ts=1726668992343"
},
{
  "id": 15,
  "name": "Manipur",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-manipur-state-museum-state-hero?qlt=82&ts=1726666507852"
},
{
  "id": 16,
  "name": "Meghalaya",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/double-decker-living-root-bridge-cherrapunjee-meghalaya-1-attr-hero?qlt=82&ts=1727354895991"
},
{
  "id": 17,
  "name": "Mizoram",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/champhai-churches-champhai-mizoram-2-attr-hero?qlt=82&ts=1726674796123"
},
{
  "id": 18,
  "name": "Nagaland",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/khonoma-village-kohima-nagaland-1-attr-hero?qlt=82&ts=1727012456749"
},
{
  "id": 19,
  "name": "Odisha",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1726663559461"
},
{
  "id": 20,
  "name": "Punjab",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/golden-temple-punjab-hero?qlt=82&ts=1726662363452"
},
{
  "id": 21,
  "name": "Rajasthan",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-umaid-bhavan-jodhpur-rajasthan-city-hero?qlt=82&ts=1726661010066",
  "text":"",
  "image2":""
},
{
  "id": 22,
  "name": "Sikkim",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/gurudongmar-lake-mangan-sikkim-hero-hs?qlt=82&ts=1726655864214"
},
{
  "id": 23,
  "name": "Tamil Nadu",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-meenakshi-amman-temple-madurai-tamil-nadu-attr-hero?qlt=82&ts=1726654442664"
},
{
  "id": 24,
  "name": "Telangana",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar_hyderabad_telangana-1-city-hero?qlt=82&ts=1726653248112"
},
{
  "id": 25,
  "name": "Tripura",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/rudrasagar-lake-melaghar-2-attr-hero?qlt=82&ts=1726651019295"
},
{
  "id": 26,
  "name": "Uttar Pradesh",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/ram-janmaboomi-ayodhya-uttar%20pradesh-1?qlt=82&ts=1726649833165"
},
{
  "id": 27,
  "name": "Uttarakhand",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/badrinath-temple-uttarakhand-state-hero?qlt=82&ts=1726647031134"
},
{
  "id": 28,
  "name": "West Bengal",
  "image": "https://s7ap1.scene7.com/is/image/incredibleindia/lord-buddha-statue-2-kalimpong-wb-city-hero?qlt=82&ts=1726645084728"
}

]

ngOnInit(){
  let id=this.activated.snapshot.paramMap.get("id");
  this.data = this.states.find(states=>states.id==Number(id));

}
}
