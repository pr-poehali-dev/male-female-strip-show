import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Artists = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const femaleArtists = [
    {
      id: 1,
      name: 'Анастасия',
      age: 25,
      experience: '5 лет',
      specialties: ['Классический стриптиз', 'Акробатика', 'Танец на пилоне'],
      description: 'Профессиональная танцовщица с классическим образованием',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg'
    },
    {
      id: 2,
      name: 'Виктория',
      age: 28,
      experience: '7 лет',
      specialties: ['Эротический танец', 'Стриптиз', 'Шоу-программы'],
      description: 'Опытная артистка с яркими тематическими номерами',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg'
    },
    {
      id: 3,
      name: 'Екатерина',
      age: 24,
      experience: '3 года',
      specialties: ['Танец живота', 'Стриптиз', 'Импровизация'],
      description: 'Молодая и талантливая артистка с уникальным стилем',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg'
    },
    {
      id: 4,
      name: 'Дарья',
      age: 26,
      experience: '6 лет',
      specialties: ['Латиноамериканские танцы', 'Стриптиз', 'Парные номера'],
      description: 'Страстная танцовщица с латиноамериканским темпераментом',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg'
    }
  ];

  const maleArtists = [
    {
      id: 5,
      name: 'Дмитрий',
      age: 29,
      experience: '6 лет',
      specialties: ['Мужской стриптиз', 'Акробатика', 'Силовые номера'],
      description: 'Харизматичный артист с атлетическим телосложением',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg'
    },
    {
      id: 6,
      name: 'Александр',
      age: 32,
      experience: '8 лет',
      specialties: ['Эротический танец', 'Стриптиз', 'Тематические шоу'],
      description: 'Опытный профессионал с собственными авторскими номерами',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg'
    },
    {
      id: 7,
      name: 'Андрей',
      age: 27,
      experience: '4 года',
      specialties: ['Современный танец', 'Стриптиз', 'Групповые номера'],
      description: 'Энергичный артист с современным подходом к танцу',
      image: '/img/1ff20be4-dfb5-4340-aff7-4f250d66aa0d.jpg'
    }
  ];

  const allArtists = [...femaleArtists, ...maleArtists];

  const getArtistsByCategory = () => {
    switch (selectedCategory) {
      case 'women': return femaleArtists;
      case 'men': return maleArtists;
      default: return allArtists;
    }
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
              Наши артисты
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Познакомьтесь с талантливыми профессионалами нашего клуба
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-dark-surface">
              <TabsTrigger value="all" className="data-[state=active]:bg-neon-purple">
                <Icon name="Users" size={16} className="mr-2" />
                Все
              </TabsTrigger>
              <TabsTrigger value="women" className="data-[state=active]:bg-neon-purple">
                <Icon name="Heart" size={16} className="mr-2" />
                Женщины
              </TabsTrigger>
              <TabsTrigger value="men" className="data-[state=active]:bg-neon-purple">
                <Icon name="Flame" size={16} className="mr-2" />
                Мужчины
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getArtistsByCategory().map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-surface border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 group overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 bg-cover bg-center"
                        style={{ backgroundImage: `url(${artist.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <Badge className="bg-neon-purple/20 text-neon-purple text-xs">
                              {artist.age} лет
                            </Badge>
                            <Badge className="bg-neon-pink/20 text-neon-pink text-xs">
                              {artist.experience}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-neon-purple group-hover:text-neon-pink transition-colors mb-2">
                      {artist.name}
                    </CardTitle>
                    <p className="text-gray-300 text-sm mb-3">{artist.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neon-purple mb-2">Специализация:</h4>
                      <div className="flex flex-wrap gap-1">
                        {artist.specialties.map((specialty, i) => (
                          <Badge key={i} className="bg-gray-700 text-gray-300 text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-neon-purple hover:bg-neon-pink transition-all duration-300"
                      >
                        <Icon name="Calendar" size={14} />
                        Забронировать
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"
                      >
                        <Icon name="Info" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-oswald font-bold text-neon-purple mb-8">
              Почему выбирают нас
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-dark-bg border-neon-purple/20">
                <CardHeader>
                  <Icon name="Award" size={32} className="text-neon-purple mb-4 mx-auto" />
                  <CardTitle className="text-neon-purple">Профессионализм</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Все наши артисты имеют профессиональную подготовку и большой опыт
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dark-bg border-neon-purple/20">
                <CardHeader>
                  <Icon name="Heart" size={32} className="text-neon-purple mb-4 mx-auto" />
                  <CardTitle className="text-neon-purple">Индивидуальный подход</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Каждое выступление адаптируется под пожелания и предпочтения клиента
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dark-bg border-neon-purple/20">
                <CardHeader>
                  <Icon name="Shield" size={32} className="text-neon-purple mb-4 mx-auto" />
                  <CardTitle className="text-neon-purple">Конфиденциальность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Гарантируем полную конфиденциальность и безопасность для всех гостей
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;