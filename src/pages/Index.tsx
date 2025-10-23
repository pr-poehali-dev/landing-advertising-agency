import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: ''
  });

  const services = [
    {
      icon: 'FileText',
      title: 'Полиграфия',
      description: 'Визитки, буклеты, открытки, проспекты, листовки, флаеры'
    },
    {
      icon: 'Lightbulb',
      title: 'Наружная реклама',
      description: 'Баннеры, световые вывески'
    },
    {
      icon: 'Gift',
      title: 'Сувенирная продукция',
      description: 'Кружки, ежедневники, футболки, ручки, флешки, портативные зарядные устройства'
    },
    {
      icon: 'Pen',
      title: 'Производство канцелярии',
      description: 'Тетради, ручки, блокноты, стикеры'
    },
    {
      icon: 'ShoppingBag',
      title: 'Производство шопперов',
      description: 'По индивидуальному заказу и оптом'
    },
    {
      icon: 'Share2',
      title: 'SMM и оформление социальных сетей',
      description: 'Комплексное продвижение в социальных сетях'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', email: '', message: '', service: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/1fd69274-9e92-469b-9187-6805d471e3cf/files/1e4fb018-ced9-40c9-977c-956d0bc3f4f1.jpg" 
                alt="RotorRooto Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-foreground">RotorRooto</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-foreground/70 hover:text-primary transition-colors font-medium">
                О компании
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-primary transition-colors font-medium">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/70 hover:text-primary transition-colors font-medium">
                Контакты
              </button>
              <Button onClick={() => scrollToSection('order')} className="bg-primary hover:bg-primary/90">
                Заказать звонок
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Рекламное агентство полного цикла
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Создаём эффективную рекламу с душой. От визитки до комплексного SMM — воплощаем ваши идеи в реальность
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('services')} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Наши услуги
                </Button>
                <Button onClick={() => scrollToSection('order')} size="lg" variant="outline" className="text-lg px-8 border-2">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/1fd69274-9e92-469b-9187-6805d471e3cf/files/39745840-60e5-48dc-90b1-144d2386826b.jpg" 
                alt="Команда RotorRooto" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">О команде RotorRooto</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Мы новая и современная компания будущего. Что нас отличает от других рекламных агентств? Пожалуй, все как у всех. Есть услуги стандартные для компаний и индивидуальные в единичном экземпляре. Гибкая ценовая политика, сроки, доставка, разные бонусы для наших клиентов, но все же, есть кое-что, чем мы выделяемся.
                </p>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border-l-4 border-primary">
                  <p className="text-xl font-semibold text-foreground">
                    Мы всей душой болеем за рекламное дело! В каждый проект мы вкладываем кусочек себя и своей любви. Потому что МЫ ЛЮБИМ СВОЮ РАБОТУ!
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/1fd69274-9e92-469b-9187-6805d471e3cf/files/ba3cbb09-ca31-4e26-b605-ade07123b655.jpg" 
                  alt="Рекламные материалы" 
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр рекламных услуг для развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon} size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Заказать звонок</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ваше имя *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Телефон *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.ru"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Интересующая услуга</label>
                    <Input
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      placeholder="Например: полиграфия"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о вашем проекте..."
                      className="min-h-32"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-14">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">RotorRooto</h3>
              <p className="text-white/70">
                Рекламное агентство полного цикла. Создаём эффективную рекламу с душой.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-secondary" />
                  <span className="text-white/70">г. Пермь, ул. Ленина</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-secondary" />
                  <span className="text-white/70">(342) 213-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-secondary" />
                  <span className="text-white/70">rotorrooto@mail.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="https://vk.com/rotorrooto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="https://instagram.com/rotorrooto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="https://t.me/rotorrooto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; 2024 RotorRooto. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;