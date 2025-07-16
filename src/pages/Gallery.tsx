import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Классическое шоу',
      category: 'shows',
      type: 'image',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg',
      description: 'Элегантное выступление в классическом стиле'
    },
    {
      id: 2,
      title: 'Неоновая сцена',
      category: 'venue',
      type: 'image',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg',
      description: 'Атмосфера нашего клуба с неоновой подсветкой'
    },
    {
      id: 3,
      title: 'Парное выступление',
      category: 'shows',
      type: 'image',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg',
      description: 'Захватывающий дуэт наших артистов'
    },
    {
      id: 4,
      title: 'VIP зона',
      category: 'venue',
      type: 'image',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg',
      description: 'Роскошная VIP зона для особых гостей'
    },
    {
      id: 5,
      title: 'Костюмированное шоу',
      category: 'shows',
      type: 'image',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg',
      description: 'Тематическое выступление с яркими костюмами'
    },
    {
      id: 6,
      title: 'Основной зал',
      category: 'venue',
      type: 'image',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg',
      description: 'Просторный зал с профессиональной сценой'
    },
    {
      id: 7,
      title: 'Акробатическое шоу',
      category: 'shows',
      type: 'image',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg',
      description: 'Впечатляющие акробатические номера'
    },
    {
      id: 8,
      title: 'Наши артисты',
      category: 'artists',
      type: 'image',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg',
      description: 'Профессиональные артисты нашего клуба'
    },
    {
      id: 9,
      title: 'Групповое шоу',
      category: 'shows',
      type: 'image',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg',
      description: 'Масштабное выступление с несколькими артистами'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все', icon: 'Grid3x3' },
    { id: 'shows', name: 'Шоу', icon: 'Star' },
    { id: 'venue', name: 'Интерьер', icon: 'Home' },
    { id: 'artists', name: 'Артисты', icon: 'Users' }
  ];

  const getFilteredItems = () => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === selectedCategory);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-oswald font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Галерея
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Погрузитесь в атмосферу нашего клуба через фотографии
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-neon-purple hover:bg-neon-pink'
                    : 'border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white'
                } transition-all duration-300`}
              >
                <Icon name={category.icon} size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredItems().map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-dark-surface border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <Button
                          size="sm"
                          className="bg-neon-purple hover:bg-neon-pink transition-all duration-300 mb-2"
                          onClick={() => setSelectedImage(item)}
                        >
                          <Icon name="Eye" size={16} className="mr-2" />
                          Просмотр
                        </Button>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-neon-purple/80 text-white">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="text-neon-purple font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl max-h-full relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-dark-bg border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"
            >
              <Icon name="X" size={16} />
            </Button>
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-bg/90 to-transparent p-6">
                <h3 className="text-2xl font-oswald font-bold text-neon-purple mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-oswald font-bold text-neon-purple mb-8">
              Присоединяйтесь к нам
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Станьте частью незабываемого вечера в NEON CLUB
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-neon-purple hover:bg-neon-pink transition-all duration-300">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать столик
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;