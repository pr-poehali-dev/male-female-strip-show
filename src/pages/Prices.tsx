import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const services = [
    {
      category: 'Женские шоу',
      items: [
        { name: 'Классический стриптиз', price: '3,000₽', duration: '30 мин' },
        { name: 'Танец на пилоне', price: '3,500₽', duration: '25 мин' },
        { name: 'Эротический танец', price: '2,500₽', duration: '20 мин' },
        { name: 'Костюмированное шоу', price: '4,000₽', duration: '35 мин' },
        { name: 'Приватный танец', price: '2,000₽', duration: '15 мин' }
      ]
    },
    {
      category: 'Мужские шоу',
      items: [
        { name: 'Мужской стриптиз', price: '3,500₽', duration: '30 мин' },
        { name: 'Силовое шоу', price: '4,000₽', duration: '25 мин' },
        { name: 'Тематическое выступление', price: '4,500₽', duration: '35 мин' },
        { name: 'Групповое шоу', price: '6,000₽', duration: '40 мин' },
        { name: 'Приватный танец', price: '2,500₽', duration: '15 мин' }
      ]
    },
    {
      category: 'Парные и групповые',
      items: [
        { name: 'Парное выступление', price: '7,000₽', duration: '40 мин' },
        { name: 'Групповое шоу (3 артиста)', price: '10,000₽', duration: '60 мин' },
        { name: 'Большое шоу (5+ артистов)', price: '15,000₽', duration: '90 мин' },
        { name: 'Тематическая постановка', price: '12,000₽', duration: '75 мин' }
      ]
    }
  ];

  const vipPackages = [
    {
      name: 'VIP Стандарт',
      price: '25,000₽',
      duration: '3 часа',
      includes: [
        'Отдельная VIP зона',
        'Персональный официант',
        'Бутылка премиум алкоголя',
        '2 персональных шоу',
        'Фуршет'
      ],
      popular: false
    },
    {
      name: 'VIP Премиум',
      price: '45,000₽',
      duration: '4 часа',
      includes: [
        'Роскошная VIP зона',
        'Персональный менеджер',
        'Элитный алкоголь',
        '4 персональных шоу',
        'Премиум фуршет',
        'Шампанское'
      ],
      popular: true
    },
    {
      name: 'VIP Эксклюзив',
      price: '80,000₽',
      duration: '6 часов',
      includes: [
        'Эксклюзивная зона',
        'Персональная команда',
        'Коллекционный алкоголь',
        'Неограниченные шоу',
        'Банкет',
        'Подарки для гостей'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { name: 'Фотосессия с артистом', price: '5,000₽', icon: 'Camera' },
    { name: 'Персональная встреча', price: '3,000₽', icon: 'Users' },
    { name: 'Доставка алкоголя', price: '1,500₽', icon: 'Truck' },
    { name: 'Украшение зала', price: '8,000₽', icon: 'Sparkles' },
    { name: 'DJ сопровождение', price: '10,000₽', icon: 'Music' },
    { name: 'Видеосъемка', price: '15,000₽', icon: 'Video' }
  ];

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
              Цены и услуги
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Прозрачные цены на все виды развлечений
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            Основные услуги
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-surface border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-neon-purple text-center text-xl">
                      {service.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-gray-700/50">
                          <div>
                            <p className="text-gray-300 font-medium">{item.name}</p>
                            <p className="text-gray-400 text-sm">{item.duration}</p>
                          </div>
                          <div className="text-neon-pink font-bold">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Packages */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            VIP пакеты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vipPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`bg-dark-bg border-2 transition-all duration-300 relative ${
                  pkg.popular 
                    ? 'border-neon-pink shadow-lg shadow-neon-pink/20' 
                    : 'border-neon-purple/20 hover:border-neon-pink/40'
                }`}>
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Badge className="bg-neon-pink text-white">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-oswald text-neon-purple">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-3xl font-bold text-neon-pink">
                      {pkg.price}
                    </div>
                    <p className="text-gray-400">{pkg.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <Icon name="Check" size={16} className="text-neon-purple mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-neon-purple hover:bg-neon-pink transition-all duration-300">
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            Дополнительные услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-surface border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <Icon 
                      name={service.icon} 
                      size={32} 
                      className="text-neon-purple group-hover:text-neon-pink transition-colors mx-auto mb-4" 
                    />
                    <CardTitle className="text-neon-purple">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-neon-pink mb-4">{service.price}</div>
                    <Button size="sm" className="bg-neon-purple hover:bg-neon-pink transition-all duration-300">
                      Добавить
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            Информация об оплате
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-dark-bg border-neon-purple/20">
              <CardHeader>
                <Icon name="CreditCard" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Способы оплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Наличные</li>
                  <li>• Банковские карты</li>
                  <li>• Переводы</li>
                  <li>• Криптовалюты</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border-neon-purple/20">
              <CardHeader>
                <Icon name="Receipt" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Предоплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Бронирование столика - 30% от суммы заказа
                </p>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border-neon-purple/20">
              <CardHeader>
                <Icon name="RefreshCw" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Отмена</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Возврат предоплаты при отмене за 24 часа
                </p>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border-neon-purple/20">
              <CardHeader>
                <Icon name="Percent" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Скидки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Постоянным клиентам скидка до 15%
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-oswald font-bold text-neon-purple mb-8">
              Готовы забронировать?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Свяжитесь с нами для индивидуального расчета стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-neon-purple hover:bg-neon-pink transition-all duration-300">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;