import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <div className="min-h-screen bg-dark-bg text-foreground font-roboto">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-surface/90 backdrop-blur-sm border-b border-neon-purple/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-oswald font-bold text-neon-purple animate-pulse-neon">
                NEON CLUB
              </div>
              <div className="text-xs text-neon-pink">18+</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#main" className="hover:text-neon-purple transition-colors">Главная</a>
              <a href="#artists" className="hover:text-neon-purple transition-colors">Артисты</a>
              <a href="#shows" className="hover:text-neon-purple transition-colors">Шоу</a>
              <a href="#schedule" className="hover:text-neon-purple transition-colors">Расписание</a>
              <a href="#booking" className="hover:text-neon-purple transition-colors">Бронирование</a>
              <a href="#contact" className="hover:text-neon-purple transition-colors">Контакты</a>
            </div>
            <Button className="bg-neon-purple hover:bg-neon-pink transition-all duration-300 animate-glow">
              <Icon name="Phone" size={16} />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[url('/img/c2a3ec73-2f4a-4df1-9f3f-dbcaaf64612a.jpg')] bg-cover bg-center opacity-40"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-oswald font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              NEON CLUB
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
            Премиальные шоу-программы для взрослых • Мужские и женские выступления
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-neon-purple hover:bg-neon-pink transition-all duration-300 animate-glow">
              <Icon name="Calendar" size={20} />
              Забронировать столик
            </Button>
            <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg">
              <Icon name="Play" size={20} />
              Смотреть превью
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12 text-neon-purple">
            О клубе
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
              <CardHeader>
                <Icon name="Shield" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Строгий контроль возраста 18+, конфиденциальность гостей</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
              <CardHeader>
                <Icon name="Star" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Премиум качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Профессиональные артисты, высококлассные шоу-программы</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
              <CardHeader>
                <Icon name="Music" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Атмосфера</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Уникальная неоновая атмосфера, современный дизайн</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12 text-neon-purple">
            Наши артисты
          </h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-dark-surface">
              <TabsTrigger value="women" className="data-[state=active]:bg-neon-purple">
                <Icon name="Heart" size={16} />
                Женские шоу
              </TabsTrigger>
              <TabsTrigger value="men" className="data-[state=active]:bg-neon-purple">
                <Icon name="Flame" size={16} />
                Мужские шоу
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="women" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 group">
                    <CardHeader className="p-0">
                      <div className="aspect-[3/4] bg-[url('/img/ddc1c972-58ee-446a-9abc-d2d86cfb6b53.jpg')] bg-cover bg-center rounded-t-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-neon-purple mb-2">Артистка {i}</CardTitle>
                      <CardDescription className="text-gray-400">
                        Профессиональная танцовщица с 5+ лет опыта
                      </CardDescription>
                      <div className="flex gap-2 mt-3">
                        <Badge className="bg-neon-purple/20 text-neon-purple">Стриптиз</Badge>
                        <Badge className="bg-neon-pink/20 text-neon-pink">Приватные</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="men" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 group">
                    <CardHeader className="p-0">
                      <div className="aspect-[3/4] bg-[url('/img/978e169c-1df0-495b-9cbf-3102e59b7c86.jpg')] bg-cover bg-center rounded-t-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-neon-purple mb-2">Артист {i}</CardTitle>
                      <CardDescription className="text-gray-400">
                        Профессиональный танцор с атлетическим телосложением
                      </CardDescription>
                      <div className="flex gap-2 mt-3">
                        <Badge className="bg-neon-purple/20 text-neon-purple">Стриптиз</Badge>
                        <Badge className="bg-neon-pink/20 text-neon-pink">Групповые</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12 text-neon-purple">
            Шоу-программы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Классический стриптиз', price: 'от 3,000₽', icon: 'Music' },
              { title: 'Тематические шоу', price: 'от 5,000₽', icon: 'Drama' },
              { title: 'Приватные танцы', price: 'от 2,000₽', icon: 'Heart' },
              { title: 'Парные выступления', price: 'от 7,000₽', icon: 'Users' },
              { title: 'Групповые шоу', price: 'от 10,000₽', icon: 'Crown' },
              { title: 'VIP программы', price: 'от 15,000₽', icon: 'Star' }
            ].map((show, i) => (
              <Card key={i} className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300 group">
                <CardHeader>
                  <Icon name={show.icon as any} size={32} className="text-neon-purple group-hover:text-neon-pink transition-colors mb-4" />
                  <CardTitle className="text-neon-purple">{show.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-neon-pink">{show.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-neon-purple hover:bg-neon-pink transition-all duration-300">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12 text-neon-purple">
            Расписание
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day, i) => (
                <Card key={i} className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-neon-purple">{day}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-sm text-gray-400">20:00 - Женское шоу</div>
                    <div className="text-sm text-gray-400">22:00 - Мужское шоу</div>
                    <div className="text-sm text-gray-400">00:00 - Приватные</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12 text-neon-purple">
            Бронирование
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-dark-bg border-neon-purple/20">
              <CardHeader>
                <CardTitle className="text-center text-neon-purple">Забронировать столик</CardTitle>
                <CardDescription className="text-center text-gray-400">
                  Выберите дату, время и количество гостей
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-neon-purple mb-2 block">Дата</label>
                    <div className="h-10 bg-dark-surface border border-neon-purple/20 rounded-md flex items-center px-3 text-gray-400">
                      <Icon name="Calendar" size={16} />
                      <span className="ml-2">Выберите дату</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neon-purple mb-2 block">Время</label>
                    <div className="h-10 bg-dark-surface border border-neon-purple/20 rounded-md flex items-center px-3 text-gray-400">
                      <Icon name="Clock" size={16} />
                      <span className="ml-2">Выберите время</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-neon-purple mb-2 block">Количество гостей</label>
                  <div className="h-10 bg-dark-surface border border-neon-purple/20 rounded-md flex items-center px-3 text-gray-400">
                    <Icon name="Users" size={16} />
                    <span className="ml-2">1-10 человек</span>
                  </div>
                </div>
                <Button className="w-full bg-neon-purple hover:bg-neon-pink transition-all duration-300 animate-glow">
                  <Icon name="Check" size={16} />
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12 text-neon-purple">
            Отзывы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Алексей К.', rating: 5, text: 'Невероятная атмосфера! Профессиональные артисты и высокий уровень сервиса.' },
              { name: 'Мария В.', rating: 5, text: 'Отличное место для корпоративных мероприятий. Все гости остались довольны!' },
              { name: 'Дмитрий С.', rating: 5, text: 'Стильный интерьер, качественные шоу-программы. Рекомендую!' }
            ].map((review, i) => (
              <Card key={i} className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-sm text-neon-purple">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, j) => (
                          <Icon key={j} name="Star" size={12} className="text-neon-pink fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12 text-neon-purple">
            Контакты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">г. Москва, ул. Неоновая, 42</p>
                <p className="text-gray-300">Метро: Лубянка</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
              <CardHeader>
                <Icon name="Phone" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">+7 (495) 123-45-67</p>
                <p className="text-gray-300">Работаем: 20:00 - 06:00</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border-neon-purple/20 hover:border-neon-pink/40 transition-all duration-300">
              <CardHeader>
                <Icon name="Mail" size={32} className="text-neon-purple mb-4" />
                <CardTitle className="text-neon-purple">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">info@neonclub.ru</p>
                <p className="text-gray-300">booking@neonclub.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-neon-purple/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-oswald font-bold text-neon-purple mb-4">NEON CLUB</h3>
              <p className="text-gray-400 text-sm">Премиальный клуб для взрослых с высоким уровнем сервиса</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-neon-purple mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Женские шоу</li>
                <li>Мужские шоу</li>
                <li>Приватные танцы</li>
                <li>VIP программы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-neon-purple mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Правила клуба</li>
                <li>Возрастные ограничения</li>
                <li>Конфиденциальность</li>
                <li>Политика оплаты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-neon-purple mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-neon-pink hover:text-neon-purple cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-neon-pink hover:text-neon-purple cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-neon-pink hover:text-neon-purple cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-neon-purple/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 NEON CLUB. Все права защищены. Только для лиц старше 18 лет.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;