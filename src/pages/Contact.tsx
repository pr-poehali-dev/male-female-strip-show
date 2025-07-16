import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      info: 'г. Москва, ул. Неоновая, 42',
      details: 'Метро: Лубянка (5 мин пешком)'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      info: '+7 (495) 123-45-67',
      details: 'Работаем: 20:00 - 06:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      info: 'info@neonclub.ru',
      details: 'Ответим в течение 1 часа'
    },
    {
      icon: 'Clock',
      title: 'Часы работы',
      info: 'Ежедневно: 20:00 - 06:00',
      details: 'Бронирование: 10:00 - 22:00'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Telegram', icon: 'Send', url: '#' },
    { name: 'WhatsApp', icon: 'MessageCircle', url: '#' },
    { name: 'VK', icon: 'ExternalLink', url: '#' }
  ];

  const departments = [
    { value: 'booking', label: 'Бронирование столиков' },
    { value: 'events', label: 'Корпоративные мероприятия' },
    { value: 'vip', label: 'VIP обслуживание' },
    { value: 'general', label: 'Общие вопросы' },
    { value: 'complaint', label: 'Жалобы и предложения' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
              Контакты
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-surface border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 text-center">
                  <CardHeader>
                    <Icon name={info.icon} size={32} className="text-neon-purple mx-auto mb-4" />
                    <CardTitle className="text-neon-purple">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-medium mb-2">{info.info}</p>
                    <p className="text-gray-400 text-sm">{info.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-dark-bg border-neon-purple/20">
                  <CardHeader>
                    <CardTitle className="text-neon-purple text-2xl font-oswald">
                      Написать нам
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
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="bg-dark-surface border-neon-purple/20 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-neon-purple">Телефон</Label>
                          <Input
                            id="phone"
                            placeholder="+7 (___) ___-__-__"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
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
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="bg-dark-surface border-neon-purple/20 text-white"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-neon-purple">Тема обращения</Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger className="bg-dark-surface border-neon-purple/20 text-white">
                            <SelectValue placeholder="Выберите тему" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept.value} value={dept.value}>
                                {dept.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-neon-purple">Сообщение</Label>
                        <Textarea
                          id="message"
                          placeholder="Ваше сообщение..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                          className="bg-dark-surface border-neon-purple/20 text-white resize-none"
                          rows={5}
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-neon-purple hover:bg-neon-pink transition-all duration-300"
                      >
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <Card className="bg-dark-bg border-neon-purple/20">
                  <CardHeader>
                    <CardTitle className="text-neon-purple text-xl">
                      Быстрая связь
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300"
                      size="lg"
                    >
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      WhatsApp
                    </Button>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                      size="lg"
                    >
                      <Icon name="Send" size={20} className="mr-2" />
                      Telegram
                    </Button>
                    <Button 
                      className="w-full bg-neon-purple hover:bg-neon-pink transition-all duration-300"
                      size="lg"
                    >
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-dark-bg border-neon-purple/20">
                  <CardHeader>
                    <CardTitle className="text-neon-purple text-xl">
                      Социальные сети
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => (
                        <Button 
                          key={index}
                          variant="outline"
                          className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300"
                        >
                          <Icon name={social.icon} size={16} className="mr-2" />
                          {social.name}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-dark-bg border-neon-purple/20">
                  <CardHeader>
                    <CardTitle className="text-neon-purple text-xl">
                      Экстренная связь
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4">
                      Если у вас срочный вопрос или чрезвычайная ситуация, звоните напрямую:
                    </p>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300"
                      size="lg"
                    >
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7 (495) 123-45-67
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'Как забронировать столик?',
                  answer: 'Вы можете забронировать столик через форму на сайте, по телефону или в мессенджерах.'
                },
                {
                  question: 'Есть ли возрастные ограничения?',
                  answer: 'Да, вход только для лиц старше 18 лет. При входе необходимо предъявить документ.'
                },
                {
                  question: 'Какая предоплата требуется?',
                  answer: 'Предоплата составляет 30% от стоимости заказа для гарантии брони.'
                },
                {
                  question: 'Можно ли отменить бронь?',
                  answer: 'Да, при отмене за 24 часа до мероприятия предоплата возвращается полностью.'
                },
                {
                  question: 'Есть ли парковка?',
                  answer: 'Да, у нас есть охраняемая парковка для гостей клуба.'
                },
                {
                  question: 'Дресс-код?',
                  answer: 'Деловой или smart casual стиль. Спортивная одежда не допускается.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-dark-surface border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-neon-purple text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;