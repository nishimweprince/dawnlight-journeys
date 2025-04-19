import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface GridItem {
  image: string;
  title: string;
  description: string;
}

interface ListContent {
  [key: string]: string;
}

type TabData = {
  id: string;
  title: string;
  type: 'grid' | 'list';
  content: GridItem[] | ListContent;
};

const wildlifeData: GridItem[] = [
  {
    image: "https://images.unsplash.com/photo-1516646255117-f9f933680173",
    title: "Golden monkey",
    description: "Golden monkeys are an endangered species. Endemic to the Virunga Mountains."
  },
  {
    image: "https://images.unsplash.com/photo-1551972873-b7e8754e8e26",
    title: "Leopard",
    description: "Mainly found in Akagera National Park. Roughly 15-20 are estimated to live in this region."
  },
  {
    image: "https://images.unsplash.com/photo-1562736179-ac58f589e90e",
    title: "Rwenzori turaco",
    description: "A beautiful, brightly coloured bird. Native to the Albertine Rift's montane forest."
  },
  {
    image: "https://images.unsplash.com/photo-1604847262091-9fc76d57d055",
    title: "Mountain gorilla",
    description: "Just over 1,000 remain, protected in the Virunga Massif."
  }
];

const habitatsData: GridItem[] = [
  {
    image: "https://images.unsplash.com/photo-1516646255117-f9f933680173",
    title: "Rainforest",
    description: "The mist-shrouded Bisate & Sabyinyo volcanoes."
  },
  {
    image: "https://images.unsplash.com/photo-1551972873-b7e8754e8e26",
    title: "Grassland",
    description: "Grasslands are typical of Akagera National Park."
  },
  {
    image: "https://images.unsplash.com/photo-1562736179-ac58f589e90e",
    title: "Moist woodland",
    description: "Swamps & small lakes flow from the Akagera River."
  }
];

const tabs: TabData[] = [
  {
    id: 'key-facts',
    title: 'KEY FACTS',
    type: 'list',
    content: {
      'POPULATION SIZE': '13.3 Million',
      'CURRENCY': 'Rwandan Franc (RFR)',
      'GEOGRAPHICAL SIZE': '26,340 km²',
      'BEST TIME TO GO': 'All year round',
      'LANGUAGE': 'Kinyarwanda, English, French'
    }
  },
  {
    id: 'habitats',
    title: 'HABITATS',
    type: 'grid',
    content: habitatsData
  },
  {
    id: 'wildlife',
    title: 'WILDLIFE',
    type: 'grid',
    content: wildlifeData
  },
  {
    id: 'weather',
    title: 'WEATHER',
    type: 'list',
    content: {
      'AVERAGE TEMP': '20°C - 28°C',
      'RAINY SEASON': 'Mar-May, Oct-Nov',
      'DRY SEASON': 'Jun-Sep, Dec-Feb',
      'ALTITUDE': '900m - 4,500m',
      'CLIMATE': 'Temperate Tropical'
    }
  }
];

const CountryInfoSlider = () => {
  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-heading text-6xl mb-6">Rwanda at a glance</h2>
          <p className="text-white/80 text-lg max-w-2xl">
            Going off the beaten track when on holiday comes with questions. When is the best season 
            to view wildlife in Rwanda? How cold does it get at night and what languages are spoken? 
            To help you prepare for your Rwanda safari, we have put together a few key facts to inspire 
            your adventurous spirit.
          </p>
        </div>

        <Tabs defaultValue="wildlife" className="w-full">
          <div className="flex items-center justify-between border-b border-white/20 mb-12">
            <TabsList className="bg-transparent border-none h-auto">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="text-sm tracking-widest px-6 pb-4 text-white/70 data-[state=active]:text-[#FF5C28] data-[state=active]:shadow-none relative"
                >
                  {tab.title}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF5C28] scale-x-0 transition-transform duration-300 data-[state=active]:scale-x-100" />
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex gap-4">
              <button className="text-[#FF5C28] hover:text-white transition-colors">
                <ArrowLeft size={24} />
              </button>
              <button className="text-[#FF5C28] hover:text-white transition-colors">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              {tab.type === 'list' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Object.entries(tab.content as ListContent).map(([key, value]) => (
                    <div key={key} className="border-l border-white/20 pl-6">
                      <p className="text-sm text-white/60 mb-2">{key}</p>
                      <p className="text-2xl font-heading">{value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {(tab.content as GridItem[]).map((item, index) => (
                    <div key={index} className="space-y-4">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-heading">{item.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CountryInfoSlider; 