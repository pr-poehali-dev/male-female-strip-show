import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { value: '5+', label: 'Лет работы', icon: 'Calendar' },
    { value: '50+', label: 'Профессиональных артистов', icon: 'Users' },
    { value: '10000+', label: 'Довольных клиентов', icon: 'Heart' },
    { value: '24/7', label: 'Поддержка клиентов', icon: 'Phone' }
  ];

  const features = [
    {
      icon: 'Shield',
      title: 'Безопасность и конфиденциальность',
      description: 'Мы гарантируем полную конфиденциальность наших гостей. Строгий фейс-контроль, система видеонаблюдения и профессиональная охрана обеспечивают безопасность.'
    },
    {
      icon: 'Star',
      title: 'Профессиональные артисты',
      description: 'Все наши артисты имеют профессиональную подготовку в области танца и сценического искусства. Регулярные тренировки и повышение квалификации.'
    },
    {
      icon: 'Home',
      title: 'Премиальная атмосфера',
      description: 'Современный интерьер с неоновой подсветкой, качественная звуковая система и комфортная обстановка создают уникальную атмосферу.'
    },
    {
      icon: 'Award',
      title: 'Высокий уровень сервиса',
      description: 'Персональное обслуживание, индивидуальный подход к каждому гостю и внимание к деталям - наши главные принципы работы.'
    }
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Арт-директор',
      experience: '10 лет',
      description: 'Хореограф и режиссер с высшим образованием, создает уникальные шоу-программы'
    },
    {
      name: 'Михаил Волков',
      position: 'Менеджер по безопасности',
      experience: '8 лет',
      description: 'Опытный специалист по безопасности, обеспечивает комфорт и защиту гостей'
    },
    {
      name: 'Елена Соколова',
      position: 'Менеджер по работе с клиентами',
      experience: '6 лет',
      description: 'Профессионал в области гостеприимства, поможет с выбором программы'
    }
  ];

  const history = [
    {
      year: '2019',
      title: 'Открытие клуба',
      description: 'Открытие первого зала с командой из 10 артистов'
    },
    {
      year: '2020',
      title: 'Расширение',
      description: 'Добавление VIP-зоны и увеличение штата до 25 человек'
    },
    {
      year: '2021',
      title: 'Премиум сервис',
      description: 'Запуск индивидуальных программ и премиум-услуг'
    },
    {
      year: '2022',
      title: 'Реновация',
      description: 'Полная реконструкция интерьера с неоновым дизайном'
    },
    {
      year: '2023',
      title: 'Цифровизация',
      description: 'Запуск онлайн-бронирования и мобильного приложения'
    },
    {
      year: '2024',
      title: 'Новые горизонты',
      description: 'Расширение услуг и открытие второго зала'
    }
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
              О нас
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Узнайте больше о нашем клубе и команде профессионалов
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-surface border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 text-center">
                  <CardHeader>
                    <Icon name={stat.icon} size={32} className="text-neon-purple mx-auto mb-4" />
                    <div className="text-3xl font-bold text-neon-pink">{stat.value}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Text */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-oswald font-bold text-neon-purple mb-8">
              Наша миссия
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              NEON CLUB - это премиальное пространство для взрослых, где искусство танца встречается с высоким уровнем сервиса. 
              Мы создаем уникальную атмосферу, где каждый гость может насладиться профессиональными шоу-программами в комфортной 
              и безопасной обстановке.
            </p>
            <p className="text-lg text-gray-300">
              Наша команда состоит из опытных артистов, которые прошли профессиональную подготовку и регулярно совершенствуют 
              свое мастерство. Мы гордимся тем, что предоставляем нашим гостям не просто развлечение, а настоящее искусство.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-surface border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Icon name={feature.icon} size={32} className="text-neon-purple" />
                      <CardTitle className="text-neon-purple">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-neon-purple text-center">{member.name}</CardTitle>
                    <div className="text-center">
                      <Badge className="bg-neon-pink/20 text-neon-pink">{member.position}</Badge>
                      <p className="text-gray-400 text-sm mt-2">Опыт: {member.experience}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm text-center">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold text-center text-neon-purple mb-12">
            История развития
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                  <Card className="flex-1 bg-dark-surface border-neon-purple/20">
                    <CardHeader>
                      <CardTitle className="text-neon-purple">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-oswald font-bold text-neon-purple mb-8">
              Присоединяйтесь к нам
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Откройте для себя мир профессионального развлечения в NEON CLUB
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

export default About;