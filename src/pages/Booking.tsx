import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const packages = [
    {
      id: 1,
      name: 'Базовый',
      price: 15000,
      duration: '2 часа',
      includes: ['Столик на 4 человека', 'Приветственные напитки', 'Классическое шоу'],
      popular: false
    },
    {
      id: 2,
      name: 'Премиум',
      price: 25000,
      duration: '3 часа',
      includes: ['Столик на 6 человек', 'Бутылка шампанского', 'Тематическое шоу', 'Приватный танец'],
      popular: true
    },
    {
      id: 3,
      name: 'VIP',
      price: 45000,
      duration: '4 часа',
      includes: ['VIP зона до 10 человек', 'Премиум алкоголь', 'Персональное шоу', 'Фуршет'],
      popular: false
    }
  ];

  const timeSlots = [
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Заявка отправлена! Мы свяжемся с вами для подтверждения.');
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
              Бронирование
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Забронируйте столик и окунитесь в мир незабываемых эмоций
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            Выберите пакет
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`bg-dark-surface border-2 transition-all duration-300 relative ${
                  selectedPackage === pkg.id.toString() 
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
                      {pkg.price.toLocaleString('ru-RU')}₽
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
                    <Button 
                      className={`w-full transition-all duration-300 ${
                        selectedPackage === pkg.id.toString()
                          ? 'bg-neon-pink hover:bg-neon-pink/80'
                          : 'bg-neon-purple hover:bg-neon-pink'
                      }`}
                      onClick={() => setSelectedPackage(pkg.id.toString())}
                    >
                      {selectedPackage === pkg.id.toString() ? 'Выбрано' : 'Выбрать'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-dark-bg border-neon-purple/20">
              <CardHeader>
                <CardTitle className="text-center text-neon-purple text-2xl font-oswald">
                  Форма бронирования
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-neon-purple">Имя</Label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        required
                        className="bg-dark-surface border-neon-purple/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-neon-purple">Телефон</Label>
                      <Input
                        id="phone"
                        placeholder="+7 (___) ___-__-__"
                        required
                        className="bg-dark-surface border-neon-purple/20 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-neon-purple">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-dark-surface border-neon-purple/20 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-neon-purple">Дата</Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        required
                        className="bg-dark-surface border-neon-purple/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-neon-purple">Время</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="bg-dark-surface border-neon-purple/20 text-white">
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests" className="text-neon-purple">Количество гостей</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger className="bg-dark-surface border-neon-purple/20 text-white">
                        <SelectValue placeholder="Выберите количество" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'человек' : 'человека'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="comments" className="text-neon-purple">Особые пожелания</Label>
                    <Textarea
                      id="comments"
                      placeholder="Расскажите о ваших предпочтениях..."
                      className="bg-dark-surface border-neon-purple/20 text-white resize-none"
                      rows={4}
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-neon-purple hover:bg-neon-pink transition-all duration-300 animate-glow"
                    >
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Забронировать
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            Важная информация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-dark-surface border-neon-purple/20">
              <CardHeader>
                <Icon name="Clock" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Время работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Ежедневно с 20:00 до 06:00
                </p>
              </CardContent>
            </Card>
            <Card className="bg-dark-surface border-neon-purple/20">
              <CardHeader>
                <Icon name="Users" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Возрастное ограничение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Только для лиц старше 18 лет
                </p>
              </CardContent>
            </Card>
            <Card className="bg-dark-surface border-neon-purple/20">
              <CardHeader>
                <Icon name="CreditCard" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Наличные, карты, переводы
                </p>
              </CardContent>
            </Card>
            <Card className="bg-dark-surface border-neon-purple/20">
              <CardHeader>
                <Icon name="Shield" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Конфиденциальность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Полная конфиденциальность гарантирована
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;