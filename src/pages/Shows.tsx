import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: 'Классический стриптиз',
      description: 'Элегантные и чувственные выступления в классическом стиле',
      price: 'от 3,000₽',
      duration: '30 мин',
      category: 'Классика',
      features: ['Профессиональная хореография', 'Стильные костюмы', 'Индивидуальный подход']
    },
    {
      id: 2,
      title: 'Тематические шоу',
      description: 'Уникальные постановки с костюмами и декорациями',
      price: 'от 5,000₽',
      duration: '45 мин',
      category: 'Премиум',
      features: ['Авторские постановки', 'Театральные костюмы', 'Спецэффекты']
    },
    {
      id: 3,
      title: 'Приватные танцы',
      description: 'Персональные выступления в приватной обстановке',
      price: 'от 2,000₽',
      duration: '15 мин',
      category: 'Приватные',
      features: ['Индивидуальное внимание', 'Приватная комната', 'Персональный подход']
    },
    {
      id: 4,
      title: 'Парные выступления',
      description: 'Захватывающие дуэты мужчин и женщин',
      price: 'от 7,000₽',
      duration: '40 мин',
      category: 'Парные',
      features: ['Два артиста', 'Синхронная хореография', 'Эмоциональная подача']
    },
    {
      id: 5,
      title: 'Групповые шоу',
      description: 'Масштабные постановки с участием нескольких артистов',
      price: 'от 10,000₽',
      duration: '60 мин',
      category: 'Групповые',
      features: ['3-5 артистов', 'Сложная хореография', 'Яркие костюмы']
    },
    {
      id: 6,
      title: 'VIP программы',
      description: 'Эксклюзивные шоу для особых гостей',
      price: 'от 15,000₽',
      duration: '90 мин',
      category: 'VIP',
      features: ['Персональное шоу', 'Шампанское', 'Отдельная VIP-зона']
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Классика': return 'bg-blue-500/20 text-blue-400';
      case 'Премиум': return 'bg-purple-500/20 text-purple-400';
      case 'Приватные': return 'bg-pink-500/20 text-pink-400';
      case 'Парные': return 'bg-green-500/20 text-green-400';
      case 'Групповые': return 'bg-orange-500/20 text-orange-400';
      case 'VIP': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-gray-500/20 text-gray-400';
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
              Шоу-программы
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Откройте для себя разнообразие наших профессиональных шоу-программ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shows Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows.map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-surface border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 group h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getCategoryColor(show.category)}>
                        {show.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Icon name="Clock" size={16} />
                        {show.duration}
                      </div>
                    </div>
                    <CardTitle className="text-neon-purple group-hover:text-neon-pink transition-colors">
                      {show.title}
                    </CardTitle>
                    <p className="text-gray-300 text-sm">{show.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neon-purple mb-2">Особенности:</h4>
                      <ul className="space-y-1">
                        {show.features.map((feature, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                            <Icon name="Check" size={14} className="text-neon-pink" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-neon-pink">{show.price}</span>
                      </div>
                      <Button className="w-full bg-neon-purple hover:bg-neon-pink transition-all duration-300">
                        <Icon name="Calendar" size={16} />
                        Забронировать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-oswald font-bold text-neon-purple mb-8">
              Дополнительная информация
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-dark-bg border-neon-purple/20">
                <CardHeader>
                  <Icon name="Shield" size={32} className="text-neon-purple mb-4 mx-auto" />
                  <CardTitle className="text-neon-purple">Безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Все выступления проходят в безопасной и контролируемой обстановке
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dark-bg border-neon-purple/20">
                <CardHeader>
                  <Icon name="Users" size={32} className="text-neon-purple mb-4 mx-auto" />
                  <CardTitle className="text-neon-purple">Профессионалы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Только опытные артисты с профессиональной подготовкой
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dark-bg border-neon-purple/20">
                <CardHeader>
                  <Icon name="Star" size={32} className="text-neon-purple mb-4 mx-auto" />
                  <CardTitle className="text-neon-purple">Качество</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Высокий уровень сервиса и качества всех программ
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

export default Shows;